'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight, Building2, Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    content: "MMCY has transformed how we approach business operations in Ethiopia. Their strategic consulting helped us expand our market presence by 40% in just one year. The team's expertise and dedication are unmatched.",
    author: 'Alemayehu Tadesse',
    role: 'CEO, TechEthiopia Solutions',
    type: 'corporate',
    rating: 5,
  },
  {
    id: 2,
    content: "Joining MMCY Gym was the best decision I made for my health. The trainers are incredibly knowledgeable, and the facilities are world-class. I've lost 15kg and gained confidence I never knew I had.",
    author: 'Meron Hailu',
    role: 'Marketing Director & Gym Member',
    type: 'gym',
    rating: 5,
  },
  {
    id: 3,
    content: "Their HR outsourcing services have been invaluable to our growing startup. MMCY handles our recruitment and payroll seamlessly, allowing us to focus on innovation and growth.",
    author: 'Dawit Mengistu',
    role: 'Founder, Addis Innovation Hub',
    type: 'corporate',
    rating: 5,
  },
  {
    id: 4,
    content: "The personal training program at MMCY is exceptional. Coach Daniel designed a program specifically for my needs as a busy executive. Now I'm stronger, more energetic, and more productive than ever.",
    author: 'Sara Bekele',
    role: 'CFO & Premium Member',
    type: 'gym',
    rating: 5,
  },
  {
    id: 5,
    content: "MMCY's financial advisory services helped us navigate complex regulatory requirements and optimize our tax strategy. Their local expertise combined with international standards is exactly what businesses in Ethiopia need.",
    author: 'Mohammed Ibrahim',
    role: 'Managing Partner, East Africa Ventures',
    type: 'corporate',
    rating: 5,
  },
  {
    id: 6,
    content: "The group classes at MMCY Gym are amazing! The yoga sessions with Sara have helped me manage stress, and the community here is so supportive. It's not just a gym—it's a family.",
    author: 'Tigist Alemu',
    role: 'Entrepreneur & Elite Member',
    type: 'gym',
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState<'all' | 'corporate' | 'gym'>('all')
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(t => t.type === activeFilter)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Hear from our corporate clients and gym members about their experiences with MMCY.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-3 mb-12"
        >
          {[
            { value: 'all', label: 'All Reviews', icon: null },
            { value: 'corporate', label: 'Corporate', icon: Building2 },
            { value: 'gym', label: 'Gym Members', icon: Dumbbell },
          ].map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              onClick={() => {
                setActiveFilter(filter.value as typeof activeFilter)
                setCurrentIndex(0)
              }}
              className="rounded-full"
            >
              {filter.icon && <filter.icon className="mr-2 h-4 w-4" />}
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-card border border-border">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
              <Quote className="h-12 w-12 text-accent/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 pt-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'h-5 w-5',
                      i < filteredTestimonials[currentIndex]?.rating
                        ? 'text-accent fill-accent'
                        : 'text-muted'
                    )}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-serif italic"
              >
                &ldquo;{filteredTestimonials[currentIndex]?.content}&rdquo;
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center">
                  {filteredTestimonials[currentIndex]?.type === 'gym' ? (
                    <Dumbbell className="h-6 w-6 text-accent" />
                  ) : (
                    <Building2 className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {filteredTestimonials[currentIndex]?.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {filteredTestimonials[currentIndex]?.role}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full h-10 w-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full h-10 w-10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    index === currentIndex ? 'w-6 bg-accent' : 'bg-muted-foreground/30'
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTestimonials
            .filter((_, index) => index !== currentIndex)
            .slice(0, 3)
            .map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                onClick={() => setCurrentIndex(testimonials.indexOf(testimonial))}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 cursor-pointer transition-all hover:shadow-md"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-4 w-4',
                        i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted'
                      )}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                    {testimonial.type === 'gym' ? (
                      <Dumbbell className="h-4 w-4 text-accent" />
                    ) : (
                      <Building2 className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
