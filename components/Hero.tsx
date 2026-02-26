'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Brain, TrendingUp, Zap, BarChart3, DollarSign, Target, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 morphing-bg relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 glass-floating rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-16 h-16 glass-floating rounded-lg animate-float-delayed opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 glass-floating rounded-full animate-float opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-primary/20 rounded-full animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full glass-card text-primary text-sm font-medium border border-primary/20 animate-shimmer"
              >
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                AI-Powered Finance Intelligence
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
              >
                Finance That Grows with{' '}
                <span className="text-primary animate-gradient bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                  Your Ambition
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
              >
                Unified platform bridging theoretical knowledge and real-world market intelligence. 
                Learn, predict, and strategize with our AI-powered ecosystem.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="glass-button text-primary-foreground group hover:scale-105 transition-all duration-300 glow-primary">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="glass-card border-border text-foreground hover:bg-accent group hover:scale-105 transition-all duration-300">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trusted by section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-8"
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted by 4000+ Growing Companies</p>
              <div className="flex items-center space-x-6 opacity-60">
                {['Spotify', 'Coinbase', 'Slack', 'Dropbox'].map((company, index) => (
                  <motion.div 
                    key={company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-muted-foreground font-semibold hover:text-primary transition-colors cursor-pointer"
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card with Glassmorphic Effect */}
            <div className="relative glass-card rounded-2xl p-6 shadow-2xl animate-pulse-glow">
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-between mb-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Good morning, Trader</h3>
                  <p className="text-sm text-muted-foreground">Here's what's happening with your portfolio today.</p>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse-glow"></div>
              </motion.div>

              {/* Balance with animated counter effect */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6"
              >
                <div className="text-3xl font-bold text-foreground mb-2 animate-shimmer">$489,377.00</div>
                <div className="flex items-center space-x-4">
                  <div className="glass-button px-3 py-1 rounded-full text-sm font-medium animate-bounce-in">
                    +$1,200
                  </div>
                  <div className="text-sm text-muted-foreground">+2.4% today</div>
                </div>
              </motion.div>

              {/* Enhanced Chart with glow effect */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="h-32 glass rounded-lg mb-6 flex items-end justify-center p-4 relative overflow-hidden"
              >
                <div className="flex items-end space-x-1">
                  {[40, 60, 45, 80, 65, 90, 75, 85, 70, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                      className="bg-primary rounded-t glow-primary"
                      style={{ width: '8px' }}
                    />
                  ))}
                </div>
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent animate-pulse"></div>
              </motion.div>

              {/* Quick Stats with hover effects */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="glass rounded-lg p-3 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-foreground">$1,000</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
                <div className="glass rounded-lg p-3 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-foreground">$800</div>
                  <div className="text-sm text-muted-foreground">Invested</div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-4 top-8 glass-floating rounded-xl p-4 shadow-lg w-48 animate-float hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">AI Prediction</div>
                  <div className="text-xs text-muted-foreground">AAPL • 94% confidence</div>
                </div>
              </div>
              <div className="text-primary font-medium animate-shimmer">↗ Bullish Signal</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-4 bottom-8 glass-floating rounded-xl p-4 shadow-lg w-48 animate-float-delayed hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Risk Analysis</div>
                  <div className="text-xs text-muted-foreground">Portfolio Health</div>
                </div>
              </div>
              <div className="text-green-400 font-medium animate-shimmer">Low Risk • Diversified</div>
            </motion.div>

            {/* Enhanced Glow Effects */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/30 rounded-full blur-lg animate-float"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-primary/40 rounded-full blur-md animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}