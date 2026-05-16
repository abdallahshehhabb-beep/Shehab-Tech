import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-primary">SHEHAB</span>
              <span className="text-2xl font-light text-foreground">TECH</span>
            </Link>
            <p className="text-sm text-foreground/70 max-w-sm">
              The premier workforce management and freelance collaboration platform specialized in AI Data Collection and more.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm font-semibold">
                Facebook
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm font-semibold">
                Twitter
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm font-semibold">
                LinkedIn
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm font-semibold">
                Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><Link href="/projects" className="hover:text-primary transition-colors">Browse Projects</Link></li>
              <li><Link href="/freelancers" className="hover:text-primary transition-colors">Find Freelancers</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><a href="mailto:abdallahshehhabb@gmail.com" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} SHEHAB TECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
