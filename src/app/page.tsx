"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, TreePine, Award, MapPin, Phone, Heart, Star, Target, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PointerHighlight } from '@/components/ui/PointerHighlight'
import Link from 'next/link'

// Transparency settings - modify these values to adjust background visibility
const HERO_BG_TRANSPARENCY = 0.3 // 0.0 = fully visible bg, 1.0 = hidden bg
const PROJECTS_BG_TRANSPARENCY = 0.2 // 0.0 = fully visible bg, 1.0 = hidden bg

// Shadow effects
const TEXT_SHADOW = '3px 3px 8px rgba(0, 0, 0, 0.5)'
const BUTTON_SHADOW = '0 8px 16px rgba(0, 0, 0, 0.2)'

// Statistics data
const stats = [
  { label: 'Years of Service', value: '85+', icon: Award },
  { label: 'Active Members', value: '150+', icon: Users },
  { label: 'Projects Completed', value: '50+', icon: TreePine },
  { label: 'Communities Served', value: '25+', icon: MapPin },
]

// Featured projects
const featuredProjects = [
  {
    title: 'Beyond Coal Project',
    description: 'Bringing light and education to children in coalfield villages through STEM programs.',
    impact: '200+ children reached',
    icon: Target,
    color: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  {
    title: 'Sundarban Conservation',
    description: 'Mangrove plantation and ecosystem restoration to protect the delta.',
    impact: '10,000+ mangroves planted',
    icon: TreePine,
    color: 'bg-green-50 border-green-200 text-green-800'
  },
  {
    title: 'Community Service',
    description: 'Regular blood drives, health camps, and disaster relief operations.',
    impact: '1,000+ families helped',
    icon: Heart,
    color: 'bg-red-50 border-red-200 text-red-800'
  }
]

// Animation variants
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

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Floating Nature Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Leaves */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-8 h-8 text-green-400 opacity-30"
        >
          🍃
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-[20%] w-6 h-6 text-green-500 opacity-40"
        >
          🌿
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-64 left-[70%] w-10 h-10 text-green-300 opacity-25"
        >
          🌱
        </motion.div>
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, -10, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-40 right-[10%] w-7 h-7 text-green-400 opacity-35"
        >
          🍃
        </motion.div>
        <motion.div
          animate={{
            y: [0, -22, 0],
            x: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-60 left-[20%] w-9 h-9 text-green-500 opacity-20"
        >
          🌿
        </motion.div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-white to-green-100"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 253, 244, ${HERO_BG_TRANSPARENCY}), rgba(255, 255, 255, ${HERO_BG_TRANSPARENCY * 1.5}), rgba(240, 253, 244, ${HERO_BG_TRANSPARENCY})), url('/bg-1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-gray-900" style={{ textShadow: TEXT_SHADOW }}>
              <span className="block">24th Asoka Group</span>
              <span className="block text-green-600 text-4xl md:text-5xl lg:text-6xl mt-2">
                Bharat Scouts & Guides
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-4" style={{ textShadow: TEXT_SHADOW }}>
                <span className="block text-green-700">Serving Community</span>
                <PointerHighlight containerClassName="inline-block">
                  <span className="text-purple-600">Protecting Nature</span>
                </PointerHighlight>
                <span className="block text-gray-700">Building Character</span>
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-4 text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: TEXT_SHADOW }}>
              Since 1936, empowering youth through adventure, service, and environmental stewardship
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-500 font-medium" style={{ textShadow: TEXT_SHADOW }}>
              South Calcutta  WOSM Member  85+ Years of Excellence
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/get-involved">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ 
                  boxShadow: BUTTON_SHADOW,
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                }}
              >
                Join Our Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
                style={{ 
                  boxShadow: BUTTON_SHADOW,
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)'
                }}
              >
                Our Story
              </Button>
            </Link>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-gray-500 space-y-1"
          >
            {/* <div>📍 7A Dover Terrace, Kolkata</div>
            <div>📞 +91 9830458324 • ✉️ 24asokagroup@gmail.com</div> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center bg-green-50 p-6 rounded-xl border border-green-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section 
        className="py-20 bg-linear-to-b from-green-50 to-white"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 253, 244, ${PROJECTS_BG_TRANSPARENCY}), rgba(255, 255, 255, ${PROJECTS_BG_TRANSPARENCY * 1.2})), url('/bg-2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6" style={{ textShadow: TEXT_SHADOW }}>
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ textShadow: TEXT_SHADOW }}>
              Discover how we are making a real difference in communities and environment across Bengal.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`p-8 rounded-2xl border-2 ${project.color} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white rounded-full mr-4">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">
                    {project.title}
                  </h3>
                </div>
                <p className="mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-white bg-opacity-50 px-4 py-2 rounded-lg">
                  <div className="font-semibold">{project.impact}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                style={{ 
                  boxShadow: BUTTON_SHADOW,
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                }}
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-linear-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ textShadow: TEXT_SHADOW }}>
              Ready to Begin Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto" style={{ textShadow: TEXT_SHADOW }}>
              Join thousands of young leaders who have discovered their potential through Scouting. 
              Whether you are 6 or 25, there is a place for you in our movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-involved">
                <Button 
                  size="lg" 
                  className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                  style={{ 
                    boxShadow: BUTTON_SHADOW,
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Join Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-semibold"
                  style={{ 
                    boxShadow: BUTTON_SHADOW,
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
