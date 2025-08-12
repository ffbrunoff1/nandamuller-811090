import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle, Zap, Heart, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-hero overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-white/50"></div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-60 float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-100 rounded-full opacity-60 float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent-100 rounded-full opacity-60 float-animation" style={{animationDelay: '4s'}}></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Nutricionista Especialista em Emagrecimento</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-gray-900">Transforme sua vida com uma</span>
              <br />
              <span className="gradient-text">alimentação equilibrada</span>
              <br />
              <span className="text-gray-900">e saudável</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Emagreça de forma definitiva com Nanda Muller! 
              <span className="gradient-text-secondary font-semibold"> Emagrecimento sustentável, saúde garantida!</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Comece sua jornada hoje</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                onClick={scrollToContact}
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                <span>Consultoria Grátis</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { icon: CheckCircle, text: "Resultados Comprovados" },
                { icon: Heart, text: "Saúde em Primeiro Lugar" },
                { icon: Sparkles, text: "Método Personalizado" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-6 h-6 text-primary-600" />
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              <motion.div
                className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Consultoria Alimentar Personalizada
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Uma abordagem única e científica para o seu emagrecimento. 
                    Planos alimentares personalizados que se adaptam ao seu estilo de vida.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "✨ Avaliação nutricional completa",
                      "🎯 Plano alimentar personalizado",
                      "📱 Acompanhamento constante",
                      "🏆 Resultados garantidos"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-center space-x-2 text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      >
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-secondary text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Quero Transformar Minha Vida!
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl opacity-20 -z-10 float-animation"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-accent-200 to-primary-200 rounded-3xl opacity-20 -z-10 float-animation" style={{animationDelay: '3s'}}></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-500">
          <span className="text-sm">Descubra mais</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}