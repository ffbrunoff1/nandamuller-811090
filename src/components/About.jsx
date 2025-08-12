import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Target, TrendingUp, Heart, Star, Clock, Shield } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "500+", label: "Clientes Transformados", icon: Users },
    { number: "95%", label: "Taxa de Sucesso", icon: TrendingUp },
    { number: "8+", label: "Anos de Experiência", icon: Award },
    { number: "100%", label: "Satisfação Garantida", icon: Shield }
  ]

  const benefits = [
    {
      icon: Target,
      title: "Resultados Personalizados",
      description: "Cada plano é único e desenvolvido especificamente para você, considerando seu metabolismo, rotina e objetivos."
    },
    {
      icon: Heart,
      title: "Saúde em Primeiro Lugar",
      description: "Nosso foco é o emagrecimento saudável e sustentável, priorizando sempre seu bem-estar e qualidade de vida."
    },
    {
      icon: Star,
      title: "Método Comprovado",
      description: "Utilizamos técnicas cientificamente comprovadas e atualizadas para garantir os melhores resultados."
    },
    {
      icon: Clock,
      title: "Acompanhamento Contínuo",
      description: "Você terá suporte constante durante toda sua jornada, com ajustes e orientações quando necessário."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdi 15kg em 4 meses",
      text: "A Nanda mudou minha vida! O plano alimentar é super fácil de seguir e os resultados apareceram rapidamente.",
      rating: 5
    },
    {
      name: "João Santos",
      result: "Eliminei 20kg em 6 meses",
      text: "Finalmente encontrei um método que funciona! O acompanhamento da Nanda fez toda a diferença.",
      rating: 5
    },
    {
      name: "Ana Costa",
      result: "Perdi 12kg em 3 meses",
      text: "Não acreditava que seria tão fácil. A orientação personalizada tornou tudo muito mais simples.",
      rating: 5
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900">Por que escolher a</span>
            <br />
            <span className="gradient-text">Nanda Muller?</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Especialista em emagrecimento com resultados comprovados. 
            Minha missão é transformar vidas através de uma alimentação equilibrada e sustentável.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl shadow-custom"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Meu Compromisso com 
              <span className="gradient-text-secondary"> Seus Resultados</span>
            </motion.h3>
            
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Como nutricionista especializada em emagrecimento, desenvolvi um método único que combina 
              ciência nutricional com um acompanhamento humanizado. Cada cliente é único, e por isso 
              cada plano é desenvolvido especificamente para suas necessidades.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Minha abordagem vai além da simples prescrição de dietas. Trabalho com reeducação alimentar, 
              mudança de hábitos e principalmente, com o fortalecimento da sua autoestima e confiança.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {["CRN Ativa", "Especialização em Emagrecimento", "Métodos Científicos", "Resultados Comprovados"].map((item, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-custom border border-gray-100 hover:border-primary-200 transition-all duration-300"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 rounded-3xl p-8 md:p-12"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            O que meus clientes dizem sobre os 
            <span className="gradient-text-accent"> resultados</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm gradient-text-secondary font-medium">{testimonial.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}