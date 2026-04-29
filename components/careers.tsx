'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight,
  Users,
  Heart,
  TrendingUp,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Free MMCY Gym membership for all employees and family discounts',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Continuous learning programs and clear career advancement paths',
  },
  {
    icon: Users,
    title: 'Great Culture',
    description: 'Collaborative environment with team events and celebrations',
  },
  {
    icon: Sparkles,
    title: 'Competitive Package',
    description: 'Market-leading salaries with performance bonuses',
  },
]

const openings = [
  {
    title: 'Senior Business Consultant',
    department: 'Corporate Services',
    location: 'Addis Ababa',
    type: 'Full-time',
    description: 'Lead strategic consulting engagements for our enterprise clients.',
  },
  {
    title: 'Personal Trainer',
    department: 'MMCY Gym',
    location: 'Addis Ababa',
    type: 'Full-time',
    description: 'Help members achieve their fitness goals with personalized training programs.',
  },
  {
    title: 'HR Specialist',
    department: 'Human Resources',
    location: 'Addis Ababa',
    type: 'Full-time',
    description: 'Support our growing team with recruitment and employee engagement initiatives.',
  },
  {
    title: 'Group Fitness Instructor',
    department: 'MMCY Gym',
    location: 'Addis Ababa',
    type: 'Part-time',
    description: 'Lead energizing group classes including yoga, HIIT, and spinning.',
  },
  {
    title: 'Financial Analyst',
    department: 'Finance',
    location: 'Addis Ababa',
    type: 'Full-time',
    description: 'Provide financial analysis and advisory services to our corporate clients.',
  },
]

export function Careers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="careers" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Careers</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Join the MMCY Family
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Build your career at Ethiopia&apos;s leading corporate and wellness company. 
            We&apos;re always looking for talented individuals who share our passion for excellence.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-serif text-3xl font-bold text-foreground text-center mb-12">Open Positions</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                          {job.title}
                        </h4>
                        <p className="text-sm text-accent font-medium">{job.department}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground ml-13 pl-13">{job.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Don&apos;t see a position that fits? We&apos;re always open to exceptional talent.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="#contact">
              Send Your Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
