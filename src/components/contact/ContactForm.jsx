import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg border p-8 shadow-sm h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Received</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out! Our team will get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg border p-8 shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </label>
          <Input id="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </label>
          <Input id="lastName" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" placeholder="john.doe@example.com" required />
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone Number
        </label>
        <Input id="phone" placeholder="+1 (555) 000-0000" />
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <Input id="company" placeholder="Acme Inc." />
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="service" className="text-sm font-medium">
          Service of Interest
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="consulting">Strategic Consulting</SelectItem>
            <SelectItem value="development">Custom Software Development</SelectItem>
            <SelectItem value="cloud">Cloud Solutions</SelectItem>
            <SelectItem value="data">Data & Analytics</SelectItem>
            <SelectItem value="security">Cybersecurity</SelectItem>
            <SelectItem value="ai">AI & Machine Learning</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} required />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

