'use client'

import { Truck } from 'lucide-react'

export default function ApplicationsPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gaib-dark flex items-center gap-3">
          <Truck className="w-8 h-8" />
          Applications
        </h1>
        <p className="text-gray-600 mt-2">Kisan Portal Applications Tracking</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8 text-center">
        <Truck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Coming Soon - Phase 9
        </h2>
        <p className="text-gray-600">
          Application tracking features will be available in Phase 9
        </p>
      </div>
    </div>
  )
}
