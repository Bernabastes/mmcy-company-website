'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Briefcase, 
  Users, 
  LineChart, 
  Shield, 
  Cpu, 
  Globe,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Strategic advisory services to help your business grow and thrive in competitive markets.',
    features: ['Market Analysis', 'Growth Strategy', 'Operational Excellence'],
  },
  {
    icon: Users,
    title: 'HR Outsourcing',
    description: 'Comprehensive human resource solutions including recruitment, training, and payroll management.',
    features: ['Talent Acquisition', 'Payroll Services', 'Employee Training'],
  },
  {
    icon: LineChart,
    title: 'Financial Services',
    description: 'Expert financial planning, accounting, and advisory services for businesses of all sizes.',
    features: ['Financial Planning', 'Tax Advisory', 'Audit Services'],
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate business risks with our comprehensive risk management solutions.',
    features: ['Risk Assessment', 'Compliance', 'Insurance Advisory'],
  },
  {
    icon: Cpu,
    title: 'IT Solutions',
    description: 'Modern technology solutions to digitize and streamline your business operations.',
    features: ['Digital Transformation', 'Software Development', 'Cloud Services'],
  },
  {
    icon: Globe,
    title: 'Market Entry',
    description: 'Navigate the Ethiopian market with our local expertise and international best practices.',
    features: ['Market Research', 'Regulatory Compliance', 'Partnership Development'],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Comprehensive Corporate Solutions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From strategic consulting to digital transformation, we provide end-to-end 
            business services tailored to the unique needs of the Ethiopian market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 text-primary mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <service.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Looking for a custom solution? Let&apos;s discuss your specific needs.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="#contact">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
