import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos M.",
      location: "São Paulo, SP",
      text: "Comprei o método de avaliador e em 2 semanas já estava faturando R$ 300 por dia! Incrível como é simples.",
      rating: 5,
      verified: true,
      earnings: "R$ 8.400/mês"
    },
    {
      id: 2,
      name: "Ana P.",
      location: "Rio de Janeiro, RJ",
      text: "A raspadinha foi um sucesso! Consegui mais de 500 cadastros no primeiro dia. Método realmente funciona!",
      rating: 5,
      verified: true,
      earnings: "R$ 12.000/mês"
    },
    {
      id: 3,
      name: "Roberto S.",
      location: "Belo Horizonte, MG",
      text: "Estava desempregado e esses métodos mudaram minha vida. Hoje tenho minha própria renda online!",
      rating: 5,
      verified: true,
      earnings: "R$ 6.800/mês"
    },
    {
      id: 4,
      name: "Mariana L.",
      location: "Brasília, DF",
      text: "Suporte incrível! Tiraram todas minhas dúvidas e me ajudaram a configurar tudo. Recomendo demais!",
      rating: 5,
      verified: true,
      earnings: "R$ 9.200/mês"
    }
  ]

  return (
    <section className="py-16 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            🌟 O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-300">
            Mais de <span className="text-green-400 font-bold">1.000 pessoas</span> já transformaram suas vidas!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Quote className="w-5 h-5 text-purple-400" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-xs text-gray-400">{testimonial.location}</p>
                      </div>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-green-400">Verificado</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-2 text-center">
                      <p className="text-green-400 font-bold text-sm">
                        💰 {testimonial.earnings}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/30 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-bold">
              Resultados reais de pessoas reais!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
