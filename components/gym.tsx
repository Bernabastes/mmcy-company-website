'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Dumbbell, 
  Clock, 
  Users, 
  Star,
  Check,
  ArrowRight,
  Zap,
  Heart,
  Target
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const plans = [
  {
    name: 'Basic',
    price: '2,500',
    period: 'month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym equipment',
      'Locker room facilities',
      'Basic fitness assessment',
      'Mobile app access',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '4,500',
    period: 'month',
    description: 'Our most popular plan for dedicated fitness enthusiasts',
    features: [
      'Everything in Basic',
      'All group classes included',
      '2 personal training sessions',
      'Nutrition consultation',
      'Sauna & steam access',
      'Guest passes (2/month)',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '8,000',
    period: 'month',
    description: 'The ultimate experience for peak performance',
    features: [
      'Everything in Premium',
      'Unlimited personal training',
      'Private locker',
      'Priority class booking',
      'Exclusive elite events',
      'Corporate gym access',
      'Family membership discount',
    ],
    popular: false,
  },
]

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our state-of-the-art equipment and expert guidance.',
  },
  {
    icon: Heart,
    title: 'Cardio & Endurance',
    description: 'Improve your cardiovascular health with diverse cardio options from spinning to HIIT.',
  },
  {
    icon: Zap,
    title: 'Functional Fitness',
    description: 'Enhance everyday movements and prevent injuries with functional training programs.',
  },
  {
    icon: Target,
    title: 'Personal Training',
    description: 'One-on-one sessions with certified trainers tailored to your specific goals.',
  },
]

const trainers = [
  { name: 'Daniel Kebede', specialty: 'Strength & Conditioning', experience: '8+ years' },
  { name: 'Sara Mekonnen', specialty: 'Yoga & Pilates', experience: '6+ years' },
  { name: 'Yohannes Tesfaye', specialty: 'CrossFit & HIIT', experience: '10+ years' },
  { name: 'Hana Alemayehu', specialty: 'Nutrition & Wellness', experience: '5+ years' },
]

const schedule = [
  { time: '06:00', class: 'Morning Yoga', trainer: 'Sara M.', duration: '60 min' },
  { time: '07:30', class: 'HIIT Burn', trainer: 'Yohannes T.', duration: '45 min' },
  { time: '12:00', class: 'Lunch Express', trainer: 'Daniel K.', duration: '30 min' },
  { time: '17:30', class: 'Power Lifting', trainer: 'Daniel K.', duration: '60 min' },
  { time: '18:30', class: 'Spin Class', trainer: 'Hana A.', duration: '45 min' },
  { time: '19:30', class: 'Evening Pilates', trainer: 'Sara M.', duration: '60 min' },
]

export function Gym() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedPlan, setSelectedPlan] = useState('Premium')

  return (
    <section id="gym" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--primary-foreground)_25%,var(--primary-foreground)_50%,transparent_50%,transparent_75%,var(--primary-foreground)_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm uppercase tracking-wider mb-6">
            <Dumbbell className="h-4 w-4" />
            MMCY Gym
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
            Where Champions Are Made
          </h2>
          <p className="text-lg text-primary-foreground/80 text-pretty">
            Experience premium fitness at MMCY Gym. State-of-the-art equipment, world-class 
            trainers, and a community dedicated to helping you achieve your fitness goals.
          </p>
        </motion.div>

        {/* Training Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <program.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
              <p className="text-sm text-primary-foreground/70">{program.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Membership Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="font-serif text-3xl font-bold text-center mb-12">Membership Plans</h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                onClick={() => setSelectedPlan(plan.name)}
                className={cn(
                  'relative p-8 rounded-2xl cursor-pointer transition-all duration-300',
                  plan.popular
                    ? 'bg-accent text-accent-foreground scale-105 shadow-2xl'
                    : selectedPlan === plan.name
                    ? 'bg-primary-foreground text-primary ring-2 ring-accent'
                    : 'bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/15'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                )}
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm">ETB</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-80">/{plan.period}</span>
                </div>
                <p className={cn(
                  'text-sm mb-6',
                  plan.popular ? 'text-accent-foreground/80' : 'opacity-70'
                )}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className={cn(
                        'h-4 w-4 mt-0.5 flex-shrink-0',
                        plan.popular ? 'text-primary' : 'text-accent'
                      )} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={cn(
                    'w-full rounded-full',
                    plan.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-accent text-accent-foreground hover:bg-accent/90'
                  )}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trainers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="font-serif text-3xl font-bold text-center mb-12">Our Expert Trainers</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/30 to-primary-foreground/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-lg">{trainer.name}</h4>
                <p className="text-accent text-sm font-medium">{trainer.specialty}</p>
                <p className="text-primary-foreground/60 text-sm mt-1">{trainer.experience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Class Schedule Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-3xl font-bold">Today&apos;s Schedule</h3>
            <Button variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Clock className="mr-2 h-4 w-4" />
              Full Schedule
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((item, index) => (
              <motion.div
                key={`${item.time}-${item.class}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="text-center">
                  <div className="text-accent font-bold">{item.time}</div>
                  <div className="text-xs text-primary-foreground/60">{item.duration}</div>
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.class}</div>
                  <div className="text-sm text-primary-foreground/60">{item.trainer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">
              Book a Free Tour
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
