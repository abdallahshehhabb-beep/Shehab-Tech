"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe, Menu, X } from "lucide-react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-primary">SHEHAB</span>
              <span className="text-2xl font-light text-foreground">TECH</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="#about" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="#projects" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              <a href="mailto:abdallahshehhabb@gmail.com" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-card transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 rounded-full hover:bg-card transition-colors flex items-center gap-2"
              aria-label="Switch language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium uppercase">EN</span>
            </button>
            
            <div className="flex items-center space-x-2 ms-4">
              <Link href="/login" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                Log In
              </Link>
              <Link href="/register" className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-card transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-card hover:text-primary px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="#about" className="block hover:bg-card hover:text-primary px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="#projects" className="block hover:bg-card hover:text-primary px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <a href="mailto:abdallahshehhabb@gmail.com" className="block hover:bg-card hover:text-primary px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-5 space-x-4">
              <Link href="/login" className="flex-1 text-center px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-card transition-colors">
                Log In
              </Link>
              <Link href="/register" className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Register
              </Link>
            </div>
            <div className="mt-4 flex justify-center space-x-6">
               <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-card transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                className="p-2 rounded-full hover:bg-card transition-colors flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">EN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
