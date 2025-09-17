import { motion } from 'framer-motion';
import { useState } from 'react';
import type { CardContent } from '../types/Card';
import Modal from './Modal';

interface CardProps {
  content: CardContent;
  className?: string;
  layout?: 'default' | 'expanded';
  onSkillClick?: (skill: string) => void;
  activeSkills?: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -4,
    transition: { duration: 0.2 }
  }
};

const Card = ({ content, className = '', layout = 'default', onSkillClick, activeSkills = [] }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleCardClick = () => {
    if (layout === 'default') {
      setIsModalOpen(true);
    }
  };

  const renderDefaultCard = () => (
    <div className="p-4 sm:p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getCardEmoji(content.type)}</span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            content.type === 'project' ? 'bg-project/20 text-project' :
            content.type === 'skill' ? 'bg-skill/20 text-skill' :
            content.type === 'award' ? 'bg-award/20 text-award' :
            content.type === 'tool' ? 'bg-tool/20 text-tool' :
            content.type === 'role' ? 'bg-role/20 text-role' : 'bg-gray-200 text-gray-600'
          }`}>
            {getCardTypeLabel(content.type)}
          </span>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-base sm:text-lg lg:text-xl font-space font-bold mb-2 line-clamp-2 text-gradient-premium">
        {content.title}
      </h3>
      
      {/* Subtitle */}
      {content.subtitle && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-1">
          {content.subtitle}
        </p>
      )}

      {/* Metrics */}
      {content.metrics && content.metrics.length > 0 && (
        <div className="flex flex-col gap-1 mb-4">
          {content.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-green-500 text-sm">📈</span>
              <p className="text-sm font-medium text-gray-700 line-clamp-1">
                {metric}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tools */}
      {content.tools && content.tools.length > 0 && (
        <div className="mt-auto">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-xs text-gray-500">🛠</span>
            <span className="text-xs text-gray-500 font-medium">Tools</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {content.tools.slice(0, 4).map((tool, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 premium-glass rounded-full text-gray-700 font-medium"
              >
                {tool}
              </span>
            ))}
            {content.tools.length > 4 && (
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">
                +{content.tools.length - 4}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );

  const renderExpandedCard = () => (
    <div className="card-expanded">
      <div className="card-expanded-content">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{getCardEmoji(content.type)}</span>
          <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${
            content.type === 'project' ? 'bg-project/20 text-project' :
            content.type === 'skill' ? 'bg-skill/20 text-skill' :
            content.type === 'award' ? 'bg-award/20 text-award' :
            content.type === 'tool' ? 'bg-tool/20 text-tool' :
            content.type === 'role' ? 'bg-role/20 text-role' : 'bg-gray-200 text-gray-600'
          }`}>
            {getCardTypeLabel(content.type)}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-space font-bold text-gradient-premium">
          {content.title}
        </h3>

        {content.subtitle && (
          <p className="text-lg text-gray-600">
            {content.subtitle}
          </p>
        )}

        <p className="text-gray-700 leading-relaxed">
          {content.description}
        </p>

        {content.metrics && content.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {content.metrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-2 bg-green-50/50 rounded-lg p-3 border border-green-100">
                <span className="text-green-500">📈</span>
                <p className="font-medium text-gray-700">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card-expanded-sidebar">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills & Tools</h4>
          <div className="flex flex-wrap gap-2">
            {content.tools?.map((tool, index) => (
              <button
                key={index}
                className="skill-tag"
                data-active={activeSkills.includes(tool)}
                onClick={() => onSkillClick?.(tool)}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        className={`group relative overflow-hidden rounded-2xl premium-shadow cursor-pointer ${className}`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={layout === 'default' ? "hover" : undefined}
        whileTap={layout === 'default' ? { scale: 0.98 } : undefined}
        onClick={handleCardClick}
      >
        {layout === 'default' ? renderDefaultCard() : renderExpandedCard()}
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{getCardEmoji(content.type)}</span>
            <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${
              content.type === 'project' ? 'bg-project/20 text-project' :
              content.type === 'skill' ? 'bg-skill/20 text-skill' :
              content.type === 'award' ? 'bg-award/20 text-award' :
              content.type === 'tool' ? 'bg-tool/20 text-tool' :
              content.type === 'role' ? 'bg-role/20 text-role' : 'bg-gray-200 text-gray-600'
            }`}>
              {getCardTypeLabel(content.type)}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-space font-bold text-gradient-premium mb-3">
            {content.title}
          </h2>

          {content.subtitle && (
            <p className="text-lg text-gray-600 mb-4">
              {content.subtitle}
            </p>
          )}

          <p className="text-gray-700 leading-relaxed mb-6">
            {content.description}
          </p>

          {content.metrics && content.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {content.metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                  <span className="text-green-500">📈</span>
                  <p className="font-medium text-gray-700">
                    {metric}
                  </p>
                </div>
              ))}
            </div>
          )}

          {content.tools && content.tools.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {content.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Card;