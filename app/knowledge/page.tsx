'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { BookOpen, Bookmark, Eye, EyeOff, Search, Download } from 'lucide-react'

interface Article {
  id: number
  title: string
  category: string
  readTime: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  saved: boolean
  excerpt: string
}

const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Understanding Your Menstrual Cycle',
    category: 'Cycle Health',
    readTime: 8,
    difficulty: 'Beginner',
    saved: false,
    excerpt: 'Learn about the phases of your menstrual cycle, hormonal changes, and what to expect each month.',
  },
  {
    id: 2,
    title: 'Polycystic Ovary Syndrome (PCOS) Explained',
    category: 'Conditions',
    readTime: 12,
    difficulty: 'Intermediate',
    saved: false,
    excerpt: 'An in-depth look at PCOS, its symptoms, diagnosis methods, and management strategies.',
  },
  {
    id: 3,
    title: 'Natural Pain Management During Menstruation',
    category: 'Wellness',
    readTime: 6,
    difficulty: 'Beginner',
    saved: false,
    excerpt: 'Explore natural remedies and techniques to manage menstrual discomfort without medication.',
  },
  {
    id: 4,
    title: 'Hormonal Birth Control Methods: A Complete Guide',
    category: 'Contraception',
    readTime: 15,
    difficulty: 'Intermediate',
    saved: false,
    excerpt: 'Compare different hormonal contraception options, their effectiveness, and potential side effects.',
  },
  {
    id: 5,
    title: 'Navigating Menopause: Changes and Management',
    category: 'Life Stages',
    readTime: 10,
    difficulty: 'Intermediate',
    saved: false,
    excerpt: 'Understanding menopausal symptoms and the various approaches to managing this life transition.',
  },
  {
    id: 6,
    title: 'Endometriosis: Symptoms and Treatment Options',
    category: 'Conditions',
    readTime: 14,
    difficulty: 'Advanced',
    saved: false,
    excerpt: 'A comprehensive guide to understanding endometriosis and available treatment approaches.',
  },
]

const MYTHS = [
  {
    myth: "You can't get pregnant during your period",
    truth: 'While less likely, pregnancy can occur as sperm can survive up to 5 days.',
    category: 'Fertility',
  },
  {
    myth: "You shouldn't exercise during your period",
    truth: 'Moderate exercise can actually help with symptoms and is safe during menstruation.',
    category: 'Wellness',
  },
  {
    myth: 'Irregular periods are always a sign of a problem',
    truth: 'Some irregularity is normal, especially during puberty or due to stress.',
    category: 'Cycle Health',
  },
  {
    myth: 'PMS is all in your head',
    truth: 'PMS has real biological causes related to hormonal fluctuations.',
    category: 'Wellness',
  },
]

export default function KnowledgeCenterPage() {
  const [articles, setArticles] = useState<Article[]>(ARTICLES)
  const [savedOnly, setSavedOnly] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [privacyMode, setPrivacyMode] = useState(false)

  const toggleSave = (id: number) => {
    setArticles(articles.map(a => a.id === id ? { ...a, saved: !a.saved } : a))
  }

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSaved = !savedOnly || article.saved
    return matchesSearch && matchesSaved
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Knowledge Center</h1>
              <p className="text-muted-foreground">
                Trusted, educational resources about women&apos;s health
              </p>
            </div>
            <button
              onClick={() => setPrivacyMode(!privacyMode)}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              {privacyMode ? (
                <>
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Show Content</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-4 h-4" />
                  <span className="text-sm">Hide Content</span>
                </>
              )}
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                />
              </div>

              {/* Articles */}
              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className={`bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all ${
                      privacyMode ? 'blur-sm' : ''
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-lg font-semibold text-foreground leading-tight">
                            {article.title}
                          </h3>
                          <button
                            onClick={() => toggleSave(article.id)}
                            className="flex-shrink-0 p-2 hover:bg-muted rounded transition-colors"
                          >
                            <Bookmark
                              className={`w-5 h-5 ${
                                article.saved
                                  ? 'fill-primary text-primary'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                        <div className="flex flex-wrap gap-3 items-center">
                          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {article.readTime} min read
                          </span>
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded ${
                              article.difficulty === 'Beginner'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                : article.difficulty === 'Intermediate'
                                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                  : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                            }`}
                          >
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Filter */}
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h2 className="font-semibold text-foreground mb-4">Filters</h2>
                <button
                  onClick={() => setSavedOnly(!savedOnly)}
                  className={`w-full px-4 py-2 border-2 rounded-lg font-medium transition-colors ${
                    savedOnly
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-foreground hover:border-primary/50'
                  }`}
                >
                  {savedOnly ? '✓ Saved Articles' : 'Show Saved Articles'}
                </button>
              </div>

              {/* Myth Busting */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6">
                <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>💡</span> Myth Busting
                </h2>
                <div className="space-y-4 text-sm">
                  {MYTHS.map((item, idx) => (
                    <div key={idx} className="border-b border-border pb-4 last:border-b-0">
                      <p className="font-medium text-foreground mb-2">❌ {item.myth}</p>
                      <p className="text-muted-foreground">✓ {item.truth}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Sources */}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Verified Sources
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• World Health Organization (WHO)</li>
                  <li>• Mayo Clinic</li>
                  <li>• National Institutes of Health</li>
                  <li>• Medical journals and peer-reviewed research</li>
                </ul>
              </div>

              {/* Export */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                <Download className="w-5 h-5" />
                Export as PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
