'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import { ChevronRight, ChevronLeft, Download, Printer } from 'lucide-react'

const QUESTIONS = [
  {
    id: 1,
    question: 'What symptoms are you experiencing?',
    type: 'multi-select',
    options: [
      'Abdominal pain',
      'Heavy bleeding',
      'Irregular periods',
      'Cramps',
      'Fatigue',
      'Mood changes',
      'Headaches',
      'Nausea',
    ],
  },
  {
    id: 2,
    question: 'How long have you had these symptoms?',
    type: 'single-select',
    options: ['Less than 1 week', '1-2 weeks', '2-4 weeks', 'More than a month'],
  },
  {
    id: 3,
    question: 'On a scale of 1-10, how severe are your symptoms?',
    type: 'slider',
    min: 1,
    max: 10,
  },
  {
    id: 4,
    question: 'Do these symptoms affect your daily activities?',
    type: 'toggle',
  },
  {
    id: 5,
    question: 'Have you noticed any pattern or trigger?',
    type: 'text',
    placeholder: 'Optional: Describe any patterns you\'ve noticed',
  },
]

interface Answer {
  [key: number]: string | number | string[] | boolean
}

export default function QuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [QUESTIONS[currentStep].id]: value })
  }

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    return (
      <main className="min-h-screen flex flex-col bg-background">
        <Header />

        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Disclaimer */}
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded-lg p-4 mb-8">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Important:</strong> These results are for informational purposes only. Please consult a healthcare professional for accurate diagnosis.
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Your Symptom Summary</h1>

            {/* Results Card */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Summary of Your Responses:</h2>

              <div className="space-y-6">
                {QUESTIONS.map((q) => {
                  const answer = answers[q.id]
                  if (answer === undefined || answer === '') return null
                  return (
                    <div key={q.id} className="pb-6 border-b border-border last:border-b-0">
                      <p className="font-medium text-foreground mb-2">{q.question}</p>
                      <p className="text-muted-foreground">
                        {Array.isArray(answer) ? answer.join(', ') : String(answer)}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Insights */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">✨ What This Might Suggest</h3>
              <p className="text-muted-foreground mb-4">
                Based on your responses, your symptoms may be related to hormonal changes, stress, or lifestyle factors.
              </p>
              <p className="text-muted-foreground">
                We recommend tracking these symptoms over time to identify patterns, and consulting with a healthcare provider if symptoms persist or worsen.
              </p>
            </div>

            {/* Pattern Insights */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-8 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">📊 Next Steps</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use the Health Tracker to log symptoms over time</li>
                <li>Monitor any triggers or patterns</li>
                <li>Schedule an appointment with your healthcare provider</li>
                <li>Explore our knowledge center for related topics</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-muted text-muted-foreground font-semibold rounded-lg hover:bg-muted/80 transition-colors"
              >
                <Printer className="w-5 h-5" />
                Print Results
              </button>
              <button
                onClick={() => {
                  const text = `SheWise Symptom Check Results\n\n${QUESTIONS.map(q => `${q.question}\n${Array.isArray(answers[q.id]) ? answers[q.id].join(', ') : answers[q.id]}`).join('\n\n')}`
                  const blob = new Blob([text], { type: 'text/plain' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = 'symptom-check-results.txt'
                  a.click()
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Results
              </button>
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Over
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <Link
                href="/tracker"
                className="inline-block px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Go to Health Tracker →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  const current = QUESTIONS[currentStep]
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-2xl mx-auto">
          {/* Disclaimer Banner */}
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded-lg p-4 mb-8">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>⚠️ Disclaimer:</strong> This questionnaire is educational only and not a medical diagnosis. Please consult a healthcare professional.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">
                Step {currentStep + 1} of {QUESTIONS.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">{current.question}</h2>

            {/* Multi-select */}
            {current.type === 'multi-select' && (
              <div className="space-y-3">
                {current.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      const current_answers = answers[current.id] as string[] || []
                      const updated = current_answers.includes(option)
                        ? current_answers.filter((a) => a !== option)
                        : [...current_answers, option]
                      handleAnswer(updated)
                    }}
                    className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                      (answers[current.id] as string[] || []).includes(option)
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Single select */}
            {current.type === 'single-select' && (
              <div className="space-y-3">
                {current.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                      answers[current.id] === option
                        ? 'border-secondary bg-secondary/10'
                        : 'border-border hover:border-secondary/50'
                    }`}
                  >
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Slider */}
            {current.type === 'slider' && (
              <div className="space-y-6">
                <input
                  type="range"
                  min={current.min}
                  max={current.max}
                  value={answers[current.id] || 5}
                  onChange={(e) => handleAnswer(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">{answers[current.id] || 5}</span>
                  <p className="text-muted-foreground mt-2">
                    {answers[current.id] <= 3 && 'Mild'}
                    {answers[current.id] > 3 && answers[current.id] <= 7 && 'Moderate'}
                    {answers[current.id] > 7 && 'Severe'}
                  </p>
                </div>
              </div>
            )}

            {/* Toggle */}
            {current.type === 'toggle' && (
              <div className="flex gap-4">
                <button
                  onClick={() => handleAnswer(true)}
                  className={`flex-1 p-4 border-2 rounded-lg font-medium transition-all ${
                    answers[current.id] === true
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className={`flex-1 p-4 border-2 rounded-lg font-medium transition-all ${
                    answers[current.id] === false
                      ? 'border-secondary bg-secondary/10 text-secondary'
                      : 'border-border text-muted-foreground hover:border-secondary/50'
                  }`}
                >
                  No
                </button>
              </div>
            )}

            {/* Text Input */}
            {current.type === 'text' && (
              <textarea
                value={(answers[current.id] as string) || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                placeholder={current.placeholder}
                className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={4}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors ml-auto"
            >
              {currentStep === QUESTIONS.length - 1 ? 'See Results' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
