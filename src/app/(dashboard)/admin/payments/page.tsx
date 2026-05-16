"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Activity } from "lucide-react"

export default function PaymentsPage() {
  return (
    <div className="flex min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-black text-foreground flex items-center gap-3"><Activity className="w-8 h-8"/> Payments Overview</h1>
          <p className="text-foreground/70">Manage payouts and view platform revenue.</p>
        </div>
        <div className="glass p-8 rounded-2xl border border-border flex items-center justify-center min-h-[400px]">
          <p className="text-foreground/60 font-semibold">Payment processing backend integration in progress...</p>
        </div>
      </div>
    </div>
  )
}
