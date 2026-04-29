'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue the highest standards in everything we do, from corporate solutions to fitness training.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Trust and transparency form the foundation of all our business relationships and member interactions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge solutions and continuously evolve to meet the changing needs of our clients.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building strong connections among our corporate partners and fitness family drives our mission forward.',
  },
]

const stats = [
  { icon: Award, value: '500+', label: 'Satisfied Clients', color: 'text-accent' },
  { icon: Users, value: '150+', label: 'Expert Team', color: 'text-primary' },
  { icon: TrendingUp, value: '98%', label: 'Client Retention', color: 'text-accent' },
  { icon: Heart, value: '2,000+', label: 'Active Members', color: 'text-primary' },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            A Legacy of Excellence in Ethiopia
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            For over a decade, MMCY has been at the forefront of corporate innovation and wellness 
            excellence in Ethiopia. We blend professional expertise with a passion for holistic 
            well-being, creating unique value for businesses and individuals alike.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in Addis Ababa, MMCY Company began with a simple vision: to provide 
                world-class corporate services while fostering a culture of wellness among 
                Ethiopia&apos;s business community.
              </p>
              <p>
                What started as a boutique consulting firm has grown into a comprehensive 
                corporate solutions provider with an integrated premium fitness facility. 
                Today, MMCY Gym stands as a testament to our belief that professional 
                success and personal wellness go hand in hand.
              </p>
              <p>
                Our unique approach has attracted top corporations, entrepreneurs, and 
                fitness enthusiasts who share our vision of excellence in every aspect of life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-4">
                    <Award className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-foreground mb-2">Since 2012</h4>
                  <p className="text-muted-foreground">Building Excellence in Ethiopia</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="font-serif text-3xl font-bold text-foreground text-center mb-12">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border text-center overflow-hidden group hover:border-accent/50 transition-colors"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon className="h-12 w-12" />
              </div>
              <div className={`font-serif text-4xl sm:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
