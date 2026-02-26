'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, CreditCard, Smartphone, Shield, Clock, BarChart3, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import MarketVisualization from './MarketVisualization'

const paymentFeatures = [
  {
    icon: CreditCard,
    title: 'Supports Any Payment Gateway',
    description: 'Seamlessly integrate with any payment provider for maximum flexibility and global reach.'
  },
  {
    icon: Clock,
    title: 'Automated Payment Scheduling',
    description: 'Set up recurring payments and automated transfers to streamline your financial operations.'
  }
]

const trackingFeatures = [
  {
    icon: BarChart3,
    title: 'Payments Without Limits',
    description: 'Process unlimited transactions without traditional banking restrictions or hidden fees.'
  },
  {
    icon: Zap,
    title: 'Real-Time Expense Tracking',
    description: 'Monitor your spending in real-time with intelligent categorization and detailed analytics.'
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Payment Gateway Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {paymentFeatures.map((feature, index) => (
              <div key={feature.title} className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-foreground">Payment Gateways</h4>
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-secondary/30 rounded-lg p-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Processing</span>
                    <span className="text-sm font-medium text-foreground">$2,450.00</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expense Tracking Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-foreground">Expense Overview</h4>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    View Report
                  </Button>
                </div>
                
                <MarketVisualization />

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">$12.5K</div>
                    <div className="text-sm text-muted-foreground">Income</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">$8.2K</div>
                    <div className="text-sm text-muted-foreground">Expenses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$4.3K</div>
                    <div className="text-sm text-muted-foreground">Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            {trackingFeatures.map((feature, index) => (
              <div key={feature.title} className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-card border border-border rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already using our AI-powered platform to make smarter investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-accent">
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}