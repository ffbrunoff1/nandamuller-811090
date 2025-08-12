import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Leaf, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Contato', id: 'contato' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900/20 to-secondary-900/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            className="lg:col-span-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <Heart className="absolute -top-1 -right-1 w-5 h-5 text-accent-400 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Nanda Muller</span>
                <span className="text-sm font-medium text-primary-400">Nutricionista</span>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 leading-relaxed mb-6 text-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Especialista em emagrecimento com foco em resultados sustentáveis e saúde em primeiro lugar. 
              Transformando vidas através de uma alimentação equilibrada e personalizada.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                "✨ Resultados Comprovados",
                "💚 Saúde em Primeiro Lugar",
                "🎯 Método Personalizado",
                "🏆 Garantia de Resultados"
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className="bg-primary-800/50 text-primary-200 px-3 py-1 rounded-full text-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Phone className="w-5 h-5 text-primary-400" />
                <span>WhatsApp disponível</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Mail className="w-5 h-5 text-primary-400" />
                <span>Resposta em até 2h</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Atendimento Online</span>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-primary-800/30 to-secondary-800/30 rounded-lg border border-primary-700/30"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-primary-300 mb-2">Horário de Atendimento</h4>
              <p className="text-sm text-gray-300">Segunda a Sexta: 8h às 18h</p>
              <p className="text-sm text-gray-300">Sábados: 8h às 12h</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 pt-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-sm"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              © 2024 Nanda Muller - Nutricionista. Todos os direitos reservados.
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-1 text-sm text-gray-400"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span>Criado com</span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="italic text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                Papum
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contato')}
            className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-5 h-5" />
            <span>Comece Sua Transformação Hoje!</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}