'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, TrendingUp } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full glass-nav z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-bounce-in">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse-glow">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">FinNexus</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Solutions', 'Technology', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="glass-card border-border text-foreground hover:bg-accent transition-all duration-300 hover:scale-105 animate-shimmer"
            >
              Sign In
            </Button>
            <Button className="glass-button text-primary-foreground hover:scale-105 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border glass-card rounded-b-lg mt-2 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {['Features', 'Solutions', 'Technology', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 hover:bg-accent rounded-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <Button variant="outline" className="glass-card border-border text-foreground hover:bg-accent">
                  Sign In
                </Button>
                <Button className="glass-button text-primary-foreground">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}