'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'

const LANGUAGES = ['English', 'Hindi', 'Tamil', 'Bengali', 'Marathi']

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('English')

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              S
            </div>
            <span className="text-xl font-semibold text-foreground hidden sm:inline group-hover:text-primary transition-colors">
              SheWise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/questionnaire" className="text-foreground hover:text-primary transition-colors font-medium">
              Symptom Check
            </Link>
            <Link href="/tracker" className="text-foreground hover:text-primary transition-colors font-medium">
              Tracker
            </Link>
            <Link href="/chat" className="text-foreground hover:text-primary transition-colors font-medium">
              Chat
            </Link>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-foreground" />
              <select
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="text-sm bg-transparent text-foreground border border-border rounded px-2 py-1 cursor-pointer hover:border-primary transition-colors"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Privacy Badge */}
            <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-accent/10 rounded-full border border-accent/30">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-xs font-medium text-accent-foreground">Privacy First</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              Home
            </Link>
            <Link href="/questionnaire" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              Symptom Check
            </Link>
            <Link href="/tracker" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              Tracker
            </Link>
            <Link href="/chat" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              Chat
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
