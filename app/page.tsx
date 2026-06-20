import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import { Brain, Activity, Heart } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background illustration */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <Image
            src="/background-hero.png"
            alt="Background illustration"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/60 to-background/40" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your <span className="text-primary">Personal Guide</span> to Women&apos;s Health
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore symptoms with confidence, track your health journey, and access trusted information designed for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/questionnaire"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Symptom Check
            </Link>
            <Link
              href="/tracker"
              className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Health Tracker
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Safety Banner */}
      <section className="bg-accent/5 border-y border-border py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-muted-foreground">
            <strong>⚠️ Medical Disclaimer:</strong> SheWise provides educational information and symptom insights for informational purposes only. 
            It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider 
            for any health concerns. In emergencies, please contact your local emergency services.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            What SheWise Offers
          </h2>
          <div className="grid md:grid-cols-3 gap-8 perspective">
            {/* Feature 1 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src="/symptoms.png"
                  alt="Symptom questionnaire illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Symptom Questionnaire</h3>
                <p className="text-muted-foreground text-sm">
                  Answer guided questions about your symptoms and receive personalized insights. Our intelligent questionnaire adapts to your responses.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src="/tracking.png"
                  alt="Health tracking illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Health Tracker</h3>
                <p className="text-muted-foreground text-sm">
                  Log your cycle, sleep, mood, and weight. Visualize patterns with intuitive charts and discover what affects your wellbeing.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src="/support.png"
                  alt="Supportive chatbot illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Supportive Chat</h3>
                <p className="text-muted-foreground text-sm">
                  Chat with our non-judgmental bot about women&apos;s health topics, myths, and concerns. Get answers anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SheWise Section */}
      <section className="bg-primary/5 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose SheWise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center bg-card rounded-xl p-8 border border-border/50">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Privacy First</h3>
              <p className="text-muted-foreground text-sm">Your health data is yours alone. We prioritize your privacy with end-to-end protection.</p>
            </div>
            <div className="text-center bg-card rounded-xl p-8 border border-border/50">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Evidence-Based</h3>
              <p className="text-muted-foreground text-sm">All information is backed by medical research and verified health sources.</p>
            </div>
            <div className="text-center bg-card rounded-xl p-8 border border-border/50">
              <div className="text-3xl mb-3">💚</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Non-Judgmental</h3>
              <p className="text-muted-foreground text-sm">A safe space to explore your health questions without stigma or judgment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to take control of your health?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with our symptom questionnaire or begin tracking your health today. Your privacy is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/questionnaire"
              className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Begin Questionnaire
            </Link>
            <Link
              href="/knowledge"
              className="px-6 py-2 bg-muted text-muted-foreground font-semibold rounded-lg hover:bg-muted/80 transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
