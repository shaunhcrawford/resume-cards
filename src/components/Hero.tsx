import { motion } from 'framer-motion';
import { useState } from 'react';
import ChatBot from './ChatBot';

const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <>
    <motion.section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-gray-50/50" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={itemVariants}
        >

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Shaun
            </span>
            .
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl leading-relaxed mb-8 sm:mb-10 lg:mb-12"
            variants={itemVariants}
          >
            I build growth loops, ship AI tools, and lead high-impact teams.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex gap-4 mb-12" variants={itemVariants}>
            <a
              href="mailto:shaunhcrawford@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Get in Touch
            </a>
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-8 py-3 border-2 border-blue-600 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Chat with AI
            </button>
          </motion.div>

          {/* Key achievements */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={itemVariants}
          >
            <div className="text-center sm:text-left premium-glass rounded-xl p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 text-gradient-blue">200%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Feature Adoption Increase</div>
            </div>
            <div className="text-center sm:text-left premium-glass rounded-xl p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 text-gradient-premium">400%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Projected Signup Growth</div>
            </div>
            <div className="text-center sm:text-left premium-glass rounded-xl p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 text-gradient-gold">90%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Faster Tool Development</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Hero;
