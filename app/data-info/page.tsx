import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import { Info, AlertCircle, Lock, Database } from 'lucide-react'

export default function DataInfoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">How Your Data is Stored</h1>
            <p className="text-lg text-muted-foreground">
              Understanding data persistence in SheWise
            </p>
          </div>

          {/* Current Storage Method */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Local Storage (Current)</h2>
                <p className="text-muted-foreground mb-4">
                  Your health data is currently stored in your browser's local storage. This is a temporary solution that provides data persistence within the browser only.
                </p>
              </div>
            </div>

            <div className="space-y-4 bg-muted/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Data Persists on Page Refresh</p>
                  <p className="text-sm text-muted-foreground">Your health logs, questionnaire responses, and tracker entries are saved even after closing the browser.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Browser Storage</p>
                  <p className="text-sm text-muted-foreground">Data is stored locally in your browser (Chrome, Firefox, Safari, etc.) with a limit of ~5-10MB per site.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Private & Secure</p>
                  <p className="text-sm text-muted-foreground">No one else can access your health data stored locally on your device.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/50 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Limitations</h3>
                <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
                  <li>• Data is NOT synced across different devices</li>
                  <li>• Clearing browser cache/cookies will delete your data</li>
                  <li>• Data is lost if you switch browsers or use private/incognito mode</li>
                  <li>• Storage limit is ~5-10MB (enough for months of health data)</li>
                  <li>• Not suitable for long-term, production data storage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What Data is Stored */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Data Currently Stored</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Health Tracker Logs</h4>
                <p className="text-muted-foreground mb-3">Stored as: <code className="bg-muted px-2 py-1 rounded text-sm">shewise_health_logs</code></p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Cycle tracking data</li>
                  <li>• Sleep hours logged</li>
                  <li>• Mood scores (1-10)</li>
                  <li>• Weight entries (kg)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Quick Entry Fields</h4>
                <p className="text-muted-foreground mb-3">Stored as: <code className="bg-muted px-2 py-1 rounded text-sm">shewise_entries</code></p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Current form inputs for next entry</li>
                  <li>• Partially completed entries</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Questionnaire Responses</h4>
                <p className="text-muted-foreground mb-3">Stored as: <code className="bg-muted px-2 py-1 rounded text-sm">shewise_questionnaire_answers</code></p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• All symptom questionnaire answers</li>
                  <li>• Severity scores</li>
                  <li>• Text responses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Backend */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Future: Cloud Database</h3>
                <p className="text-muted-foreground mb-4">
                  Soon, SheWise will upgrade to a secure cloud database where your data will:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Sync across all your devices</li>
                  <li>✓ Be encrypted and securely stored</li>
                  <li>✓ Enable account-based access</li>
                  <li>✓ Provide data analytics and insights</li>
                  <li>✓ Never be lost due to browser cache clearing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Clear Data */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Manage Your Local Data</h3>
            
            <div className="bg-muted/30 rounded-lg p-6 mb-4">
              <p className="text-sm font-mono text-muted-foreground mb-2">Browser Console Command:</p>
              <code className="block bg-muted px-3 py-2 rounded text-sm text-foreground overflow-x-auto">
                localStorage.clear() // Clears all SheWise data
              </code>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Or clear specific data:
            </p>

            <div className="space-y-2 text-sm">
              <code className="block bg-muted px-3 py-2 rounded text-foreground">
                localStorage.removeItem('shewise_health_logs')
              </code>
              <code className="block bg-muted px-3 py-2 rounded text-foreground">
                localStorage.removeItem('shewise_questionnaire_answers')
              </code>
              <code className="block bg-muted px-3 py-2 rounded text-foreground">
                localStorage.removeItem('shewise_entries')
              </code>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
