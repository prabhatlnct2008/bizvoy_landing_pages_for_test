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

export default function TerroirInsightsPage() {
  const leadModal = useModal()
  const exitModal = useModal()

  useExitIntent({
    enabled: true,
    onExitIntent: exitModal.open,
  })

  const faqItems = [
    {
      question: "What is terroir and why is it important?",
      answer: "Terroir refers to the unique environmental factors that affect a crop's characteristics. Understanding terroir is crucial for producing quality wine and predicting harvest outcomes."
    },
    {
      question: "How long is the insights program?",
      answer: "Our standard program is 3 days, providing comprehensive coverage of your vineyard's terroir characteristics, soil analysis, and growth patterns."
    },
    {
      question: "What's included in the 3-day package?",
      answer: "The package includes on-site visits, soil sampling, climate analysis, digital mapping, consultation sessions, and a detailed report with actionable insights."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer optional ongoing monitoring and consultation services to help you implement our recommendations throughout the season."
    },
    {
      question: "What regions do you cover?",
      answer: "We primarily serve wine regions across Europe and North America, with expertise in diverse climates and grape varieties."
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
      <section className="relative section-padding bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Terroir & Insights: 3 Days
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your Vineyard's True Potential
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Professional terroir analysis and insights to elevate your wine production.
              Understand your land like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={leadModal.open} size="lg">
                Get Started
              </Button>
              <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Recommend This Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why we recommend this
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional insights that transform your understanding of terroir
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Comprehensive soil and climate analysis using the latest technology and methodologies.
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Consultation</h3>
              <p className="text-gray-600">
                Work directly with experienced agronomists and viticulture specialists.
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Actionable Reports</h3>
              <p className="text-gray-600">
                Detailed documentation with clear recommendations you can implement immediately.
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
            <p className="text-xl text-gray-600">Ideal for wine professionals at every level</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Vineyard Owners', 'Wine Producers', 'Agronomists', 'Estate Managers'].map((item, index) => (
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

      {/* Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Digital + Meet — Your Journey
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive 3-day process
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { day: 'Day 1', title: 'Initial Assessment', desc: 'On-site visit and comprehensive vineyard mapping. Soil sampling from key locations.' },
              { day: 'Day 2', title: 'Deep Analysis', desc: 'Laboratory analysis of samples. Climate and microclimate evaluation. Historical data review.' },
              { day: 'Day 3', title: 'Insights & Strategy', desc: 'Results presentation and consultation. Customized recommendations. Action plan development.' },
            ].map((step, index) => (
              <Card key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-primary-500 font-semibold mb-1">{step.day}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Soil Analysis</h3>
                  <p className="text-gray-600">
                    Comprehensive testing of pH levels, nutrients, drainage, and composition.
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Mapping</h3>
                  <p className="text-gray-600">
                    Detailed microclimate analysis including temperature, rainfall, and sun exposure.
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Tracking</h3>
                  <p className="text-gray-600">
                    Historical growth pattern analysis and future projections.
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Reports</h3>
                  <p className="text-gray-600">
                    Comprehensive documentation with maps, data, and actionable recommendations.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment in Excellence</h2>
            <p className="text-xl text-gray-600">Professional terroir analysis packages</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-500">$2,500</span>
                  <span className="text-gray-600">/visit</span>
                </div>
                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">1-day assessment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Basic soil analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Summary report</span>
                  </li>
                </ul>
                <Button variant="secondary" fullWidth onClick={leadModal.open}>
                  Select Package
                </Button>
              </div>
            </Card>

            <Card className="relative border-2 border-primary-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-500">$5,500</span>
                  <span className="text-gray-600">/visit</span>
                </div>
                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">3-day comprehensive</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Full terroir analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Detailed report + maps</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Expert consultation</span>
                  </li>
                </ul>
                <Button fullWidth onClick={leadModal.open}>
                  Select Package
                </Button>
              </div>
            </Card>

            <Card className="relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-500">$9,500</span>
                  <span className="text-gray-600">/visit</span>
                </div>
                <ul className="space-y-3 mb-6 text-left">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">5-day deep dive</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Complete analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Premium reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Multiple consultations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">6-month follow-up</span>
                  </li>
                </ul>
                <Button variant="secondary" fullWidth onClick={leadModal.open}>
                  Select Package
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Commitment up to you</h2>
            <p className="text-xl text-gray-300 mb-8">
              We believe in flexibility. Choose the package that fits your needs today,
              and upgrade anytime as your requirements grow. No long-term contracts required.
            </p>
            <Button size="lg" onClick={leadModal.open}>
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-primary-500">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Have questions? Let's talk</h2>
              <p className="text-xl text-primary-100">
                Get in touch with our terroir specialists
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <ContactForm page="terroir-insights" />
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
        page="terroir-insights"
        title="Begin Your Terroir Journey"
        description="Share your vineyard details and we'll customize a package for you."
      />

      <ExitIntentModal
        isOpen={exitModal.isOpen}
        onClose={exitModal.close}
        page="terroir-insights"
      />
    </>
  )
}
