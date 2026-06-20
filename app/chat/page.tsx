'use client'

import { useState, useRef, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Send, MessageCircle, Globe } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const STARTER_QUESTIONS = [
  'What are period myths I should know about?',
  'How can I manage period pain naturally?',
  'Is it normal to have irregular periods?',
  'What should I expect during menopause?',
]

const BOT_RESPONSES: { [key: string]: string } = {
  default: "I'm here to help with your women's health questions. Feel free to ask me about symptoms, cycle health, myths, or general wellness. Remember, I provide educational information—please consult a healthcare provider for medical advice.",
  myth: "Great question! There are many myths around women's health. For example, some people believe you can't get pregnant during your period, but this isn't always true. Other myths include that you shouldn't exercise during your cycle, or that PMS is all in your head. What specific myth would you like to learn about?",
  pain: "Period pain, or dysmenorrhea, is common and can range from mild to severe. Natural ways to manage it include: heat therapy (heating pads), exercise, relaxation techniques, staying hydrated, and maintaining a healthy diet. Over-the-counter pain relievers can also help. If pain is severe, consult your doctor.",
  irregular: "Irregular periods can be normal for many people, especially during puberty, after starting/stopping birth control, or due to stress and lifestyle changes. However, if your periods suddenly become irregular or you have severe symptoms, it's important to see a healthcare provider to rule out underlying conditions.",
  menopause: "Menopause is a natural life transition when your periods stop. It typically occurs in your 40s-50s. Symptoms can include hot flashes, mood changes, sleep issues, and vaginal dryness. The experience varies greatly. Hormone therapy and lifestyle changes can help manage symptoms.",
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: "Hi there! I'm SheWise, your supportive health companion. I'm here to discuss women's health topics, bust myths, and answer your questions. What would you like to know today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [language, setLanguage] = useState('English')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('myth')) {
      return BOT_RESPONSES.myth
    } else if (lowerMessage.includes('pain')) {
      return BOT_RESPONSES.pain
    } else if (lowerMessage.includes('irregular')) {
      return BOT_RESPONSES.irregular
    } else if (lowerMessage.includes('menopause')) {
      return BOT_RESPONSES.menopause
    }

    return BOT_RESPONSES.default
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: String(messages.length),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: String(messages.length + 1),
        text: getResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleStarterQuestion = (question: string) => {
    const userMessage: Message = {
      id: String(messages.length),
      text: question,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: Message = {
        id: String(messages.length + 1),
        text: getResponse(question),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="py-8 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        <div className="max-w-2xl mx-auto w-full flex flex-col h-full">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">SheWise Chat</h1>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="text-sm bg-transparent text-foreground border border-border rounded px-2 py-1 cursor-pointer"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>Bengali</option>
                <option>Marathi</option>
              </select>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded-lg p-3 mb-6">
            <p className="text-xs text-yellow-800 dark:text-yellow-200">
              <strong>Important:</strong> This chat provides educational information only and is not a substitute for professional medical advice.
            </p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto mb-6 space-y-4 bg-card/50 rounded-xl p-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm break-words">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground px-4 py-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    />
                    <div
                      className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Starter Questions */}
          {messages.length === 1 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Popular questions:</p>
              <div className="space-y-2">
                {STARTER_QUESTIONS.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStarterQuestion(question)}
                    className="w-full text-left p-3 bg-muted/50 border border-border rounded-lg hover:bg-muted transition-colors text-sm text-foreground"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about women's health..."
              className="flex-1 px-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-card"
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isTyping}
              className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
