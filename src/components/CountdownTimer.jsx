import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap } from 'lucide-react'

const CountdownTimer = ({ targetHours = 24 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: targetHours,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => time.toString().padStart(2, '0')

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-red-600/20 border border-red-600/30 rounded-xl p-6 text-center backdrop-blur-sm"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-red-400 animate-pulse" />
        <h3 className="text-xl font-bold text-red-400">OFERTA EXPIRA EM:</h3>
        <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
      </div>
      
      <div className="flex justify-center gap-4">
        <motion.div 
          className="bg-red-600/30 rounded-lg p-4 min-w-[80px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="text-3xl font-bold text-white">{formatTime(timeLeft.hours)}</div>
          <div className="text-sm text-red-300">HORAS</div>
        </motion.div>
        
        <motion.div 
          className="bg-red-600/30 rounded-lg p-4 min-w-[80px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        >
          <div className="text-3xl font-bold text-white">{formatTime(timeLeft.minutes)}</div>
          <div className="text-sm text-red-300">MINUTOS</div>
        </motion.div>
        
        <motion.div 
          className="bg-red-600/30 rounded-lg p-4 min-w-[80px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        >
          <div className="text-3xl font-bold text-white">{formatTime(timeLeft.seconds)}</div>
          <div className="text-sm text-red-300">SEGUNDOS</div>
        </motion.div>
      </div>
      
      <motion.p 
        className="text-red-300 mt-4 font-semibold"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ⚠️ Não perca esta oportunidade única! ⚠️
      </motion.p>
    </motion.div>
  )
}

export default CountdownTimer
