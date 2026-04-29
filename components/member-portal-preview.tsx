'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  Award,
  Dumbbell,
  Flame,
  Target,
  ChevronRight,
  Bell,
  User
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

const upcomingClasses = [
  { time: '07:30', name: 'HIIT Burn', trainer: 'Yohannes T.', spots: 3 },
  { time: '12:00', name: 'Lunch Express', trainer: 'Daniel K.', spots: 8 },
  { time: '18:30', name: 'Spin Class', trainer: 'Hana A.', spots: 5 },
]

const achievements = [
  { icon: Flame, label: '30-Day Streak', color: 'text-orange-500' },
  { icon: Target, label: 'Goal Crusher', color: 'text-accent' },
  { icon: Award, label: 'Early Bird', color: 'text-yellow-500' },
]

export function MemberPortalPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 lg:py-32 bg-primary/5" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Member Portal</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Your Fitness Journey, Simplified
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Track your progress, book classes, and manage your membership—all from one 
            intuitive dashboard. Available on web and mobile.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Browser Frame */}
            <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-lg bg-background text-sm text-muted-foreground">
                    portal.mmcy.com.et
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Welcome back, Meron!</h3>
                    <p className="text-muted-foreground">Premium Member · 145 days active</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Bell className="h-5 w-5" />
                    </Button>
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                      M
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">This Week</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">4</div>
                    <div className="text-sm text-accent">Workouts</div>
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Total Time</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">6.5h</div>
                    <div className="text-sm text-accent">+1.2h vs last week</div>
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Flame className="h-4 w-4" />
                      <span className="text-sm">Calories</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">2,450</div>
                    <div className="text-sm text-accent">Burned</div>
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">Progress</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">78%</div>
                    <div className="text-sm text-accent">Monthly goal</div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Goal Progress */}
                  <div className="lg:col-span-2 p-5 rounded-xl bg-background border border-border">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-accent" />
                      Monthly Goals
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Workouts (16/20)</span>
                          <span className="font-medium text-foreground">80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Cardio Hours (8/12)</span>
                          <span className="font-medium text-foreground">67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Strength Sessions (6/8)</span>
                          <span className="font-medium text-foreground">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="p-5 rounded-xl bg-background border border-border">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-accent" />
                      Achievements
                    </h4>
                    <div className="space-y-3">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.label}
                          className="flex items-center gap-3 p-2 rounded-lg bg-muted/50"
                        >
                          <div className={`p-2 rounded-lg bg-card ${achievement.color}`}>
                            <achievement.icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {achievement.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Upcoming Classes */}
                <div className="mt-6 p-5 rounded-xl bg-background border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Dumbbell className="h-5 w-5 text-accent" />
                      Today&apos;s Classes
                    </h4>
                    <Button variant="ghost" size="sm" className="text-accent">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {upcomingClasses.map((cls) => (
                      <div
                        key={cls.time}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                      >
                        <div className="text-center">
                          <div className="text-accent font-bold">{cls.time}</div>
                          <div className="text-xs text-muted-foreground">{cls.spots} spots</div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm text-foreground">{cls.name}</div>
                          <div className="text-xs text-muted-foreground">{cls.trainer}</div>
                        </div>
                        <Button size="sm" variant="outline" className="rounded-full text-xs px-3">
                          Book
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Join MMCY Gym today and get instant access to your personal fitness dashboard.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#gym">
              <User className="mr-2 h-5 w-5" />
              Become a Member
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
