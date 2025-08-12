import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Leaf, Heart } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <Heart className="absolute -top-1 -right-1 w-4 h-4 text-accent-500 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-gray-900'
              }`}>
                Nanda Muller
              </span>
              <span className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-primary-600' : 'text-primary-700'
              }`}>
                Nutricionista
              </span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item === 'Início' ? 'hero' : item.toLowerCase())}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-gray-900'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-primary text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Comece Agora
            </motion.button>
          </nav>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {['Início', 'Sobre', 'Serviços', 'Contato'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item === 'Início' ? 'hero' : item.toLowerCase())}
                  className="block w-full text-left text-gray-700 font-medium py-2 hover:text-primary-600 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('contato')}
                className="w-full bg-gradient-primary text-white py-3 rounded-full font-medium mt-4 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Comece Agora
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}