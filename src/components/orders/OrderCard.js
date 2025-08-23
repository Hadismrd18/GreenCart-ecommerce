import React from 'react'

function OrderCard() {
  return (
          <div className="border-t border-b border-gray-100 py-6">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
          {/* Image placeholder */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <div className="w-20 h-20 bg-gray-200 rounded p-2 flex items-center justify-center">
              {/* small inner gray square to mimic product pic */}
              <div className="w-12 h-12 bg-gray-300 rounded" />
            </div>
          </div>

          {/* Product details (left) */}
          <div className="flex-1">
            <h3 className="text-gray-800 font-medium text-lg">Carrot 500g</h3>
            <p className="text-sm text-gray-400 mt-1">Category: Vegetables</p>
          </div>

          {/* Middle column: quantity/status/date */}
          <div className="mt-4 md:mt-0 md:w-1/3 text-sm text-gray-600">
            <div className="mb-2">
              <span className="text-gray-400">Quantity:</span>{" "}
              <span className="text-gray-700">2</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-400">Status:</span>{" "}
              <span className="text-gray-700">Order Placed</span>
            </div>
            <div>
              <span className="text-gray-400">Date:</span>{" "}
              <span className="text-gray-700">8/22/2025</span>
            </div>
          </div>

          {/* Right column: Amount */}
          <div className="mt-4 md:mt-0 md:w-40 text-right">
            <p className="text-sm text-gray-400">Amount:</p>
            <p className="text-lg font-semibold" style={{ color: "#4fbf8b" }}>
              $88
            </p>
          </div>
        </div>
      </div>
  )
}

export default OrderCard