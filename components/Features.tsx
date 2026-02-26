'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, TrendingUp, BookOpen, Shield, Zap, Target, BarChart3, CreditCard, Smartphone, Clock, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: TrendingUp,
    title: 'Real-Time Payments',
    description: 'Process payments instantly with our advanced payment gateway integration and real-time transaction monitoring.',
    color: 'bg-primary'
  },
  {
    icon: Smartphone,
    title: 'Mobile Banking',
    description: 'Full-featured mobile banking experience with biometric authentication and seamless user interface.',
    color: 'bg-primary'
  },
  {
    icon: Brain,
    title: 'AI-Powered Budgeting',
    description: 'Smart budgeting tools that learn from your spending patterns and provide personalized financial insights.',
    color: 'bg-primary'
  },
  {
    icon: CreditCard,
    title: 'Virtual Credit Cards',
    description: 'Generate virtual credit cards instantly for secure online transactions with customizable spending limits.',
    color: 'bg-primary'
  },
  {
    icon: Shield,
    title: 'Payments Without Limits',
    description: 'Send and receive payments globally without traditional banking limitations or excessive fees.',
    color: 'bg-primary'
  },
  {
    icon: Clock,
    title: 'Real-Time Expense Tracking',
    description: 'Track your expenses in real-time with automatic categorization and detailed spending analytics.',
    color: 'bg-primary'
  }
]

const reimaginedFeatures = [
  {
    icon: Shield,
    title: 'Instant Account Setup',
    description: 'Get started in minutes with our streamlined onboarding process and instant account verification.'
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Payments',
    description: 'Send and receive money instantly with our advanced payment processing technology.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Banking',
    description: 'Complete banking experience optimized for mobile with intuitive design and powerful features.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 morphing-bg relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Reimagined for the Future Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full glass-card text-primary text-sm font-medium border border-primary/20 mb-6 animate-shimmer"
              >
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Reimagined for the Future
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Banking Reimagined for the{' '}
                <span className="text-primary animate-gradient bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                  Future You
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                We deliver cutting-edge innovation, transparency, and personalized 
                banking that adapts to your financial journey and grows with your ambitions.
              </motion.p>
              
              <div className="grid gap-6">
                {reimaginedFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 glass-card p-4 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-12 h-12 glass rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 animate-pulse-glow">
                <div className="grid grid-cols-2 gap-4">
                  {reimaginedFeatures.map((feature, index) => (
                    <motion.div 
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-8 h-8 glass rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-4 h-4 text-primary animate-pulse" />
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </div>
                    </motion.div>
                  ))}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="glass rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-8 h-8 glass rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <Brain className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      AI-Powered Budgeting
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating glow effects */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/30 rounded-full blur-lg animate-float"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Finance for Modern Business Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Finance for the{' '}
            <span className="text-primary animate-gradient bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
              Modern Business
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Streamline your business growth with our comprehensive financial tools and intelligent automation.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card hover:scale-105 transition-all duration-300 border-border group cursor-pointer animate-shimmer">
                <CardHeader>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 glow-primary`}
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}