import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  page: string
}

export interface LeadFormData {
  name: string
  email: string
  phone?: string
  interest: string
  page: string
}

export interface NewsletterFormData {
  email: string
  page: string
}

export const submitContactForm = async (data: ContactFormData) => {
  const response = await api.post('/submit-contact', data)
  return response.data
}

export const submitLeadForm = async (data: LeadFormData) => {
  const response = await api.post('/submit-lead', data)
  return response.data
}

export const subscribeNewsletter = async (data: NewsletterFormData) => {
  const response = await api.post('/subscribe', data)
  return response.data
}

export const checkHealth = async () => {
  const response = await api.get('/health')
  return response.data
}
