"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

export default function CreateProjectPage() {
  return (
    <div className="flex min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-black text-foreground">Create New Project</h1>
          <p className="text-foreground/70">Fill in the details to publish a new project to freelancers.</p>
        </div>

        <form className="space-y-8 glass p-8 rounded-2xl border border-border">
          
          <div className="space-y-4 border-b border-border pb-8">
            <h3 className="text-lg font-bold text-foreground">General Information</h3>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Project Title</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="e.g. Arabic Voice Recording" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold">Description</label>
              <textarea className="w-full h-32 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Describe the project..." required />
            </div>
          </div>

          <div className="space-y-4 border-b border-border pb-8">
            <h3 className="text-lg font-bold text-foreground">Requirements & Targeting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Required Language</label>
                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all appearance-none" required>
                  <option value="arabic">Arabic</option>
                  <option value="english">English</option>
                  <option value="french">French</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold">Required Country</label>
                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all appearance-none" required>
                  <option value="">Anywhere</option>
                  <option value="EG">Egypt</option>
                  <option value="SA">Saudi Arabia</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold">Price per Task ($)</label>
                <input type="number" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="50.00" required />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Link href="/admin" className="px-6 py-3 rounded-xl font-semibold text-foreground/70 hover:bg-card transition-colors">
              Cancel
            </Link>
            <button type="button" className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5">
              <Save className="w-5 h-5" /> Publish Project
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
