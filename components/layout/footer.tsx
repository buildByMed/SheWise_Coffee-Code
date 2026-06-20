import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">About SheWise</h3>
            <p className="text-sm text-muted-foreground">
              Empowering women with personalized health insights, symptom checking, and supportive guidance.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/knowledge" className="text-muted-foreground hover:text-primary transition-colors">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link href="/myths" className="text-muted-foreground hover:text-primary transition-colors">
                  Myth Busting
                </Link>
              </li>
              <li>
                <Link href="/sources" className="text-muted-foreground hover:text-primary transition-colors">
                  Verified Sources
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@shewise.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Form
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 SheWise by Coffee&Code. All rights reserved. Women&apos;s health, empowered.
            </p>
            <p className="text-xs text-muted-foreground bg-yellow-50 dark:bg-yellow-950/30 px-3 py-2 rounded">
              ⚠️ Disclaimer: SheWise provides educational information only and is not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
