import { motion } from 'framer-motion';
import type { CardContent } from '../types/Card';

interface CardModalProps {
  content: CardContent;
}

const CardModal = ({ content }: CardModalProps) => {
  const getCardEmoji = (type: string) => {
    const emojis = {
      project: '🔧',
      skill: '🧠',
      award: '🏆',
      tool: '🚀',
      role: '📍'
    };
    return emojis[type as keyof typeof emojis] || '📌';
  };

  const getCardTypeLabel = (type: string) => {
    const labels = {
      project: 'Project',
      skill: 'Skill', 
      award: 'Award',
      tool: 'Tool',
      role: 'Role'
    };
    return labels[type as keyof typeof labels] || 'Card';
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{getCardEmoji(content.type)}</span>
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
            content.type === 'project' ? 'bg-project/20 text-project' :
            content.type === 'skill' ? 'bg-skill/20 text-skill' :
            content.type === 'award' ? 'bg-award/20 text-award' :
            content.type === 'tool' ? 'bg-tool/20 text-tool' :
            content.type === 'role' ? 'bg-role/20 text-role' : 'bg-gray-200 text-gray-600'
          }`}>
            {getCardTypeLabel(content.type)}
          </span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold mb-3 text-gradient-premium">
          {content.title}
        </h2>
        
        {content.subtitle && (
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6">
            {content.subtitle}
          </p>
        )}
      </div>

      {/* Objectives/Description */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gradient-blue">
          🎯 <span>Objective</span>
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Metrics/Results */}
      {content.metrics && content.metrics.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gradient-blue">
            📊 <span>Results</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-green-500 text-lg">📈</span>
                <p className="font-medium text-gray-800">{metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Tools & Technologies */}
      {content.tools && content.tools.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gradient-blue">
            🛠 <span>Tools & Technologies</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {content.tools.map((tool, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      {content.links && content.links.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            🔗 <span>Links</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {content.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {link.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Strategy Section for Projects */}
      {content.type === 'project' && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            💡 <span>Strategy</span>
          </h3>
          <p className="text-gray-700">
            {content.type === 'project' && content.id === 'self-serve-onboarding' && 
              'Self-serve flow with personalized content blocks (via SFMC + Copilot)'
            }
            {content.type === 'project' && content.id === 'growth-loop-framework' && 
              'Data-driven framework enabling users to discover and signup for Top Hat more efficiently through optimized touchpoints'
            }
            {content.type === 'project' && content.id === 'ai-form-builder' && 
              'AI-powered tooling to streamline form creation and testing workflows for marketing teams'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default CardModal;
