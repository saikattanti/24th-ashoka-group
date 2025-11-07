"use client"

import { motion } from 'framer-motion'
import { Users, Calendar, MapPin, Award, Heart, Compass } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PointerHighlight } from '@/components/ui/PointerHighlight'
import Link from 'next/link'

// Timeline data
const timeline = [
  {
    year: '1936',
    title: 'Foundation',
    description: 'Established as part of the Bharat Scouts & Guides movement in South Calcutta.'
  },
  {
    year: '1950s',
    title: 'Early Growth',
    description: 'Expanded programs to include Cubs, Scouts, and Rovers with focus on character building.'
  },
  {
    year: '1980s',
    title: 'Community Service',
    description: 'Began systematic community service programs and disaster relief initiatives.'
  },
  {
    year: '2000s',
    title: 'Environmental Focus',
    description: 'Launched major environmental conservation and sustainability programs.'
  },
  {
    year: '2010',
    title: 'Prime Minister Shield',
    description: 'Received the prestigious Prime Minister Shield Award for excellence in scouting.'
  },
  {
    year: '2020s',
    title: 'Digital Innovation',
    description: 'Integrated technology in education and outreach through Kotha initiative and beyond.'
  }
]

// Leadership team
const leaders = [
  {
    name: 'Group Scout Leader',
    role: 'Overall Group Leadership',
    description: 'Coordinates all activities and ensures adherence to scouting principles.'
  },
  {
    name: 'Cub Scout Leader',
    role: 'Cubs Section (6-11 years)',
    description: 'Specializes in early childhood development through fun and adventure.'
  },
  {
    name: 'Scout Leader',
    role: 'Scouts Section (11-17 years)',
    description: 'Focuses on skill development, outdoor activities, and leadership training.'
  },
  {
    name: 'Rover Leader',
    role: 'Rovers Section (17-25 years)',
    description: 'Guides young adults in community service and advanced leadership roles.'
  }
]

// Scout values
const scoutValues = [
  {
    icon: Heart,
    title: 'Duty to God',
    description: 'Respecting spiritual values and understanding our place in the universe.'
  },
  {
    icon: Users,
    title: 'Duty to Others',
    description: 'Serving our community and helping those in need without expecting reward.'
  },
  {
    icon: Compass,
    title: 'Duty to Self',
    description: 'Developing our potential and taking responsibility for our own development.'
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo */}
            <div className="mb-8">
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 mb-4">
                <img 
                  src="/logo-removebg.png" 
                  alt="24th Asoka Group Official Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                  style={{ filter: 'drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.3))' }}
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our <PointerHighlight containerClassName="inline-block">
                <span className="text-green-400">Story</span>
              </PointerHighlight>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              For over eight decades, the 24th Asoka Group has been a beacon of youth development, 
              environmental stewardship, and community service in Bengal and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To develop confident, caring, responsible and committed young people who achieve their full potential 
                and make a positive contribution to their communities and society.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through adventure, friendship and outdoor activities, we help young people develop skills for life, 
                discover their strengths and prepare them for a successful future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-linear-to-br from-sage-50 to-sage-100 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading youth organization in Bengal, creating a better world by developing young people 
                who are environmentally conscious, socially responsible, and equipped with 21st-century skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scout Values */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
              Our Fundamental Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Scout Method is based on three fundamental principles that guide everything we do.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {scoutValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-700 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From 1936 to today - milestones that shaped our legacy of service and youth development.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-100">
                    <div className="text-2xl font-heading font-bold text-primary-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
              Leadership Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leaders guide each section with dedication, ensuring every young person 
              reaches their full potential.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary-700 mb-2">
                  {leader.name}
                </h3>
                <div className="text-sm text-secondary-600 font-medium mb-3">
                  {leader.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {leader.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scout Promise & Law */}
      <section className="py-20 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              The Scout Promise & Law
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              These timeless principles guide our actions and shape our character every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Scout Promise</h3>
              <div className="text-lg leading-relaxed space-y-3">
                <p>On my honour, I promise that I will do my best—</p>
                <p>To do my duty to God and my country,</p>
                <p>To help other people at all times,</p>
                <p>To obey the Scout Law.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Scout Law</h3>
              <div className="text-lg leading-relaxed space-y-2">
                <p>1. A Scout's honour is to be trusted</p>
                <p>2. A Scout is loyal</p>
                <p>3. A Scout's duty is to be useful and help others</p>
                <p>4. A Scout is a friend to all</p>
                <p>5. A Scout is courteous</p>
                <p>6. A Scout is kind to animals</p>
                <p>7. A Scout obeys orders</p>
                <p>8. A Scout smiles and whistles</p>
                <p>9. A Scout is thrifty</p>
                <p>10. A Scout is clean in thought, word and deed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
              Be Part of Our Legacy
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join a movement that has been shaping young lives for generations. 
              Together, we can continue building a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-involved">
                <Button size="lg" className="text-lg px-8 py-4">
                  Join Our Movement
                </Button>
              </Link>
              <Link href="/units">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Explore Our Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}