'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building2,
  Dumbbell,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Bole Road, Atlas Building', 'Addis Ababa, Ethiopia'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+251 11 123 4567', '+251 91 234 5678'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@mmcy.com.et', 'gym@mmcy.com.et'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 6:00 AM - 10:00 PM', 'Sat - Sun: 7:00 AM - 8:00 PM'],
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [inquiryType, setInquiryType] = useState<'corporate' | 'gym'>('corporate')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Whether you need corporate solutions or want to join our fitness community, 
            we&apos;re here to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border">
              {/* Inquiry Type Toggle */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={() => setInquiryType('corporate')}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all',
                    inquiryType === 'corporate'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  )}
                >
                  <Building2 className="h-5 w-5" />
                  Corporate Inquiry
                </button>
                <button
                  onClick={() => setInquiryType('gym')}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all',
                    inquiryType === 'gym'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  )}
                >
                  <Dumbbell className="h-5 w-5" />
                  Gym Membership
                </button>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+251 91 234 5678"
                      className="rounded-xl"
                    />
                  </div>

                  {inquiryType === 'corporate' ? (
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="rounded-xl"
                      />
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="plan" className="block text-sm font-medium text-foreground mb-2">
                        Interested Plan
                      </label>
                      <select
                        id="plan"
                        className="w-full h-10 px-3 rounded-xl border border-input bg-background text-foreground"
                      >
                        <option value="">Select a plan</option>
                        <option value="basic">Basic - ETB 2,500/month</option>
                        <option value="premium">Premium - ETB 4,500/month</option>
                        <option value="elite">Elite - ETB 8,000/month</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {inquiryType === 'corporate' ? 'Tell us about your needs' : 'Any questions or goals?'}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={
                        inquiryType === 'corporate'
                          ? 'Describe your business needs...'
                          : 'Tell us about your fitness goals...'
                      }
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className={cn(
                      'w-full rounded-full',
                      inquiryType === 'gym' ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''
                    )}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {inquiryType === 'corporate' ? 'Request a Quote' : 'Book a Tour'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent mb-3">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-1">MMCY Headquarters</h4>
                  <p className="text-sm text-muted-foreground">Bole Road, Atlas Building</p>
                  <p className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</p>
                  <Button variant="outline" size="sm" className="mt-4 rounded-full">
                    Get Directions
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
