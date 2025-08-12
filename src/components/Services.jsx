import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Clock, Users, Target, Zap, ArrowRight, Gift, Trophy, Heart } from 'lucide-react'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const plans = [
    {
      name: "Plano Básico",
      subtitle: "Ideal para iniciantes",
      price: "R$ 297",
      originalPrice: "R$ 497",
      duration: "por mês",
      popular: false,
      features: [
        "Consulta inicial completa",
        "Plano alimentar personalizado",
        "Suporte via WhatsApp",
        "Receitas exclusivas",
        "Acompanhamento mensal"
      ],
      bonus: [
        "E-book: Receitas Fit",
        "Lista de substituições"
      ]
    },
    {
      name: "Plano Premium",
      subtitle: "Mais completo e eficaz",
      price: "R$ 497",
      originalPrice: "R$ 797",
      duration: "por mês",
      popular: true,
      features: [
        "Tudo do Plano Básico",
        "Consultas quinzenais",
        "Suporte prioritário 24h",
        "Plano de exercícios básico",
        "Ajustes ilimitados no plano",
        "Acompanhamento de bioimpedância"
      ],
      bonus: [
        "E-book: Receitas Fit",
        "Lista de substituições",
        "Guia de suplementação",
        "Planner de refeições"
      ]
    },
    {
      name: "Plano VIP",
      subtitle: "Transformação completa",
      price: "R$ 797",
      originalPrice: "R$ 1.297",
      duration: "por mês",
      popular: false,
      features: [
        "Tudo do Plano Premium",
        "Consultas semanais",
        "Acompanhamento diário",
        "Cardápio semanal detalhado",
        "Suporte nutricional 24/7",
        "Monitoramento de resultados",
        "Acesso a grupo VIP"
      ],
      bonus: [
        "Todos os bônus anteriores",
        "Curso: Reeducação Alimentar",
        "Sessão de coaching nutricional",
        "Kit de receitas gourmet fit"
      ]
    }
  ]

  const methodology = [
    {
      step: "01",
      title: "Avaliação Completa",
      description: "Análise detalhada do seu perfil, histórico alimentar, exames e objetivos específicos.",
      icon: Target
    },
    {
      step: "02", 
      title: "Plano Personalizado",
      description: "Desenvolvimento de um protocolo nutricional único, adaptado ao seu estilo de vida.",
      icon: Heart
    },
    {
      step: "03",
      title: "Acompanhamento Ativo",
      description: "Monitoramento constante dos resultados com ajustes precisos quando necessário.",
      icon: Trophy
    },
    {
      step: "04",
      title: "Resultados Sustentáveis",
      description: "Consolidação dos hábitos saudáveis para manutenção permanente dos resultados.",
      icon: Star
    }
  ]

  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados aparecem já na primeira semana! A maioria dos clientes perde de 2-4kg no primeiro mês, mas os resultados variam conforme o organismo de cada pessoa."
    },
    {
      question: "O plano funciona para qualquer idade?",
      answer: "Sim! Atendo pessoas de todas as idades, desde adolescentes até idosos. Cada plano é adaptado considerando as necessidades específicas de cada faixa etária."
    },
    {
      question: "Preciso fazer exercícios obrigatoriamente?",
      answer: "Não é obrigatório, mas recomendado. O foco principal é na alimentação, mas atividade física acelera os resultados e melhora a saúde geral."
    },
    {
      question: "E se eu não conseguir seguir o plano?",
      answer: "Não se preocupe! Faremos ajustes quantas vezes forem necessárias até encontrarmos um plano que se encaixe perfeitamente na sua rotina."
    },
    {
      question: "Tem garantia de resultados?",
      answer: "Sim! Se você seguir o plano corretamente por 30 dias e não ver resultados, devolvemos seu investimento integral."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Claro! Não há fidelidade. Você pode cancelar quando quiser, mas tenho certeza de que ficará satisfeita com os resultados."
    }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
            <span className="text-gray-900">Consultoria Alimentar</span>
            <br />
            <span className="gradient-text">Personalizada</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Escolha o plano ideal para sua transformação. Todos incluem acompanhamento profissional 
            e garantia de resultados!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                plan.popular ? 'ring-4 ring-primary-500 scale-105' : ''
              }`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 font-semibold">
                  🔥 MAIS ESCOLHIDO
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.duration}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Check className="w-5 h-5 text-primary-600 mr-2" />
                    Incluso no plano:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.bonus.length > 0 && (
                  <div className="bg-gradient-to-r from-secondary-50 to-accent-50 p-4 rounded-lg mb-8">
                    <h4 className="font-semibold text-gray-900 flex items-center mb-3">
                      <Gift className="w-5 h-5 text-secondary-600 mr-2" />
                      Bônus Exclusivos:
                    </h4>
                    {plan.bonus.map((bonus, bonusIndex) => (
                      <div key={bonusIndex} className="flex items-center space-x-3 mb-2">
                        <Star className="w-4 h-4 text-secondary-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{bonus}</span>
                      </div>
                    ))}
                  </div>
                )}

                <motion.button
                  onClick={scrollToContact}
                  className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Começar Agora</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Como funciona minha 
            <span className="gradient-text-secondary"> metodologia?</span>
          </motion.h3>
          
          <motion.p
            className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Um processo estruturado e cientificamente comprovado para garantir seus resultados
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white text-center mb-20"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🚨 Oferta Especial por Tempo Limitado!
          </motion.h3>
          
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Primeiros 10 clientes ganham <strong>30% de desconto</strong> + bônus exclusivos. 
            Não perca essa oportunidade de transformar sua vida!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToContact}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              <span>Garantir Minha Vaga Agora!</span>
            </motion.button>
            
            <div className="flex items-center space-x-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span>Vagas limitadas!</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
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
            Perguntas 
            <span className="gradient-text-accent"> Frequentes</span>
          </motion.h3>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  {faq.question}
                  <span className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <motion.div
                    className="px-6 py-4 bg-gray-50 border-t"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}