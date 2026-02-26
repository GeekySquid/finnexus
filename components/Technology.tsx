'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const techStack = {
  frontend: {
    title: 'Frontend',
    description: 'Modern, responsive user interfaces',
    technologies: ['Next.js 15', 'Tailwind CSS', 'Shadcn UI', 'D3.js', 'Framer Motion'],
    color: 'bg-primary'
  },
  backend: {
    title: 'Backend',
    description: 'High-performance API and data processing',
    technologies: ['FastAPI', 'Python 3.12', 'MongoDB Atlas', 'Socket.io'],
    color: 'bg-primary'
  },
  ai: {
    title: 'AI & Analytics',
    description: 'Advanced machine learning and NLP',
    technologies: ['FinBERT NLP', 'XGBoost', 'LSTM', 'Gemini 2.0 Flash', 'LangGraph'],
    color: 'bg-primary'
  },
  data: {
    title: 'Data & APIs',
    description: 'Real-time market data and authentication',
    technologies: ['Alpha Vantage', 'Polygon.io', 'Supabase', 'Privy Auth'],
    color: 'bg-primary'
  },
  deployment: {
    title: 'Deployment',
    description: 'Scalable cloud infrastructure',
    technologies: ['AWS Lambda', 'Vercel', 'Railway', 'Docker'],
    color: 'bg-primary'
  }
}

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages cutting-edge technologies to deliver 
            real-time insights, scalable performance, and intelligent automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([key, stack], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border bg-card group hover:border-primary/20">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${stack.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-primary-foreground font-bold text-lg">
                      {stack.title.charAt(0)}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-foreground">{stack.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{stack.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-secondary/50 text-foreground border-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            System Architecture
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">UI</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">User Interface</h4>
              <p className="text-sm text-muted-foreground">
                Next.js frontend with real-time updates and interactive visualizations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">AI</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">AI Engine</h4>
              <p className="text-sm text-muted-foreground">
                Multi-agent system with ML models for predictions and analysis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">API</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Data Layer</h4>
              <p className="text-sm text-muted-foreground">
                Real-time market data integration with secure storage
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}