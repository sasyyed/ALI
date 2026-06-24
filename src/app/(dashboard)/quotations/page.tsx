'use client'

import { FileText } from 'lucide-react'

export default function QuotationsPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gaib-dark flex items-center gap-3">
          <FileText className="w-8 h-8" />
          Quotations
        </h1>
        <p className="text-gray-600 mt-2">Quotation Management</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8 text-center">
        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Coming Soon - Phase 6 & 7
        </h2>
        <p className="text-gray-600">
          Quotation features will be available in Phase 6 & 7
        </p>
      </div>
    </div>
  )
}
