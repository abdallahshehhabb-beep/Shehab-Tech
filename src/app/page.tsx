"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Users, Briefcase, Award, CheckCircle, Shield, Globe2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
              Empowering the Future of <span className="text-primary">AI Data Collection</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-light">
              Join SHEHAB TECH, the premier workforce management and freelance collaboration platform. Start earning by completing AI training tasks today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/register" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Started
              </Link>
              <Link href="/projects" className="w-full sm:w-auto px-8 py-4 glass text-foreground text-lg font-semibold rounded-full hover:bg-card/80 transition-all flex items-center justify-center gap-2">
                Browse Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">50K+</div>
              <div className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Active Freelancers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">120+</div>
              <div className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Live Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">$2M+</div>
              <div className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Paid to Users</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">99%</div>
              <div className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
                About SHEHAB TECH
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground">
                Built for the Modern Workforce
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                SHEHAB TECH bridges the gap between innovative AI companies and talented freelancers worldwide. We specialize in high-quality AI data collection, audio transcription, image annotation, and more.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Secure & Verified", desc: "Every user goes through a strict ID verification process ensuring a safe platform.", icon: Shield },
                  { title: "Global Opportunities", desc: "Work from anywhere. Projects available in multiple languages and regions.", icon: Globe2 },
                  { title: "Guaranteed Payments", desc: "Transparent earnings dashboard and timely payouts for approved tasks.", icon: CheckCircle },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-card transition-colors border border-transparent hover:border-border">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Illustration placeholder */}
              <div className="aspect-square rounded-3xl bg-gradient-to-tr from-primary/20 to-primary/5 border border-border shadow-2xl relative overflow-hidden flex items-center justify-center p-8">
                <div className="w-full h-full glass rounded-2xl border-white/10 p-6 flex flex-col gap-4 shadow-xl">
                  {/* Mock UI Elements inside illustration */}
                  <div className="w-full h-12 bg-card rounded-lg animate-pulse" />
                  <div className="w-3/4 h-8 bg-card rounded-lg animate-pulse" />
                  <div className="flex-1 w-full flex gap-4 mt-4">
                    <div className="w-1/3 h-full bg-primary/20 rounded-lg animate-pulse" />
                    <div className="w-2/3 h-full bg-card rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-full blur-2xl opacity-40" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects Preview */}
      <section id="projects" className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Latest Projects</h2>
              <p className="text-lg text-foreground/70">Discover currently active projects and start working immediately after approval.</p>
            </div>
            <Link href="/projects" className="px-6 py-3 glass rounded-full font-semibold hover:bg-background transition-colors whitespace-nowrap">
              View All Projects
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col">
                <div className="h-48 bg-gradient-to-br from-card to-background border-b border-border relative">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full uppercase tracking-wider border border-green-500/20">
                    Active
                  </div>
                  {/* Mock Image */}
                  <div className="w-full h-full flex items-center justify-center text-foreground/20 group-hover:scale-105 transition-transform duration-500">
                    <Briefcase className="w-16 h-16" />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Arabic Voice Recording Task #{i}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6 flex-1 line-clamp-2">
                    Record short sentences in clear Arabic. Seeking native speakers from Egypt and Saudi Arabia.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 bg-card rounded-md text-xs font-semibold border border-border">Arabic</span>
                    <span className="px-2.5 py-1 bg-card rounded-md text-xs font-semibold border border-border">Voice Recording</span>
                    <span className="px-2.5 py-1 bg-card rounded-md text-xs font-semibold border border-border">Egypt</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex items-center text-sm font-medium text-foreground/70">
                      <Users className="w-4 h-4 mr-1.5 text-primary" />
                      145 / 500 Applied
                    </div>
                    <Link href={`/projects/${i}`} className="text-primary font-bold text-sm hover:underline flex items-center">
                      Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Ready to Join the Elite?</h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Create your account today, verify your identity, and unlock premium freelance opportunities curated just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Free Account
            </Link>
            <a href="mailto:abdallahshehhabb@gmail.com" className="px-8 py-4 glass text-foreground text-lg font-bold rounded-full hover:bg-card transition-all">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
