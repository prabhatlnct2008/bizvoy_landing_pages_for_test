'use client'

import React from 'react'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'
import { ContactForm } from '@/components/forms/ContactForm'
import { ExitIntentModal } from '@/components/modals/ExitIntentModal'
import { LeadCaptureModal } from '@/components/modals/LeadCaptureModal'
import { useModal } from '@/hooks/useModal'
import { useExitIntent } from '@/hooks/useExitIntent'
import Link from 'next/link'

export default function ConnectivityPage() {
  const leadModal = useModal()
  const exitModal = useModal()

  useExitIntent({
    enabled: true,
    onExitIntent: exitModal.open,
  })

  const faqItems = [
    {
      question: "How does the phone rental service work?",
      answer: "Simply select your package, choose your rental duration, and we'll deliver the phone and SIM card ready to use. Return it when you're done - it's that simple!"
    },
    {
      question: "What's included in the data plans?",
      answer: "Our data plans include high-speed internet, unlimited texting, and varying amounts of call minutes depending on your package. All plans work internationally."
    },
    {
      question: "Can I extend my rental period?",
      answer: "Yes! You can extend your rental period at any time. Just contact us before your rental ends and we'll arrange the extension."
    },
    {
      question: "Is there a deposit required?",
      answer: "A refundable security deposit is required for phone rentals. The amount varies based on the device. The deposit is fully refunded upon return of the device in good condition."
    },
    {
      question: "What countries do you service?",
      answer: "We provide services across Europe, North America, and Asia. Contact us for specific country availability."
    }
  ]

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary-500">Bizvoy</div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-primary-500 font-medium">Phone & SIMs</Link>
              <Link href="/terroir-insights" className="text-gray-700 hover:text-primary-500 font-medium">Terroir Insights</Link>
              <a href="#pricing" className="text-gray-700 hover:text-primary-500 font-medium">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-primary-500 font-medium">FAQ</a>
              <Button onClick={leadModal.open} size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Connectivity & Data
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Rent a Phone & SIMs
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stay connected wherever you go with our flexible phone and SIM rental services.
                Professional-grade communication solutions for business travelers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={leadModal.open} size="lg">
                  Get Started
                </Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Premium Devices</h3>
                      <p className="text-sm text-gray-600">Latest smartphones available</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Global Coverage</h3>
                      <p className="text-sm text-gray-600">Works in 150+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Communication Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Early Communication with Growers is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential for successful business operations and seamless connectivity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communication</h3>
              <p className="text-gray-600">
                Stay in constant touch with your team and partners. Real-time updates ensure everyone is aligned.
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time</h3>
              <p className="text-gray-600">
                Instant notifications and updates. Never miss important information when it matters most.
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                Premium network quality ensures crystal-clear calls and fast data speeds wherever you go.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Is This For You Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Is this for you?</h2>
            <p className="text-xl text-gray-600">Perfect for various professionals and scenarios</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Business Travelers', 'International Teams', 'Event Organizers', 'Temporary Projects'].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why I'd advise a day pass</h2>
            <p className="text-xl text-gray-600">Flexible pricing for every need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-500">$15</span>
                  <span className="text-gray-600">/day</span>
                </div>
                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">1GB Data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">100 minutes calls</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Unlimited SMS</span>
                  </li>
                </ul>
                <Button variant="secondary" fullWidth onClick={leadModal.open}>
                  Select Plan
                </Button>
              </div>
            </Card>

            <Card className="relative border-2 border-primary-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-500">$25</span>
                  <span className="text-gray-600">/day</span>
                </div>
                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">5GB Data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">500 minutes calls</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Unlimited SMS</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Premium device</span>
                  </li>
                </ul>
                <Button fullWidth onClick={leadModal.open}>
                  Select Plan
                </Button>
              </div>
            </Card>

            <Card className="relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-500">$45</span>
                  <span className="text-gray-600">/day</span>
                </div>
                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Unlimited Data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Unlimited calls</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Unlimited SMS</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Premium device</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
                <Button variant="secondary" fullWidth onClick={leadModal.open}>
                  Select Plan
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-primary-500">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">New members — welcome!</h2>
              <p className="text-xl text-primary-100">
                Have questions? Get in touch with our team
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <ContactForm page="connectivity-data" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <LeadCaptureModal
        isOpen={leadModal.isOpen}
        onClose={leadModal.close}
        page="connectivity-data"
        title="Start Your Connectivity Journey"
        description="Tell us about your needs and we'll create a custom solution for you."
      />

      <ExitIntentModal
        isOpen={exitModal.isOpen}
        onClose={exitModal.close}
        page="connectivity-data"
      />
    </>
  )
}
