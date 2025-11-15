"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TreePine, Users, Heart, BookOpen, Filter, MapPin, Calendar, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PointerHighlight } from '@/components/ui/PointerHighlight'
import Link from 'next/link'

// Project categories
const categories = [
  { id: 'all', name: 'All Projects', icon: Filter },
  { id: 'environment', name: 'Environment', icon: TreePine },
  { id: 'community', name: 'Community Service', icon: Users },
  { id: 'disaster', name: 'Disaster Relief', icon: Heart },
  { id: 'education', name: 'Education', icon: BookOpen }
]

// Projects data
const projects = [
  // {
  //   id: 1,
  //   title: 'Beyond Coal Project',
  //   category: 'education',
  //   status: 'ongoing',
  //   location: 'Palasdiha & Bon Sarakdihi Villages',
  //   startDate: '2020',
  //   description: 'Bringing light and education to children in coalfield villages through STEM programs, sustainable development, and alternate skill training.',
  //   impact: 'Reached 200+ children in displaced coalfield communities',
  //   image: '/projects/beyond-coal.jpg',
  //   tags: ['STEM Education', 'Sustainable Livelihoods', 'Rural Development'],
  //   highlights: [
  //     'Established mobile learning centers',
  //     'Trained 50+ young mentors',
  //     'Created sustainable livelihood programs',
  //     'Provided educational technology access'
  //   ]
  // },
  // {
  //   id: 2,
  //   title: 'Sundarban Conservation',
  //   category: 'environment',
  //   status: 'ongoing',
  //   location: 'Sundarban Delta, West Bengal',
  //   startDate: '2019',
  //   description: 'Comprehensive mangrove plantation and pond restoration efforts to protect the world\'s largest delta ecosystem.',
  //   impact: 'Planted 10,000+ mangroves, restored 15 ponds',
  //   image: '/projects/sundarban.jpg',
  //   tags: ['Mangrove Plantation', 'Ecosystem Restoration', 'Climate Action'],
  //   highlights: [
  //     'Community-led conservation initiatives',
  //     'Sustainable fishing practices training',
  //     'Coastal erosion prevention',
  //     'Biodiversity monitoring programs'
  //   ]
  // },
  // {
  //   id: 3,
  //   title: 'Kotha Initiative',
  //   category: 'education',
  //   status: 'ongoing',
  //   location: 'Remote & Tribal Schools, Bengal',
  //   startDate: '2018',
  //   description: 'Interactive digital storytelling program bringing quality education to remote and tribal schools through innovative technology.',
  //   impact: 'Benefited 500+ students in 25 remote schools',
  //   image: '/projects/kotha.jpg',
  //   tags: ['Digital Storytelling', 'Remote Learning', 'Cultural Preservation'],
  //   highlights: [
  //     'Developed multilingual content',
  //     'Trained local teachers',
  //     'Created interactive learning modules',
  //     'Preserved local folklore and culture'
  //   ]
  // },
  // {
  //   id: 4,
  //   title: 'Cyclone Yaas Relief',
  //   category: 'disaster',
  //   status: 'completed',
  //   location: 'Coastal Bengal',
  //   startDate: '2021',
  //   description: 'Emergency relief and rehabilitation efforts following Cyclone Yaas, providing medical aid, food, and temporary shelter.',
  //   impact: 'Assisted 1,000+ families affected by the cyclone',
  //   image: '/projects/yaas-relief.jpg',
  //   tags: ['Emergency Response', 'Medical Aid', 'Community Support'],
  //   highlights: [
  //     'Immediate medical assistance',
  //     'Food and water distribution',
  //     'Temporary shelter arrangements',
  //     'Long-term rehabilitation support'
  //   ]
  // },
  // {
  //   id: 5,
  //   title: 'My School My Favourite Place',
  //   category: 'education',
  //   status: 'ongoing',
  //   location: 'Rural Bengal',
  //   startDate: '2017',
  //   description: 'Campaign to revive school attendance in rural and tribal areas through infrastructure improvement and community engagement.',
  //   impact: 'Improved attendance in 30+ schools',
  //   image: '/projects/school-campaign.jpg',
  //   tags: ['Education Access', 'Infrastructure', 'Community Engagement'],
  //   highlights: [
  //     'School infrastructure improvements',
  //     'Teacher training programs',
  //     'Parent-community engagement',
  //     'Learning material distribution'
  //   ]
  // },
  // {
  //   id: 6,
  //   title: 'Gulab Gang Women Empowerment',
  //   category: 'community',
  //   status: 'ongoing',
  //   location: 'Kolkata & Surrounding Areas',
  //   startDate: '2019',
  //   description: 'Women-led Rover unit empowering female rovers in field leadership and community development initiatives.',
  //   impact: 'Trained 100+ female leaders',
  //   image: '/projects/gulab-gang.jpg',
  //   tags: ['Women Empowerment', 'Leadership Training', 'Community Development'],
  //   highlights: [
  //     'Female leadership development',
  //     'Skill building workshops',
  //     'Community outreach programs',
  //     'Mentorship networks'
  //   ]
  // },
  // {
  //   id: 7,
  //   title: 'Plastic Cleanup Drive',
  //   category: 'environment',
  //   status: 'ongoing',
  //   location: 'Kolkata Metropolitan Area',
  //   startDate: '2016',
  //   description: 'Regular plastic waste collection and environmental awareness campaigns across urban and suburban areas.',
  //   impact: 'Collected 5+ tons of plastic waste annually',
  //   image: '/projects/plastic-cleanup.jpg',
  //   tags: ['Waste Management', 'Environmental Awareness', 'Urban Cleanup'],
  //   highlights: [
  //     'Monthly cleanup drives',
  //     'Waste segregation training',
  //     'Recycling partnerships',
  //     'Community awareness campaigns'
  //   ]
  // },
  // {
  //   id: 8,
  //   title: 'Blood Donation Camps',
  //   category: 'community',
  //   status: 'ongoing',
  //   location: 'Kolkata & Districts',
  //   startDate: '2010',
  //   description: 'Regular blood donation camps and health awareness programs in partnership with local medical institutions.',
  //   impact: 'Collected 2,000+ units of blood',
  //   image: '/projects/blood-donation.jpg',
  //   tags: ['Health Awareness', 'Community Service', 'Medical Support'],
  //   highlights: [
  //     'Quarterly blood donation drives',
  //     'Health screening programs',
  //     'Medical awareness campaigns',
  //     'Emergency blood support'
  //   ]
  // },
  {
    id: 10,
    title: 'Adventure Excellence Program',
    category: 'education',
    status: 'ongoing',
    location: 'Outdoor Training Centers',
    startDate: '2023',
    description: 'Comprehensive adventure training and leadership development through challenging outdoor activities.',
    impact: 'Trained 150+ Scouts in advanced adventure skills',
    image: '/gallery/pic1.png',
    tags: ['Adventure Training', 'Leadership', 'Outdoor Skills'],
    highlights: [
      'Rock climbing and mountaineering',
      'Wilderness survival training',
      'Team leadership exercises',
      'Risk management protocols'
    ]
  },
  {
    id: 11,
    title: 'Habitat Conservation Initiative',
    category: 'environment',
    status: 'ongoing',
    location: 'Protected Areas, Bengal',
    startDate: '2023',
    description: 'Large-scale environmental conservation and wildlife habitat protection programs.',
    impact: 'Protected 500+ hectares of natural habitat',
    image: '/gallery/pic2.png',
    tags: ['Conservation', 'Wildlife Protection', 'Habitat Restoration'],
    highlights: [
      'Wildlife corridor restoration',
      'Community conservation programs',
      'Biodiversity monitoring',
      'Sustainable tourism development'
    ]
  },
  {
    id: 12,
    title: 'Skills Development Hub',
    category: 'education',
    status: 'completed',
    location: 'Training Centers',
    startDate: '2023',
    description: 'Comprehensive vocational training and skill development for sustainable livelihoods.',
    impact: 'Skilled 200+ youth in various trades',
    image: '/gallery/pic3.png',
    tags: ['Skills Development', 'Vocational Training', 'Employment'],
    highlights: [
      'Technical certification programs',
      'Entrepreneurship training',
      'Job placement assistance',
      'Industry partnerships'
    ]
  },
  {
    id: 13,
    title: 'Community Wellness Program',
    category: 'community',
    status: 'ongoing',
    location: 'Rural Communities',
    startDate: '2023',
    description: 'Comprehensive healthcare and wellness initiatives for underserved rural populations.',
    impact: 'Provided healthcare to 1000+ families',
    image: '/gallery/pic4.png',
    tags: ['Healthcare', 'Rural Development', 'Wellness'],
    highlights: [
      'Mobile medical units',
      'Preventive healthcare programs',
      'Health education campaigns',
      'Community health workers training'
    ]
  },
  {
    id: 14,
    title: 'Excellence Recognition Awards',
    category: 'community',
    status: 'ongoing',
    location: 'Regional Centers',
    startDate: '2023',
    description: 'Annual recognition and celebration of outstanding achievements in scouting and service.',
    impact: 'Recognized 100+ outstanding performers',
    image: '/gallery/pic5.jpg',
    tags: ['Recognition', 'Excellence', 'Achievement Awards'],
    highlights: [
      'Annual excellence ceremonies',
      'Leadership awards',
      'Scholarship programs',
      'Mentorship opportunities'
    ]
  },
  {
    id: 15,
    title: 'Future Leaders Program',
    category: 'education',
    status: 'ongoing',
    location: 'Multiple Training Centers',
    startDate: '2023',
    description: 'Comprehensive leadership development and capacity building for emerging young leaders.',
    impact: 'Developed 250+ future leaders',
    image: '/gallery/pic6.JPG',
    tags: ['Leadership Development', 'Capacity Building', 'Youth Empowerment'],
    highlights: [
      'Leadership workshops',
      'Public speaking training',
      'Project management skills',
      'Community engagement programs'
    ]
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

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

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
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our <PointerHighlight containerClassName="inline-block">
                <span className="text-green-300">Projects</span>
              </PointerHighlight>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Discover our ongoing initiatives that are making a real difference in communities, 
              environment, and lives across Bengal and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">10,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Communities Served</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">85+</div>
              <div className="text-gray-600">Years of Service</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-sage-50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="bg-white border border-sage-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-bold drop-shadow-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'ongoing' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                    <span className="text-sm text-gray-500">{project.startDate}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <div className="bg-sage-50 p-3 rounded-lg mb-4">
                    <div className="text-sm font-medium text-primary-700 mb-1">Impact</div>
                    <div className="text-sm text-gray-600">{project.impact}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-primary-600 border-primary-600 hover:bg-primary-600 hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
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
              Project Spotlight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a deeper look at one of our flagship initiatives that exemplifies our commitment to sustainable development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-full relative overflow-hidden">
                <img 
                  src="/projects/beyond-coal.jpg" 
                  alt="Beyond Coal Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <BookOpen className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Beyond Coal Project</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4">
                  Lighting Futures in Coalfield Villages
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our flagship education initiative brings STEM learning, sustainable livelihood training, 
                  and hope to children in displaced coalfield communities. Through innovative programs, 
                  we're creating pathways out of poverty and environmental degradation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-2">Key Achievements</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 200+ children enrolled</li>
                      <li>• 50+ young mentors trained</li>
                      <li>• 10 mobile learning centers</li>
                      <li>• 15 sustainable livelihood programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-2">Focus Areas</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• STEM Education</li>
                      <li>• Digital Literacy</li>
                      <li>• Skill Development</li>
                      <li>• Environmental Awareness</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="bg-primary-600 hover:bg-primary-700">
                  Support This Project
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
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
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project follows our proven methodology that ensures sustainable impact and community ownership.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-700 mb-3">Community Assessment</h3>
              <p className="text-gray-600 text-sm">
                We begin by understanding local needs, resources, and cultural context through extensive community engagement.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-700 mb-3">Program Design</h3>
              <p className="text-gray-600 text-sm">
                Collaborative design process with stakeholders to create culturally appropriate and sustainable solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-700 mb-3">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Youth-led implementation with strong mentorship, regular monitoring, and adaptive management approaches.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-700 mb-3">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Capacity building and knowledge transfer to ensure long-term community ownership and continued impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Whether through volunteering, donations, or partnerships, you can help us continue 
              creating positive change in communities across Bengal and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-involved">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Get Involved
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}