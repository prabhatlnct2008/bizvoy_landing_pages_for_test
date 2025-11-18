'use client'

import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bizvoy</h3>
            <p className="text-gray-400 text-sm">
              Professional connectivity and terroir insights for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-primary-500 transition-colors">Phone & SIM Rental</Link></li>
              <li><Link href="/terroir-insights" className="hover:text-primary-500 transition-colors">Terroir Insights</Link></li>
              <li><Link href="/#pricing" className="hover:text-primary-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-primary-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bizvoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
