import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    goal: ''
  })
  const [status, setStatus] = useState('idle')
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token,
          recipientEmail: ''
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          goal: ''
        })
        recaptchaRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "WhatsApp disponível",
      description: "Atendimento de segunda a sexta"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "Resposta em até 2h",
      description: "Suporte técnico e dúvidas"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Atendimento Online",
      description: "Consultas por videochamada"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg a Sex: 8h às 18h",
      description: "Sábados: 8h às 12h"
    }
  ]

  const goals = [
    "Perder peso de forma saudável",
    "Ganhar massa muscular",
    "Melhorar disposição e energia",
    "Reeducação alimentar",
    "Controle de diabetes/hipertensão",
    "Preparação para eventos",
    "Outro objetivo"
  ]

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
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
            <span className="text-gray-900">Pronta para</span>
            <br />
            <span className="gradient-text">Transformar sua Vida?</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Entre em contato agora e dê o primeiro passo rumo ao seu novo you. 
            Estou aqui para te ajudar a alcançar seus objetivos!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl mb-8"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🔥 Consultoria <span className="gradient-text-secondary">Gratuita</span> de 15 minutos!
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Preencha o formulário ao lado e receba uma consultoria gratuita onde vamos:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "✨ Analisar seu perfil nutricional atual",
                  "🎯 Definir metas realistas e alcançáveis",
                  "📋 Criar um mini-plano personalizado",
                  "💡 Tirar todas suas dúvidas sobre emagrecimento"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-accent-50 to-primary-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 font-medium">
                  ⏰ <strong>Atenção:</strong> Vagas limitadas para consultoria gratuita. 
                  Apenas 5 pessoas por semana!
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-primary-600 font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solicite sua Consultoria <span className="gradient-text">Gratuita</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </motion.div>

                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    Qual seu principal objetivo? *
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione seu objetivo</option>
                    {goals.map((goal, index) => (
                      <option key={index} value={goal}>{goal}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    Conte um pouco sobre seu histórico
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Ex: Já tentei várias dietas, tenho dificuldade com doces, rotina corrida..."
                  ></textarea>
                </motion.div>

                <div className="mt-4 flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: status !== 'loading' ? 1.02 : 1 }}
                  whileTap={{ scale: status !== 'loading' ? 0.98 : 1 }}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Solicitar Consultoria Gratuita</span>
                    </>
                  )}
                </motion.button>

                {status === 'success' && (
                  <motion.div
                    className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Mensagem enviada! Entraremos em contato em breve.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Erro ao enviar. Tente novamente.</span>
                  </motion.div>
                )}
              </form>

              <motion.div
                className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-700">
                  🔒 <strong>Seus dados estão seguros.</strong> Utilizamos apenas para entrar em contato sobre sua consultoria.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white p-8 rounded-2xl max-w-4xl mx-auto"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ⚡ Não perca mais tempo com dietas que não funcionam!
            </h3>
            <p className="text-lg mb-6">
              Sua transformação começa HOJE. Quanto mais você espera, mais difícil fica começar.
            </p>
            <motion.button
              onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-accent-600 px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Garantir Minha Vaga Agora! 🚀
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}