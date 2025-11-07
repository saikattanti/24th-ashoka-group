"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, Star, Compass, TreePine, ChevronDown, ChevronRight, Users, Handshake, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Units', 
    href: '/units',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'Cubs',
        href: '/units#cubs',
        description: 'Fun, friendship and outdoor adventure',
        ageRange: '6-11 years',
        icon: Star,
        color: 'from-yellow-400 to-orange-500'
      },
      {
        name: 'Scouts', 
        href: '/units#scouts',
        description: 'Adventure, skills and friendship',
        ageRange: '11-17 years', 
        icon: Compass,
        color: 'from-green-500 to-emerald-600'
      },
      {
        name: 'Rovers',
        href: '/units#rovers', 
        description: 'Leadership, service and adventure',
        ageRange: '17-25 years',
        icon: TreePine,
        color: 'from-blue-500 to-indigo-600'
      }
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Achievements', href: '/achievements' },
  { 
    name: 'Get Involved', 
    href: '/get-involved',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'Become a Member',
        href: '/get-involved#member',
        description: 'Join Cubs, Scouts, or Rovers sections',
        details: 'Start your Scouting journey',
        icon: Users,
        color: 'from-blue-500 to-blue-600'
      },
      {
        name: 'Volunteer With Us', 
        href: '/get-involved#volunteer',
        description: 'Support activities and mentor youth',
        details: 'Make a difference in young lives',
        icon: Handshake,
        color: 'from-green-500 to-green-600'
      }
    ]
  },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Contact Bar */}
      <div className="bg-green-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 9830458324</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>24asokagroup@gmail.com</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="font-medium">Serving Community Since 1936</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={cn(
          "bg-white transition-all duration-300 border-b",
          isScrolled 
            ? "shadow-lg border-gray-200/50 backdrop-blur-sm bg-white/95" 
            : "shadow-sm border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-16 w-16 shrink-0">
                <img 
                  src="/logo-removebg.png" 
                  alt="24th Asoka Group Logo" 
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  24th Asoka Group
                </div>
                <div className="text-sm text-green-600 font-medium -mt-1">
                  Bharat Scouts & Guides
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-700 hover:text-green-600 px-4 py-2 text-sm font-medium transition-colors duration-200 group flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeDropdown === item.name ? "rotate-180" : ""
                        )} 
                      />
                    )}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                          style={{ 
                            width: item.name === 'Units' ? '420px' : '440px'
                          }}
                        >
                          {/* Header */}
                          <div className="bg-linear-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-gray-100">
                            <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>
                                {item.name === 'Units' ? 'Our Scouting Units' : 'Join Our Mission'}
                              </span>
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              {item.name === 'Units' 
                                ? 'Discover the perfect program for your age group' 
                                : 'Multiple ways to make a difference in your community'
                              }
                            </p>
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <div className="space-y-3">
                              {item.dropdownItems?.map((dropdownItem, index) => {
                                const IconComponent = dropdownItem.icon
                                return (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
                                  >
                                    {/* Icon with gradient background */}
                                    <div className={cn(
                                      "w-10 h-10 rounded-lg bg-linear-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm",
                                      dropdownItem.color
                                    )}>
                                      <IconComponent className="h-5 w-5 text-white" />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors truncate">
                                          {dropdownItem.name}
                                        </h4>
                                        {'ageRange' in dropdownItem && (
                                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium shrink-0 ml-2">
                                            {dropdownItem.ageRange}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                                        {dropdownItem.description}
                                      </p>
                                      {'details' in dropdownItem && (
                                        <p className="text-xs text-green-600 mt-1 font-medium">
                                          {dropdownItem.details}
                                        </p>
                                      )}
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-4 pt-3 border-t border-gray-100">
                              <Link
                                href={item.href}
                                className="group w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-center px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
                              >
                                <span>
                                  {item.name === 'Units' ? 'Explore All Programs' : 'Start Your Journey'}
                                </span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/donate"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center space-x-2"
              >
                <Heart className="h-4 w-4" />
                <span>Donate Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {/* Mobile Menu Logo */}
                <div className="flex items-center justify-center space-x-3 pb-4 mb-4 border-b border-gray-100">
                  <div className="h-12 w-12 shrink-0">
                    <img 
                      src="/logo-removebg.png" 
                      alt="24th Asoka Group Logo" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">24th Asoka Group</div>
                    <div className="text-xs text-green-600">Bharat Scouts & Guides</div>
                  </div>
                </div>

                {navigation.map((item) => (
                  <div key={item.name}>
                    {/* Main navigation item */}
                    {item.hasDropdown ? (
                      <button
                        onClick={() => setExpandedMobileSection(
                          expandedMobileSection === item.name ? null : item.name
                        )}
                        className="w-full flex items-center justify-between text-gray-700 hover:text-green-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: expandedMobileSection === item.name ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </motion.div>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-green-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setExpandedMobileSection(null)
                        }}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Expandable dropdown items */}
                    <AnimatePresence>
                      {item.hasDropdown && item.dropdownItems && expandedMobileSection === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-2 mb-3 space-y-1 bg-gray-50 rounded-lg p-2">
                            {/* Main section link */}
                            <Link
                              href={item.href}
                              className="flex items-center text-green-600 hover:text-green-700 hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setExpandedMobileSection(null)
                              }}
                            >
                              View All {item.name}
                            </Link>
                            
                            {/* Divider */}
                            <div className="border-t border-gray-200 my-2"></div>
                            
                            {/* Individual dropdown items */}
                            {item.dropdownItems.map((dropdownItem) => {
                              const IconComponent = dropdownItem.icon
                              return (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 text-gray-600 hover:text-green-600 hover:bg-white px-3 py-2 rounded-md text-sm transition-colors"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    setExpandedMobileSection(null)
                                  }}
                                >
                                  <div className={cn(
                                    "w-8 h-8 rounded-lg bg-linear-to-br flex items-center justify-center shrink-0",
                                    dropdownItem.color
                                  )}>
                                    <IconComponent className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-800 truncate">{dropdownItem.name}</div>
                                    {'ageRange' in dropdownItem && (
                                      <div className="text-xs text-gray-500 truncate">{dropdownItem.ageRange}</div>
                                    )}
                                    {'details' in dropdownItem && (
                                      <div className="text-xs text-gray-500 truncate">{dropdownItem.details}</div>
                                    )}
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {/* Donate button */}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <Link
                    href="/donate"
                    className="bg-green-600 hover:bg-green-700 text-white text-center px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-center space-x-2 shadow-md"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setExpandedMobileSection(null)
                    }}
                  >
                    <Heart className="h-4 w-4" />
                    <span>Donate Now</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}