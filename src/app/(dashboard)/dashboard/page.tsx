'use client'

import { LayoutGrid, Users, Package, FileText, TrendingUp, AlertCircle } from 'lucide-react'

interface StatCard {
  title: string
  value: string
  icon: any
  color: string
}

const stats: StatCard[] = [
  {
    title: 'Total Customers',
    value: '0',
    icon: Users,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Total Products',
    value: '0',
    icon: Package,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Total Quotations',
    value: '0',
    icon: FileText,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Total Applications',
    value: '0',
    icon: TrendingUp,
    color: 'bg-purple-50 text-purple-600',
  },
]

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gaib-dark flex items-center gap-3">
          <LayoutGrid className="w-8 h-8" />
          Dashboard
        </h1>
        <p className="text-gray-600 mt-2">Welcome to GAIB Agro Quotation System</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-gaib-dark mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Welcome Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Card */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gaib-dark mb-4">Getting Started</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Welcome to GAIB Agro Equipment Quotation System. This system helps you
              manage quotations and track Kisan Portal applications.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-gaib-secondary font-bold">1.</span>
                <div>
                  <p className="font-semibold">Add Products</p>
                  <p className="text-sm text-gray-600">
                    Create your product catalog with details and pricing
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-gaib-secondary font-bold">2.</span>
                <div>
                  <p className="font-semibold">Manage Customers</p>
                  <p className="text-sm text-gray-600">
                    Add farmer details with Aadhaar information
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-gaib-secondary font-bold">3.</span>
                <div>
                  <p className="font-semibold">Generate Quotations</p>
                  <p className="text-sm text-gray-600">
                    Create and manage quotations in PDF format
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-gaib-secondary font-bold">4.</span>
                <div>
                  <p className="font-semibold">Track Applications</p>
                  <p className="text-sm text-gray-600">
                    Monitor Kisan Portal applications and subsidy status
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gaib-light rounded-lg p-6 border-l-4 border-gaib-primary">
          <div className="flex gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-gaib-primary flex-shrink-0" />
            <h3 className="font-bold text-gaib-dark">System Information</h3>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gaib-dark">Company</p>
              <p>GAIB AGRO EQUIPMENT PVT. LTD.</p>
            </div>
            <div>
              <p className="font-semibold text-gaib-dark">Version</p>
              <p>1.0.0 (Phase 1)</p>
            </div>
            <div>
              <p className="font-semibold text-gaib-dark">Environment</p>
              <p>Development</p>
            </div>
            <div>
              <p className="font-semibold text-gaib-dark">Database</p>
              <p>Supabase PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
