import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { motion } from 'framer-motion'
import { 
  Star, 
  CheckCircle, 
  Zap, 
  Shield, 
  MessageCircle, 
  Instagram, 
  Music,
  ExternalLink,
  Crown,
  Sparkles,
  TrendingUp,
  Users,
  Gift,
  Target,
  Rocket
} from 'lucide-react'
import CountdownTimer from './components/CountdownTimer.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      id: 1,
      title: "📲 Método Avaliador De Modelos +18",
      price: "R$64,98",
      originalPrice: "R$197,98",
      emoji: "📲",
      features: [
        "🎥 Vídeo-aula completa ensinando como configurar seu link de pagamento",
        "🌐 Hospedagem gratuita, só pegar e rodar!",
        "✅ Site 100% Pronto",
        "⚠ Suporte no WhatsApp para tirar suas dúvidas!",
        "📦 Pacote com 12 Criativos Camuflados (prontos para rodar no Facebook)"
      ],
      gradient: "from-purple-600 to-pink-600",
      paymentLink: "https://pay.kirvano.com/55cc6fb2-0ee8-4485-b402-0270bf7c4ee1"
    },
    {
      id: 2,
      title: "🎰 Método IGaming Raspadinha",
      price: "R$64,98",
      originalPrice: "R$197,98",
      emoji: "🎰",
      features: [
        "🃏 Prompt pronto pra criar sua Raspadinha em menos de 5 min!",
        "🎥 Video-aula completa ensinando como configurar do zero",
        "🧩 Raspadinha 100% própria",
        "🌐 Hospedagem gratuita, só pegar e rodar!",
        "⚠ Suporte no WhatsApp para tirar suas duvidas!"
      ],
      gradient: "from-green-600 to-blue-600",
      paymentLink: "https://pay.kirvano.com/baaf33f9-dc7a-4b81-890b-a49c442e9f71"
    }
  ]

  const socialLinks = {
    instagram: "#",
    whatsapp: "https://w.app/darkmetados"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Crown className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                DarkMétodos
              </h1>
              <Crown className="w-8 h-8 text-yellow-400" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              Métodos Digitais Premium que Realmente Funcionam
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-4 mb-8"
            >
              <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                <TrendingUp className="w-4 h-4 mr-1" />
                +1000 Vendas
              </Badge>
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                <Users className="w-4 h-4 mr-1" />
                Comunidade Ativa
              </Badge>
              <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                <Star className="w-4 h-4 mr-1" />
                5.0 Avaliação
              </Badge>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            🔥 <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              OFERTA LIMITADA
            </span> 🔥
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-xl text-gray-300 mb-8"
          >
            Métodos testados e aprovados por milhares de pessoas!
            <br />
            <span className="text-red-400 font-bold">Apenas hoje com 67% de desconto!</span>
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, type: "spring", stiffness: 150 }}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-6 py-3"
          >
            <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-red-400 font-bold">Restam apenas 24 horas!</span>
            <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
          </motion.div>
        </div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <CountdownTimer targetHours={23} />
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
                
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4"
                  >
                    {product.emoji}
                  </motion.div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {product.title.replace(product.emoji, '').trim()}
                  </CardTitle>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-green-400">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    <Badge className="bg-red-600 text-white">-67%</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 + index * 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pt-6"
                  >
                    <Button 
                      className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                      onClick={() => window.open(product.paymentLink, '_blank')}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      COMPRAR AGORA
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400 pt-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Social Links */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            🚀 Conecte-se Conosco
          </h3>
          <p className="text-gray-300 text-lg">
            Siga nossas redes sociais e entre no nosso grupo VIP!
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <motion.a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 rounded-full text-white font-bold hover:shadow-lg transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            Instagram
          </motion.a>



          <motion.a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 rounded-full text-white font-bold hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </motion.a>
        </div>
      </motion.section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bonus Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <Gift className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              🎁 BÔNUS EXCLUSIVOS
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comprando hoje, você ganha esses bônus incríveis:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 border border-yellow-600/30 rounded-xl p-6"
            >
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                📚 E-book Exclusivo
              </h3>
              <p className="text-gray-300 text-sm">
                "10 Estratégias Secretas para Multiplicar seus Ganhos Online"
              </p>
              <p className="text-yellow-400 font-bold mt-2">Valor: R$ 97</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 border border-yellow-600/30 rounded-xl p-6"
            >
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                👥 Grupo VIP
              </h3>
              <p className="text-gray-300 text-sm">
                Acesso ao grupo exclusivo com networking e dicas diárias
              </p>
              <p className="text-yellow-400 font-bold mt-2">Valor: R$ 197</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 border border-yellow-600/30 rounded-xl p-6"
            >
              <Rocket className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                🚀 Mentoria Express
              </h3>
              <p className="text-gray-300 text-sm">
                1 hora de mentoria individual para acelerar seus resultados
              </p>
              <p className="text-yellow-400 font-bold mt-2">Valor: R$ 297</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <p className="text-2xl font-bold text-white mb-2">
              Total em Bônus: <span className="text-yellow-400">R$ 591</span>
            </p>
            <p className="text-green-400 font-bold text-xl">
              🎉 GRÁTIS para você hoje!
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="bg-gray-900/50 border-t border-gray-800 py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 DarkMétodos - Todos os direitos reservados
          </p>
          <p className="text-sm text-gray-500">
            Métodos digitais premium para empreendedores sérios
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
