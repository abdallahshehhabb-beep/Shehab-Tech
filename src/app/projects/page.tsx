"use client"

import * as React from "react"
import Link from "next/link"
import { Search, Filter, Briefcase, Globe2, Users, ArrowRight, MapPin } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header & Search */}
      <div className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-foreground mb-4">Find Work</h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
            Browse through hundreds of AI data collection projects and start earning today.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input 
                type="text" 
                placeholder="Search projects by keyword, skill, or language..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <button className="px-6 py-4 bg-background border border-border rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-card transition-colors">
              <Filter className="w-5 h-5" /> Filters
            </button>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors">
              Search
            </button>
          </div>
          
          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="text-sm text-foreground/50 font-semibold mr-2 self-center">Popular:</span>
            {["Arabic", "Voice Recording", "Egypt", "Transcription", "Data Entry"].map((tag) => (
              <button key={tag} className="px-3 py-1.5 bg-background border border-border rounded-lg text-xs font-medium hover:border-primary hover:text-primary transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <aside className="hidden lg:block space-y-8">
            <div>
              <h3 className="font-bold mb-4 text-foreground">Category</h3>
              <div className="space-y-3">
                {["Audio Collection", "Image Annotation", "Text Translation", "Video Recording", "Surveys"].map(c => (
                  <label key={c} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                    <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">{c}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-foreground">Language</h3>
              <div className="space-y-3">
                {["Arabic (All dialects)", "Arabic (Egyptian)", "Arabic (Gulf)", "English", "French"].map(c => (
                  <label key={c} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                    <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-foreground">Location Requirement</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="loc" className="w-4 h-4 text-primary focus:ring-primary border-border" defaultChecked />
                  <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">Anywhere</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="loc" className="w-4 h-4 text-primary focus:ring-primary border-border" />
                  <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">Specific Country</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Project Listings */}
          <main className="lg:col-span-3 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-foreground/70">Showing 1-10 of 142 projects</span>
              <select className="bg-background border border-border rounded-lg px-4 py-2 text-sm font-medium outline-none focus:border-primary">
                <option>Newest First</option>
                <option>Highest Paid</option>
                <option>Most Urgent</option>
              </select>
            </div>

            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-xl group">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold rounded-md">Urgent</span>
                      <span className="px-2.5 py-1 bg-card border border-border text-xs font-semibold rounded-md">Voice</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Egyptian Arabic Voice Recording
                    </h2>
                    <p className="text-foreground/70 text-sm mb-6 leading-relaxed max-w-3xl">
                      Looking for native Egyptian Arabic speakers to read short text prompts. High quality microphone required. You will be reading 500 short sentences.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-foreground/60">
                      <div className="flex items-center gap-1.5"><Globe2 className="w-4 h-4" /> Arabic</div>
                      <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Egypt</div>
                      <div className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 145 Applied</div>
                      <div className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> Entry Level</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end justify-between border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                    <div className="md:text-right mb-4">
                      <div className="text-2xl font-black text-foreground">$50.00</div>
                      <div className="text-xs text-foreground/50 uppercase tracking-wider font-bold mt-1">Per Completion</div>
                    </div>
                    <Link href={`/projects/${i}`} className="w-full md:w-auto px-6 py-3 bg-card border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary text-center rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
            
            {/* Pagination */}
            <div className="flex justify-center gap-2 pt-8">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-card disabled:opacity-50" disabled>&lt;</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-card font-medium">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-card font-medium">3</button>
              <span className="w-10 h-10 flex items-center justify-center">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-card font-medium">15</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-card">&gt;</button>
            </div>
            
          </main>
        </div>
      </div>
    </div>
  )
}
