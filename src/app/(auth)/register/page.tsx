"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, UserPlus, Shield } from "lucide-react"
import { registerUser } from "@/app/actions/auth"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [step, setStep] = React.useState(1)
  const [error, setError] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
      return
    }

    setIsLoading(true)
    setError("")
    
    const formData = new FormData(e.currentTarget)
    const result = await registerUser(formData)
    
    if (result.success) {
      router.push("/login?registered=true")
    } else {
      setError(result.error || "Something went wrong")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl w-full grid md:grid-cols-5 bg-card border border-border shadow-2xl rounded-3xl overflow-hidden glass">
        
        {/* Left Side / Progress */}
        <div className="hidden md:flex flex-col col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 p-8 border-r border-border relative">
          <div className="mb-12">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black text-primary">SHEHAB</span>
              <span className="text-xl font-light text-foreground">TECH</span>
            </Link>
          </div>
          
          <h2 className="text-3xl font-black text-foreground mb-4">Join the Elite Workforce</h2>
          <p className="text-foreground/70 mb-12">Complete your profile to unlock premium AI data collection projects globally.</p>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { num: 1, title: "Account Info", desc: "Basic login details" },
              { num: 2, title: "Personal Details", desc: "Identity & demographic" },
              { num: 3, title: "Contact", desc: "Phone & WhatsApp" },
              { num: 4, title: "Verification", desc: "ID & Selfie upload" }
            ].map((s) => (
              <div key={s.num} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${step >= s.num ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 bg-card ${step >= s.num ? 'border-primary text-primary shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'border-border text-foreground/50'} font-bold z-10 relative`}>
                  {step > s.num ? <Shield className="w-5 h-5" /> : s.num}
                </div>
                <div className="ml-4 md:ml-0 md:mr-4 w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] text-left md:text-right">
                  <h4 className="font-bold text-foreground">{s.title}</h4>
                  <span className="text-sm text-foreground/60">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side / Form */}
        <div className="col-span-3 p-8 md:p-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground">Create your account</h3>
            <p className="text-foreground/70">Step {step} of 4</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">{error}</div>}
            
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">First Name</label>
                    <input name="firstName" type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John" required={step===1} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Last Name</label>
                    <input name="lastName" type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Doe" required={step===1} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Middle Name (Optional)</label>
                  <input name="middleName" type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="William" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <input name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" required={step===1} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Password</label>
                  <input name="password" type="password" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="••••••••" required={step===1} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Gender</label>
                  <select name="gender" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none" required={step===2}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Age</label>
                    <input name="age" type="number" min="18" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="25" required={step===2} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Country</label>
                    <select name="country" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none" required={step===2}>
                      <option value="">Select Country</option>
                      <option value="EG">Egypt</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="JO">Jordan</option>
                      <option value="LB">Lebanon</option>
                      <option value="DZ">Algeria</option>
                      <option value="MA">Morocco</option>
                      <option value="IQ">Iraq</option>
                      <option value="SD">Sudan</option>
                      <option value="SY">Syria</option>
                      <option value="TN">Tunisia</option>
                      <option value="YE">Yemen</option>
                      <option value="KW">Kuwait</option>
                      <option value="QA">Qatar</option>
                      <option value="OM">Oman</option>
                      <option value="BH">Bahrain</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IT">Italy</option>
                      <option value="ES">Spain</option>
                      <option value="TR">Turkey</option>
                      <option value="IN">India</option>
                      <option value="PK">Pakistan</option>
                      <option value="ID">Indonesia</option>
                      <option value="MY">Malaysia</option>
                      <option value="NG">Nigeria</option>
                      <option value="ZA">South Africa</option>
                      <option value="BR">Brazil</option>
                      <option value="MX">Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Phone Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-border bg-card text-foreground/50 sm:text-sm">
                      +20
                    </span>
                    <input name="phone" type="tel" className="flex-1 px-4 py-3 rounded-r-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="100 123 4567" required={step===3} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">WhatsApp Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-border bg-card text-foreground/50 sm:text-sm">
                      +20
                    </span>
                    <input name="whatsapp" type="tel" className="flex-1 px-4 py-3 rounded-r-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="100 123 4567" required={step===3} />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="p-4 border-2 border-dashed border-border rounded-2xl bg-background text-center hover:bg-card/50 transition-colors cursor-pointer group">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">Upload ID Card</h4>
                  <p className="text-xs text-foreground/60 mb-4">Front and back (JPG, PNG or PDF)</p>
                  <button type="button" className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:text-primary transition-colors">Select File</button>
                </div>
                <div className="p-4 border-2 border-dashed border-border rounded-2xl bg-background text-center hover:bg-card/50 transition-colors cursor-pointer group">
                  <UserPlus className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">Upload Selfie</h4>
                  <p className="text-xs text-foreground/60 mb-4">Clear photo matching your ID</p>
                  <button type="button" className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:text-primary transition-colors">Take Photo</button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-6 border-t border-border">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-xl font-semibold text-foreground/70 hover:text-foreground hover:bg-card transition-colors">
                  Back
                </button>
              ) : (
                <div />
              )}
              
              <button disabled={isLoading} type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 disabled:opacity-50">
                {isLoading ? "Processing..." : (step < 4 ? "Continue" : "Complete Registration")} {!isLoading && <ArrowRight className="w-5 h-5" />}
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-foreground/60 mt-8">
            Already have an account? <Link href="/login" className="text-primary font-semibold hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
