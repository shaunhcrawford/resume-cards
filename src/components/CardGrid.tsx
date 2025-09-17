import { motion } from 'framer-motion';
import { useState } from 'react';
import type { CardContent } from '../types/Card';
import Card from './Card';

interface CardGridProps {
  cards: CardContent[];
  className?: string;
  featured?: boolean;
  columns?: 1 | 2 | 3 | 4 | 'auto' | 'full';
  layout?: 'default' | 'expanded';
  collapsible?: boolean;
  initialVisibleCount?: number;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const CardGrid = ({ 
  cards, 
  className = '', 
  featured = false, 
  columns = 'auto',
  layout = 'default',
  collapsible = false,
  initialVisibleCount = 3
}: CardGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? cards : cards.slice(0, initialVisibleCount);
  const getGridClass = () => {
    if (layout === 'expanded') return 'card-grid-expanded';
    if (featured) return 'card-grid-3';
    
    switch (columns) {
      case 1: return 'card-grid-1';
      case 2: return 'card-grid-2';
      case 3: return 'card-grid-3';
      case 4: return 'card-grid-4';
      case 'full': return 'card-grid-full';
      default: return 'card-grid';
    }
  };

  return (
    <motion.div
      className={`${getGridClass()} ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {visibleCards.map((card, index) => (
        <Card 
          key={card.id} 
          content={card} 
          className={featured && index === 0 ? 'featured-card' : ''}
        />
      ))}
      {collapsible && cards.length > initialVisibleCount && (
        <motion.div 
          className="col-span-full flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            {showAll ? (
              <>
                Show Less
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </>
            ) : (
              <>
                See More Experience
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </>
            )}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CardGrid;
