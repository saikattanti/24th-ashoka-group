import Link from 'next/link'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Compass } from 'lucide-react'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Units', href: '/units' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const units = [
  { name: 'Cubs (6-11 years)', href: '/units#cubs' },
  { name: 'Scouts (11-17 years)', href: '/units#scouts' },
  { name: 'Rovers (17-25 years)', href: '/units#rovers' },
]

const projects = [
  { name: 'Environment & Sustainability', href: '/projects#environment' },
  { name: 'Community Service', href: '/projects#community' },
  { name: 'Education & STEM', href: '/projects#education' },
  { name: 'Disaster Relief', href: '/projects#disaster' },
]

export function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-16 w-16 bg-white rounded-lg p-1 shrink-0">
                <img 
                  src="/logo-removebg.png" 
                  alt="24th Asoka Group Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold">24th Asoka Group</h3>
                <p className="text-sm text-primary-200">Bharat Scouts & Guides</p>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              Serving community, protecting nature, and building character since 1936. 
              We are committed to youth development through adventure, service, and environmental stewardship.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/24thAsokaGroupBSG" target="_blank" rel="noopener noreferrer" 
                 className="text-primary-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/24th_asoka_group_bsg" target="_blank" rel="noopener noreferrer"
                 className="text-primary-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} 
                        className="text-primary-200 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Units */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Units</h3>
            <ul className="space-y-2">
              {units.map((unit) => (
                <li key={unit.name}>
                  <Link href={unit.href} 
                        className="text-primary-200 hover:text-white transition-colors text-sm">
                    {unit.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-300 mt-1 shrink-0" />
                <div className="text-primary-200 text-sm">
                  <p>7A Dover Terrace</p>
                  <p>South Calcutta, Kolkata</p>
                  <p>West Bengal, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-300" />
                <span className="text-primary-200 text-sm">+91 9830458324</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-300" />
                <span className="text-primary-200 text-sm">24asokagroup@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-200 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 24th Asoka Group BS&G. All rights reserved.</p>
              <p className="mt-1">Affiliated with Bharat Scouts & Guides | WOSM Member</p>
            </div>
            <div className="flex items-center space-x-4 text-primary-200 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}