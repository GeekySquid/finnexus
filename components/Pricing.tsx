'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, ArrowRight, Sparkles, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Pro Plan',
    price: '$120',
    period: '/month',
    description: 'Perfect for individual traders and small portfolios',
    features: [
      'AI Predictions at the Core',
      'Instant Paper Trading',
      'Community Tournaments with Prizes',
      'Advanced Risk Analytics',
      'Premium Learning Modules'
    ],
    popular: false,
    buttonText: 'Start 7-day trial'
  },
  {
    name: 'Enterprise Plan',
    price: '$450',
    period: '/month',
    description: 'Designed for professional traders and institutions',
    features: [
      'Custom Pricing',
      'Regulatory Compliance',
      'Dedicated Account Manager',
      'API Access & Integration',
      'Priority Support & Training'
    ],
    popular: true,
    buttonText: 'Start 7-day trial'
  }
]

export default function Pricing() {
  return (
    <section className="py-20 morphing-bg relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 glass-floating rounded-full animate-float opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 glass-floating rounded-lg animate-float-delayed opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary/30 rounded-full animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-card text-primary text-sm font-medium border border-primary/20 mb-6 animate-shimmer"
          >
            <Star className="w-4 h-4 mr-2 animate-pulse" />
            Flexible Plans
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Flexible Plans for Every Need and{' '}
            <span className="text-primary animate-gradient bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
              Budget
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Choose the perfect plan to accelerate your financial journey with our comprehensive suite of tools.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full relative glass-card hover:scale-105 transition-all duration-300 cursor-pointer group ${
                plan.popular ? 'animate-pulse-glow border-primary/30' : 'border-border'
              }`}>
                {plan.popular && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  >
                    <Badge className="glass-button text-primary-foreground px-4 py-1 animate-shimmer">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CardTitle className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground animate-shimmer">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 group-hover:scale-105 transition-transform"
                      >
                        <div className="w-5 h-5 glass rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      className={`w-full group hover:scale-105 transition-all duration-300 ${
                        plan.popular 
                          ? 'glass-button text-primary-foreground glow-primary' 
                          : 'glass-card hover:bg-accent text-foreground'
                      }`}
                      size="lg"
                    >
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {[
                  {
                    question: "What is the platform used for?",
                    answer: "Our platform combines AI-powered market predictions, educational content, and portfolio management tools to bridge the gap between theoretical knowledge and practical trading."
                  },
                  {
                    question: "Is my financial data secure here?",
                    answer: "Yes, we use bank-level encryption and security protocols to protect your data. We're compliant with industry standards and never store sensitive financial credentials."
                  },
                  {
                    question: "Can I connect multiple bank accounts?",
                    answer: "Absolutely! You can securely connect multiple accounts to get a comprehensive view of your financial portfolio and make informed decisions."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-4 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {index + 1}. {faq.question}
                    </h4>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 animate-pulse-glow"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                Get Our News And Updates
              </h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest market insights, platform updates, and exclusive trading strategies.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 glass border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
                <Button className="glass-button text-primary-foreground hover:scale-105 transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}