import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatService } from '../services/chatService';
import type { ChatMessage } from '../services/chatService';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(Math.max(textarea.scrollHeight, 40), 120); // min 40px, max 120px
      textarea.style.height = `${newHeight}px`;
    }
  };
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await chatService.sendMessage(userMessage, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 w-[800px] h-[800px] bg-white rounded-2xl shadow-xl overflow-hidden z-50"
        >
          {/* Header */}
          <div className="p-4 border-b bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Chat with Shaun's AI</h3>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[calc(100%-9rem)] overflow-y-auto p-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t shadow-md">
            <div className="flex space-x-2">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  adjustTextareaHeight();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Ask me anything about Shaun's experience..."
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden min-h-[40px] max-h-[120px]"
                disabled={isLoading}
                rows={1}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;
