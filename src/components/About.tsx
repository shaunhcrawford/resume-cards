import { motion } from 'framer-motion';

const About = () => {
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
    <motion.section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/shaun.jpg" 
                  alt="Shaun Crawford" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl opacity-60" />
            </div>
          </motion.div>
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold mb-6 text-gradient-premium"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8"
              variants={itemVariants}
            >
              <p>
                A growth leader with a passion for building and scaling products that make a difference. 
                I specialize in PLG strategies, experimentation, and leveraging AI to drive user engagement.
              </p>
              <p>
                Currently at Top Hat, I've led initiatives that increased feature adoption by 200% and 
                developed growth frameworks projected to drive 400% signup growth. I believe in combining 
                strategic insight with hands-on execution.
              </p>
              <p>
                When I'm not optimizing funnels or building AI tools, you'll find me exploring the latest 
                in growth technology and sharing insights with fellow marketers.
              </p>
            </motion.div>

            {/* Skills highlight */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="premium-glass rounded-xl p-4">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-semibold text-gray-900 mb-1 text-gradient-blue">Growth Strategy</div>
                <div className="text-sm text-gray-600">PLG, Experimentation, Funnel Optimization</div>
              </div>
              <div className="premium-glass rounded-xl p-4">
                <div className="text-2xl mb-2">🤖</div>
                <div className="font-semibold text-gray-900 mb-1 text-gradient-blue">AI & Automation</div>
                <div className="text-sm text-gray-600">Tool Development, Process Optimization</div>
              </div>
              <div className="premium-glass rounded-xl p-4">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-semibold text-gray-900 mb-1 text-gradient-blue">Analytics</div>
                <div className="text-sm text-gray-600">GA4, SQL, Data-Driven Decisions</div>
              </div>
              <div className="premium-glass rounded-xl p-4">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-semibold text-gray-900 mb-1 text-gradient-blue">Leadership</div>
                <div className="text-sm text-gray-600">Cross-functional Teams, Mentoring</div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="premium-glass rounded-xl p-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">🎓</div>
                <div>
                  <div className="font-semibold text-gray-900 text-gradient-gold">Bachelor of Business Administration</div>
                  <div className="text-sm text-gray-600">Trent University • Graduated with Honours • Marketing & Consumer Culture</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
