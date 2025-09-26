export const formatEmail = (email) => {
  return email.toLowerCase().trim()
}

export const validateBusinessEmail = (email) => {
  const businessDomains = ['gmail.com', 'yahoo.com', 'hotmail.com']
  const domain = email.split('@')[1]
  return !businessDomains.includes(domain)
}

export const generateLeadId = () => {
  return 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}

export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  return match ? (\) \-\ : phone
}
