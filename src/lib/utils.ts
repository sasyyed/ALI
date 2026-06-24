import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date | string): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const getCurrentFinancialYear = (): string => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()

  if (month >= 3) {
    return `${year}-${year + 1}`
  }
  return `${year - 1}-${year}`
}
