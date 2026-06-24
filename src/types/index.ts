export interface User {
  email: string
  name?: string
  role?: string
}

export interface Product {
  id: string
  name: string
  modelNumber: string
  capacity: string
  specifications: string
  priceWithGST: number
  imageUrl?: string
  createdAt: Date
}

export interface Customer {
  id: string
  name: string
  fatherName: string
  address: string
  aadhaarNumber: string
  mobileNumber: string
  createdAt: Date
}

export interface Quotation {
  id: string
  quotationNumber: string
  customerId: string
  productId: string
  quantity: number
  quotationDate: Date
  createdAt: Date
}

export interface Application {
  id: string
  applicationNumber: string
  quotationId: string
  schemeNam: string
  status: ApplicationStatus
  remarks?: string
  createdAt: Date
}

export type ApplicationStatus =
  | 'Quotation Generated'
  | 'Applied'
  | 'Under Verification'
  | 'Approved'
  | 'Rejected'
  | 'Subsidy Released'
  | 'Delivered'

export interface Delivery {
  id: string
  invoiceNumber: string
  applicationId: string
  deliveryDate: Date
  subsidyAmount: number
  farmerContributionAmount: number
  paymentStatus: PaymentStatus
  deliveryStatus: DeliveryStatus
  createdAt: Date
}

export type PaymentStatus = 'Pending' | 'Partial' | 'Completed'
export type DeliveryStatus = 'Pending' | 'Scheduled' | 'Delivered'
