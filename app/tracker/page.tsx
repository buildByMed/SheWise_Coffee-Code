'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Calendar, Plus, MapPin, Search } from 'lucide-react'

const CHART_DATA = [
  { day: 'Mon', cycle: 3, sleep: 7, mood: 7, weight: 65 },
  { day: 'Tue', cycle: 3, sleep: 6, mood: 6, weight: 65.2 },
  { day: 'Wed', cycle: 4, sleep: 8, mood: 7, weight: 65 },
  { day: 'Thu', cycle: 4, sleep: 7, mood: 8, weight: 64.9 },
  { day: 'Fri', cycle: 5, sleep: 5, mood: 5, weight: 65.1 },
  { day: 'Sat', cycle: 5, sleep: 9, mood: 8, weight: 65 },
  { day: 'Sun', cycle: 6, sleep: 8, mood: 8, weight: 64.8 },
]

const CLINICS = [
  { id: 1, name: 'Women\'s Health Center', city: 'New York', rating: 4.8, distance: 0.5 },
  { id: 2, name: 'Family Medical Clinic', city: 'New York', rating: 4.6, distance: 1.2 },
  { id: 3, name: 'City Hospital - OB/GYN', city: 'New York', rating: 4.9, distance: 2.1 },
]

export default function TrackerPage() {
  const [activeTab, setActiveTab] = useState('cycle')
  const [searchCity, setSearchCity] = useState('')
  const [entries, setEntries] = useState({
    cycle: '',
    sleep: '',
    mood: 5,
    weight: '',
  })

  const handleAddEntry = (type: string) => {
    // Mock function for adding entries
    console.log(`Added ${type} entry:`, entries[type as keyof typeof entries])
  }

  const tabs = [
    { id: 'cycle', label: 'Cycle Log', icon: '📅' },
    { id: 'sleep', label: 'Sleep', icon: '😴' },
    { id: 'weight', label: 'Weight', icon: '⚖️' },
    { id: 'mood', label: 'Mood', icon: '😊' },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Health Tracker</h1>
          <p className="text-muted-foreground mb-12">
            Log your daily health metrics and discover patterns over time.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tabs */}
              <div className="flex gap-2 border-b border-border overflow-x-auto pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 font-medium whitespace-nowrap transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>

              {/* Quick Entry Card */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">Quick Entry - Today</h2>
                <div className="space-y-4 mb-6">
                  {activeTab === 'cycle' && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Cycle Day
                      </label>
                      <select
                        value={entries.cycle}
                        onChange={(e) => setEntries({ ...entries, cycle: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      >
                        <option value="">Select cycle day</option>
                        {Array.from({ length: 35 }, (_, i) => (
                          <option key={i + 1} value={String(i + 1)}>
                            Day {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  {activeTab === 'sleep' && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Hours of Sleep
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        step="0.5"
                        value={entries.sleep}
                        onChange={(e) => setEntries({ ...entries, sleep: e.target.value })}
                        placeholder="e.g., 7.5"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  )}
                  {activeTab === 'mood' && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mood (1-10)
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={entries.mood}
                        onChange={(e) => setEntries({ ...entries, mood: Number(e.target.value) })}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <div className="text-center mt-3">
                        <span className="text-2xl font-bold text-primary">{entries.mood}</span>
                      </div>
                    </div>
                  )}
                  {activeTab === 'weight' && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={entries.weight}
                        onChange={(e) => setEntries({ ...entries, weight: e.target.value })}
                        placeholder="e.g., 65"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleAddEntry(activeTab)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Entry
                </button>
              </div>

              {/* Chart */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">Weekly Overview</h2>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {activeTab === 'mood' ? (
                      <AreaChart data={CHART_DATA}>
                        <defs>
                          <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#5B8B6C" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#5B8B6C" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="day" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="mood"
                          stroke="#5B8B6C"
                          fillOpacity={1}
                          fill="url(#colorMood)"
                        />
                      </AreaChart>
                    ) : (
                      <LineChart data={CHART_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="day" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                          }}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey={activeTab}
                          stroke={
                            activeTab === 'cycle'
                              ? '#9B5A7B'
                              : activeTab === 'sleep'
                                ? '#5B8B6C'
                                : '#D4B896'
                          }
                          dot={false}
                          strokeWidth={2}
                        />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pattern Insights */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">📊 Pattern Insights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>✓ Your mood tends to improve on days with 8+ hours of sleep</p>
                  <p>✓ Weight is relatively stable, averaging 65.0 kg</p>
                  <p>✓ Sleep quality varies mid-week; try maintaining consistency</p>
                </div>
              </div>
            </div>

            {/* Sidebar - Find Care */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-8 sticky top-24">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  <MapPin className="w-5 h-5 inline mr-2" />
                  Find Care Near You
                </h2>

                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="City or pincode"
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors">
                    OB/GYN
                  </button>
                  <button className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-muted/80 transition-colors">
                    General
                  </button>
                  <button className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-muted/80 transition-colors">
                    Urgent
                  </button>
                </div>

                {/* Clinic List */}
                <div className="space-y-4">
                  {CLINICS.map((clinic) => (
                    <div key={clinic.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <h3 className="font-medium text-foreground mb-1">{clinic.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{clinic.city}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-primary">★ {clinic.rating}</span>
                        <span className="text-xs text-muted-foreground">{clinic.distance} km</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 px-4 py-2 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors text-sm">
                  View All Clinics
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
