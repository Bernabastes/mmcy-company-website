'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Check, 
  Star, 
  Dumbbell, 
  Building2, 
  ArrowLeft,
  Zap,
  Clock,
  Users,
  Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const gymPlans = [
  {
    name: 'Basic',
    price: '2,500',
    period: 'month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      { text: 'Access to gym equipment', included: true },
      { text: 'Locker room facilities', included: true },
      { text: 'Basic fitness assessment', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'Group classes', included: false },
      { text: 'Personal training', included: false },
      { text: 'Sauna & steam access', included: false },
      { text: 'Guest passes', included: false },
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Premium',
    price: '4,500',
    period: 'month',
    description: 'Our most popular plan for dedicated fitness enthusiasts',
    features: [
      { text: 'Access to gym equipment', included: true },
      { text: 'Locker room facilities', included: true },
      { text: 'Comprehensive fitness assessment', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'All group classes included', included: true },
      { text: '2 personal training sessions/month', included: true },
      { text: 'Sauna & steam access', included: true },
      { text: '2 guest passes/month', included: true },
    ],
    popular: true,
    cta: 'Join Premium',
  },
  {
    name: 'Elite',
    price: '8,000',
    period: 'month',
    description: 'The ultimate experience for peak performance',
    features: [
      { text: 'Access to gym equipment', included: true },
      { text: 'Private luxury locker', included: true },
      { text: 'Advanced fitness assessment', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'All group classes included', included: true },
      { text: 'Unlimited personal training', included: true },
      { text: 'Sauna & steam access', included: true },
      { text: 'Unlimited guest passes', included: true },
      { text: 'Priority class booking', included: true },
      { text: 'Exclusive elite events', included: true },
    ],
    popular: false,
    cta: 'Go Elite',
  },
]

const corporatePlans = [
  {
    name: 'Startup',
    price: '15,000',
    period: 'month',
    description: 'Essential services for growing businesses',
    features: [
      { text: 'Business consulting (10 hrs/month)', included: true },
      { text: 'Basic HR support', included: true },
      { text: 'Monthly financial review', included: true },
      { text: 'Email support', included: true },
      { text: 'Dedicated account manager', included: false },
      { text: 'On-site consultations', included: false },
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Business',
    price: '35,000',
    period: 'month',
    description: 'Comprehensive solutions for established companies',
    features: [
      { text: 'Business consulting (25 hrs/month)', included: true },
      { text: 'Full HR outsourcing', included: true },
      { text: 'Weekly financial reviews', included: true },
      { text: 'Priority support', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Monthly on-site consultations', included: true },
    ],
    popular: true,
    cta: 'Choose Business',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      { text: 'Unlimited consulting hours', included: true },
      { text: 'Complete HR management', included: true },
      { text: 'Real-time financial reporting', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Executive account team', included: true },
      { text: 'Weekly on-site presence', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Board-level advisory', included: true },
    ],
    popular: false,
    cta: 'Contact Sales',
  },
]

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a joining fee?',
    answer: 'There is a one-time joining fee of ETB 500 for gym memberships. Corporate services have no joining fee.',
  },
  {
    question: 'Can I pause my membership?',
    answer: 'Premium and Elite members can pause their membership for up to 30 days per year at no extra cost.',
  },
  {
    question: 'Do you offer family discounts?',
    answer: 'Yes! Elite members get 20% off for family members. We also have special corporate group rates.',
  },
]

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'gym' | 'corporate'>('gym')
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const currentPlans = activeTab === 'gym' ? gymPlans : corporatePlans

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground text-pretty mb-8">
                Choose the plan that fits your needs. Whether you&apos;re looking to 
                transform your fitness or elevate your business, we have you covered.
              </p>

              {/* Tab Toggle */}
              <div className="inline-flex p-1 rounded-full bg-muted">
                <button
                  onClick={() => setActiveTab('gym')}
                  className={cn(
                    'flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all',
                    activeTab === 'gym'
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <Dumbbell className="h-5 w-5" />
                  Gym Memberships
                </button>
                <button
                  onClick={() => setActiveTab('corporate')}
                  className={cn(
                    'flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all',
                    activeTab === 'corporate'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <Building2 className="h-5 w-5" />
                  Corporate Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Billing Toggle for Gym */}
            {activeTab === 'gym' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center items-center gap-4 mb-12"
              >
                <span className={cn(
                  'font-medium',
                  billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                  className="relative w-14 h-7 rounded-full bg-muted p-1 transition-colors"
                >
                  <div
                    className={cn(
                      'w-5 h-5 rounded-full bg-accent transition-transform',
                      billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-0'
                    )}
                  />
                </button>
                <span className={cn(
                  'font-medium',
                  billingPeriod === 'annual' ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  Annual
                  <span className="ml-2 text-xs text-accent font-bold">Save 20%</span>
                </span>
              </motion.div>
            )}

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {currentPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    'relative p-8 rounded-3xl transition-all duration-300',
                    plan.popular
                      ? 'bg-card border-2 border-accent shadow-2xl scale-105 z-10'
                      : 'bg-card border border-border hover:border-accent/50 hover:shadow-xl'
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-bold rounded-full flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    {plan.price !== 'Custom' && <span className="text-lg text-muted-foreground">ETB</span>}
                    <span className="text-5xl font-bold text-foreground">
                      {billingPeriod === 'annual' && plan.price !== 'Custom'
                        ? Math.round(parseInt(plan.price.replace(',', '')) * 0.8).toLocaleString()
                        : plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-8">{plan.description}</p>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        <div className={cn(
                          'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                          feature.included
                            ? 'bg-accent/20 text-accent'
                            : 'bg-muted text-muted-foreground'
                        )}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className={cn(
                          'text-sm',
                          feature.included ? 'text-foreground' : 'text-muted-foreground line-through'
                        )}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      'w-full rounded-full',
                      plan.popular
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                        : ''
                    )}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              All Plans Include
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: 'Premium Support', description: 'Get help when you need it' },
                { icon: Clock, title: 'Flexible Hours', description: 'Access on your schedule' },
                { icon: Users, title: 'Community', description: 'Join our active community' },
                { icon: Shield, title: 'Satisfaction Guaranteed', description: '30-day money back' },
              ].map((feature) => (
                <div key={feature.title} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join thousands of satisfied members and clients who have transformed 
              their lives with MMCY.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/#contact">Contact Sales</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/#gym">Book a Tour</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
