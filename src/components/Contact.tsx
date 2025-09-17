import { motion } from 'framer-motion';

const Contact = () => {
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

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      href: 'https://www.linkedin.com/in/crawfordshaun/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: '💻',
      href: 'https://github.com/shauncrawford',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'Resume',
      icon: '📄',
      href: '/documents/Shaun_Crawford_Resume.pdf',
      color: 'hover:bg-emerald-600'
    }
  ];

  return (
    <motion.section
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Let's build something great
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Looking for opportunities to lead growth and product initiatives
            that drive meaningful impact. Ready to tackle your biggest challenges.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:shaunhcrawford@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                📧 Get in Touch
              </span>
            </motion.a>
            
            <motion.a
              href="/documents/Shaun_Crawford_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-lg hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className="relative flex items-center gap-2">
                📄 Download Resume
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-12"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 premium-glass rounded-xl transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="text-center p-6 premium-glass rounded-xl">
              <div className="text-3xl mb-3">📍</div>
              <div className="font-semibold mb-2 text-gradient-premium">Location</div>
              <div className="text-gray-300">Ottawa, ON (Remote)</div>
            </div>
            <div className="text-center p-6 premium-glass rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <div className="font-semibold mb-2 text-gradient-premium">Focus</div>
              <div className="text-gray-300">Director Growth & Product</div>
            </div>
            <div className="text-center p-6 premium-glass rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="text-3xl mb-3">⚡</div>
              <div className="font-semibold mb-2 text-gradient-premium">Response Time</div>
              <div className="text-gray-300">Usually within 24 hours</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
