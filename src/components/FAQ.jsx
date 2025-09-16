import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "🤔 Os métodos realmente funcionam?",
      answer: "Sim! Nossos métodos são testados e aprovados por mais de 1.000 pessoas. Temos resultados comprovados e oferecemos suporte completo para garantir seu sucesso."
    },
    {
      question: "💰 Quanto posso ganhar com os métodos?",
      answer: "Os ganhos variam de pessoa para pessoa, mas nossos clientes relatam ganhos de R$ 2.000 a R$ 15.000 por mês. Tudo depende da sua dedicação e aplicação dos métodos."
    },
    {
      question: "⏰ Quanto tempo leva para ver resultados?",
      answer: "A maioria dos nossos clientes vê os primeiros resultados em 7 a 14 dias. Com dedicação, é possível ter resultados ainda mais rápidos."
    },
    {
      question: "🛠️ Preciso de conhecimento técnico?",
      answer: "Não! Nossos métodos são desenvolvidos para iniciantes. Fornecemos vídeo-aulas passo a passo e suporte completo via WhatsApp."
    },
    {
      question: "📱 Funciona no celular?",
      answer: "Sim! Todos os nossos métodos podem ser executados 100% pelo celular. Você pode trabalhar de qualquer lugar."
    },
    {
      question: "🔒 O pagamento é seguro?",
      answer: "Totalmente seguro! Utilizamos a plataforma Kiwify, que é uma das mais seguras do Brasil para pagamentos digitais."
    },
    {
      question: "📞 Vocês oferecem suporte?",
      answer: "Sim! Oferecemos suporte completo via WhatsApp para tirar todas suas dúvidas e te ajudar a ter sucesso com os métodos."
    },
    {
      question: "🎯 Para quem são indicados os métodos?",
      answer: "Para qualquer pessoa que queira ter uma renda extra ou principal na internet. Não importa idade, escolaridade ou experiência."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl font-bold">Dúvidas Frequentes</h2>
          </div>
          <p className="text-xl text-gray-300">
            Resolvemos as principais dúvidas para você tomar a melhor decisão
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-purple-400 flex-shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-700 pt-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-purple-600/20 border border-purple-600/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🤝 Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-4">
              Nossa equipe está pronta para te ajudar! Entre em contato via WhatsApp.
            </p>
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
  onClick={() => window.open("https://w.app/darkmetados", "_blank")}
>
  💬 Falar no WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
