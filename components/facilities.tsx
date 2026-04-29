'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Building2, 
  Dumbbell, 
  Wifi, 
  Coffee, 
  Car, 
  Shield,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const facilities = [
  {
    category: 'Corporate Office',
    items: [
      { title: 'Executive Meeting Rooms', icon: Building2, description: 'State-of-the-art conference facilities for up to 50 participants' },
      { title: 'High-Speed Internet', icon: Wifi, description: 'Fiber optic connectivity throughout the building' },
      { title: 'Business Lounge', icon: Coffee, description: 'Premium refreshments and comfortable workspaces' },
      { title: 'Secure Parking', icon: Car, description: 'Underground parking with 24/7 security' },
    ],
  },
  {
    category: 'MMCY Gym',
    items: [
      { title: 'Modern Equipment', icon: Dumbbell, description: 'Latest fitness machines from premium brands' },
      { title: 'Luxury Locker Rooms', icon: Sparkles, description: 'Spa-quality amenities with private showers' },
      { title: 'Sauna & Steam', icon: Shield, description: 'Relaxation and recovery facilities' },
      { title: 'Juice Bar', icon: Coffee, description: 'Fresh smoothies and healthy snacks' },
    ],
  },
]

const galleryImages = [
  { id: 1, title: 'Modern Reception', category: 'office', color: 'from-primary/20 to-accent/10' },
  { id: 2, title: 'Cardio Zone', category: 'gym', color: 'from-accent/20 to-primary/10' },
  { id: 3, title: 'Executive Boardroom', category: 'office', color: 'from-primary/30 to-secondary/20' },
  { id: 4, title: 'Free Weights Area', category: 'gym', color: 'from-accent/30 to-primary/10' },
  { id: 5, title: 'Co-Working Space', category: 'office', color: 'from-secondary/30 to-accent/10' },
  { id: 6, title: 'Yoga Studio', category: 'gym', color: 'from-primary/20 to-accent/20' },
  { id: 7, title: 'Private Offices', category: 'office', color: 'from-accent/10 to-primary/20' },
  { id: 8, title: 'Luxury Locker Room', category: 'gym', color: 'from-primary/10 to-accent/30' },
]

export function Facilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<'all' | 'office' | 'gym'>('all')
  const [currentSlide, setCurrentSlide] = useState(0)

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredImages.length / 4))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredImages.length / 4)) % Math.ceil(filteredImages.length / 4))
  }

  return (
    <section id="facilities" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Facilities</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            World-Class Spaces for Work & Wellness
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Experience premium facilities designed to enhance productivity and elevate your 
            fitness journey in the heart of Addis Ababa.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {facilities.map((facility, facilityIndex) => (
            <motion.div
              key={facility.category}
              initial={{ opacity: 0, x: facilityIndex === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + facilityIndex * 0.1 }}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                {facilityIndex === 0 ? (
                  <Building2 className="h-6 w-6 text-primary" />
                ) : (
                  <Dumbbell className="h-6 w-6 text-accent" />
                )}
                {facility.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {facility.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all group"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h3 className="font-serif text-3xl font-bold text-foreground">Photo Gallery</h3>
            <div className="flex items-center gap-2">
              {['all', 'office', 'gym'].map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setActiveCategory(category as typeof activeCategory)
                    setCurrentSlide(0)
                  }}
                  className="rounded-full capitalize"
                >
                  {category === 'all' ? 'All' : category === 'office' ? 'Office' : 'Gym'}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredImages.slice(currentSlide * 4, currentSlide * 4 + 8).map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn(
                    'relative aspect-square rounded-2xl overflow-hidden group cursor-pointer',
                    index === 0 && 'md:col-span-2 md:row-span-2'
                  )}
                >
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br',
                    image.color
                  )} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {image.category === 'gym' ? (
                      <Dumbbell className="h-12 w-12 text-accent/40" />
                    ) : (
                      <Building2 className="h-12 w-12 text-primary/40" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-primary-foreground font-medium text-center px-4">
                      {image.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            {filteredImages.length > 4 && (
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
