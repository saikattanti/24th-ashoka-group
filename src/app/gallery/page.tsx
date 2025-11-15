"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X, ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PointerHighlight } from '@/components/ui/PointerHighlight'

// Types
interface GalleryItem {
  id: number
  title: string
  category: string
  date: string
  location: string
  participants: string
  description: string
  image: string
  tags: string[]
}

// Gallery categories
const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'camps', name: 'Camps & Adventures' },
  { id: 'service', name: 'Community Service' },
  { id: 'environment', name: 'Environmental Projects' },
  { id: 'training', name: 'Training & Skills' },
  { id: 'awards', name: 'Awards & Recognition' },
  { id: 'heritage', name: 'Heritage & History' }
]

// Gallery data
const galleryItems = [
  // {
  //   id: 1,
  //   title: 'Sandakphu Trek 2023',
  //   category: 'camps',
  //   date: 'October 2023',
  //   location: 'Sandakphu, Darjeeling',
  //   participants: '25 Scouts & Rovers',
  //   description: 'Annual high-altitude trekking expedition to the highest peak in West Bengal.',
  //   image: '/gallery/sandakphu-trek.jpg',
  //   tags: ['Adventure', 'Trekking', 'Mountain']
  // },
  // {
  //   id: 2,
  //   title: 'Beyond Coal Project Implementation',
  //   category: 'service',
  //   date: 'September 2023',
  //   location: 'Palasdiha Village',
  //   participants: '15 Rovers',
  //   description: 'Setting up mobile learning centers and conducting STEM workshops for coalfield children.',
  //   image: '/gallery/beyond-coal.jpg',
  //   tags: ['Education', 'Community Service', 'STEM']
  // },
  // {
  //   id: 3,
  //   title: 'Mangrove Plantation Drive',
  //   category: 'environment',
  //   date: 'August 2023',
  //   location: 'Sundarban Delta',
  //   participants: '30 Cubs, Scouts & Rovers',
  //   description: 'Large-scale mangrove plantation initiative to restore coastal ecosystem.',
  //   image: '/gallery/mangrove-plantation.jpg',
  //   tags: ['Environment', 'Conservation', 'Sundarban']
  // },
  // {
  //   id: 4,
  //   title: 'First Aid Training Workshop',
  //   category: 'training',
  //   date: 'July 2023',
  //   location: '24th Asoka Group HQ',
  //   participants: '40 Scouts',
  //   description: 'Comprehensive first aid and emergency response training for all sections.',
  //   image: '/gallery/first-aid-training.jpg',
  //   tags: ['Training', 'First Aid', 'Emergency Response']
  // },
  // {
  //   id: 5,
  //   title: 'Prime Minister Shield Award 2010',
  //   category: 'awards',
  //   date: 'December 2010',
  //   location: 'New Delhi',
  //   participants: 'Group Leadership',
  //   description: 'Receiving the prestigious Prime Minister Shield Award for excellence in scouting.',
  //   image: '/gallery/pm-shield-award.jpg',
  //   tags: ['Award', 'Recognition', 'Achievement']
  // },
  // {
  //   id: 6,
  //   title: 'Cyclone Yaas Relief Operations',
  //   category: 'service',
  //   date: 'May 2021',
  //   location: 'Coastal Bengal',
  //   participants: '50 Rovers',
  //   description: 'Emergency relief distribution and medical aid during post-cyclone recovery.',
  //   image: '/gallery/yaas-relief.jpg',
  //   tags: ['Disaster Relief', 'Emergency Response', 'Community Support']
  // },
  // {
  //   id: 7,
  //   title: 'Cubs Nature Walk',
  //   category: 'camps',
  //   date: 'March 2023',
  //   location: 'Eco Park, Kolkata',
  //   participants: '20 Cubs',
  //   description: 'Educational nature walk teaching young scouts about local flora and fauna.',
  //   image: '/gallery/cubs-nature-walk.jpg',
  //   tags: ['Nature', 'Education', 'Cubs']
  // },
  // {
  //   id: 8,
  //   title: 'Tree Plantation Campaign',
  //   category: 'environment',
  //   date: 'June 2023',
  //   location: 'Multiple Locations, Kolkata',
  //   participants: '35 Scouts & Rovers',
  //   description: 'City-wide tree plantation drive as part of World Environment Day celebrations.',
  //   image: '/gallery/tree-plantation.jpg',
  //   tags: ['Environment', 'Tree Plantation', 'World Environment Day']
  // },
  // {
  //   id: 9,
  //   title: 'Leadership Training Camp',
  //   category: 'training',
  //   date: 'January 2023',
  //   location: 'Mulkharka Lake, Nepal',
  //   participants: '18 Senior Scouts',
  //   description: 'International leadership development camp focusing on advanced scouting skills.',
  //   image: '/gallery/leadership-camp.jpg',
  //   tags: ['Leadership', 'International', 'Advanced Training']
  // },
  // {
  //   id: 10,
  //   title: 'Blood Donation Drive',
  //   category: 'service',
  //   date: 'February 2023',
  //   location: 'Kolkata Medical College',
  //   participants: '25 Rovers',
  //   description: 'Quarterly blood donation camp organized in partnership with local medical institutions.',
  //   image: '/gallery/blood-donation.jpg',
  //   tags: ['Health', 'Community Service', 'Medical Support']
  // },
  // {
  //   id: 11,
  //   title: 'Group Foundation Day 1936',
  //   category: 'heritage',
  //   date: '1936',
  //   location: 'Dover Terrace, Kolkata',
  //   participants: 'Founding Members',
  //   description: 'Historic photograph from the founding of 24th Asoka Group in 1936.',
  //   image: '/gallery/foundation-1936.jpg',
  //   tags: ['Heritage', 'History', 'Foundation']
  // },
  // {
  //   id: 12,
  //   title: 'Kotha Digital Storytelling',
  //   category: 'service',
  //   date: 'April 2023',
  //   location: 'Remote Tribal School',
  //   participants: '12 Rovers',
  //   description: 'Implementing interactive digital storytelling programs in remote tribal schools.',
  //   image: '/gallery/kotha-storytelling.jpg',
  //   tags: ['Education', 'Digital Innovation', 'Tribal Outreach']
  // },
  {
    id: 25,
    title: 'Adventure Excellence Training',
    category: 'training',
    date: 'November 2023',
    location: 'Mountain Training Base',
    participants: '30 Scouts & Rovers',
    description: 'Advanced adventure training program showcasing excellence in mountaineering and outdoor leadership skills.',
    image: '/gallery/pic1.png',
    tags: ['Adventure', 'Excellence', 'Leadership Training']
  },
  {
    id: 26,
    title: 'Environmental Conservation Day',
    category: 'environment',
    date: 'October 2023',
    location: 'Protected Wildlife Area',
    participants: '40 Cubs, Scouts & Rovers',
    description: 'Major environmental conservation initiative with habitat restoration and wildlife protection activities.',
    image: '/gallery/pic2.png',
    tags: ['Environment', 'Conservation', 'Wildlife Protection']
  },
  {
    id: 27,
    title: 'Skills Development Workshop',
    category: 'training',
    date: 'September 2023',
    location: 'Vocational Training Center',
    participants: '25 Young Scouts',
    description: 'Comprehensive skills development and vocational training workshop for career advancement.',
    image: '/gallery/pic3.png',
    tags: ['Skills', 'Vocational Training', 'Career Development']
  },
  {
    id: 28,
    title: 'Community Health Outreach',
    category: 'service',
    date: 'August 2023',
    location: 'Rural Community Centers',
    participants: '20 Rovers & Leaders',
    description: 'Mobile health clinic and wellness program bringing healthcare services to remote rural areas.',
    image: '/gallery/pic4.png',
    tags: ['Health', 'Community Service', 'Rural Outreach']
  },
  {
    id: 29,
    title: 'Annual Excellence Awards 2023',
    category: 'awards',
    date: 'July 2023',
    location: 'Regional Headquarters',
    participants: 'Outstanding Achievers',
    description: 'Grand celebration recognizing exceptional achievements and contributions in scouting and community service.',
    image: '/gallery/pic5.jpg',
    tags: ['Awards', 'Excellence', 'Recognition', 'Achievement']
  },
  {
    id: 30,
    title: 'Leadership Summit 2023',
    category: 'training',
    date: 'June 2023',
    location: 'Leadership Development Center',
    participants: '35 Senior Scouts & Rovers',
    description: 'Premier leadership development summit focusing on advanced management skills and community leadership.',
    image: '/gallery/pic6.JPG',
    tags: ['Leadership', 'Summit', 'Management', 'Development']
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
      staggerChildren: 0.05
    }
  }
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
    setCurrentIndex(prevIndex)
  }

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
              <PointerHighlight containerClassName="inline-block">
                <span className="text-green-300">Gallery</span>
              </PointerHighlight>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Explore the memories, adventures, and achievements that tell the story 
              of our 85+ year journey in scouting and community service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Statistics */}
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Photos</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Events Documented</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">85+</div>
              <div className="text-gray-600">Years of Memories</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Participants Featured</div>
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
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => {
              // Determine aspect ratio based on image filename
              let aspectRatio = "aspect-[4/3]"; // default
              if (item.image.includes('pic1.png')) {
                aspectRatio = "aspect-[727/525]"; // ~1.38:1
              } else if (item.image.includes('pic2.png')) {
                aspectRatio = "aspect-[919/612]"; // ~1.5:1
              } else if (item.image.includes('pic3.png') || item.image.includes('pic4.png') || item.image.includes('pic6.JPG')) {
                aspectRatio = "aspect-[3/2]"; // 6000x4000 = 3:2
              } else if (item.image.includes('pic5.jpg')) {
                aspectRatio = "aspect-[16/9]"; // 1280x720 = 16:9
              }
              
              return (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(item, index)}
                >
                  <div className={`relative overflow-hidden rounded-xl ${aspectRatio}`}>
                    {/* Actual Image */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute inset-0 p-4 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-heading font-bold text-primary-700">
                  {selectedImage.title}
                </h2>
                <button
                  onClick={closeLightbox}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-video bg-gray-100">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-primary-600" />
                    <span>{selectedImage.participants}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heritage Section */}
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
              Our Heritage in Pictures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding in 1936 to our modern digital initiatives, 
              explore the visual journey of the 24th Asoka Group.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold text-primary-700 mb-4">
                Early Years (1936-1960)
              </h3>
              <p className="text-gray-600 mb-4">
                Founding moments, early camps, and the establishment of our core traditions 
                that continue to guide us today.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveCategory('heritage')}
              >
                View Heritage Photos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold text-primary-700 mb-4">
                Growth & Recognition (1960-2000)
              </h3>
              <p className="text-gray-600 mb-4">
                Expansion of programs, major achievements, and recognition at state 
                and national levels for our contributions to scouting.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveCategory('awards')}
              >
                View Award Moments
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold text-primary-700 mb-4">
                Modern Era (2000-Present)
              </h3>
              <p className="text-gray-600 mb-4">
                Digital innovation, environmental leadership, and community-centered 
                programs that define our current mission and vision.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveCategory('service')}
              >
                View Recent Projects
              </Button>
            </motion.div>
          </div>
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
              Be Part of Our Story
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join us in creating new memories, adventures, and positive impact. 
              Your journey with the 24th Asoka Group starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                Share Your Photos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}