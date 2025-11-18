'use client'

import React, { useState } from 'react'
import { Modal } from '@/components/common/Modal'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { submitLeadForm } from '@/lib/api'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  page: string
  title?: string
  description?: string
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  page,
  title = "Let's Get Started",
  description = "Fill out the form below and we'll get back to you shortly.",
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await submitLeadForm({ ...formData, page })
      setSuccess(true)
      setTimeout(() => {
        onClose()
        setFormData({ name: '', email: '', phone: '', interest: '' })
        setSuccess(false)
      }, 2500)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      {!success ? (
        <>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Phone Number (Optional)"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              label="What are you interested in?"
              name="interest"
              type="text"
              placeholder="e.g., Phone rental, Data plans, etc."
              value={formData.interest}
              onChange={handleChange}
              required
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button type="submit" fullWidth disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">We'll be in touch shortly.</p>
        </div>
      )}
    </Modal>
  )
}
