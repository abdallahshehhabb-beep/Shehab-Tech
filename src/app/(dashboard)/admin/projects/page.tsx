"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Plus } from "lucide-react"

export default function AdminProjectsPage() {
  return (
    <div className="flex min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-start mb-8">
          <div>
            <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-black text-foreground flex items-center gap-3"><FileText className="w-8 h-8"/> Manage Projects</h1>
            <p className="text-foreground/70">View and edit all platform projects.</p>
          </div>
          <Link href="/admin/projects/create" className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-sm">
            <Plus className="w-5 h-5" /> Create Project
          </Link>
        </div>
        <div className="glass p-8 rounded-2xl border border-border flex items-center justify-center min-h-[400px]">
          <p className="text-foreground/60 font-semibold">Project management table backend integration in progress...</p>
        </div>
      </div>
    </div>
  )
}
