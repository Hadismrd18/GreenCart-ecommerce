import React from "react";
import OrderCard from "./OrderCard";

function OrderComponent() {
  return (
    <div className="w-3/4 bg-white border-2 border-gray-200 rounded-lg p-6">
      {/* Top row: Order id / Payment / Total */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500 mb-4">
        <div className="mb-3 md:mb-0">
          <span className="text-gray-400">OrderId :</span>{" "}
          <span className="text-gray-700 break-all">
            68a82ab4b64d477b28779dea
          </span>
        </div>
        <div className="mb-3 md:mb-0">
          <span className="text-gray-400">Payment :</span>{" "}
          <span className="text-gray-700">COD</span>
        </div>
        <div>
          <span className="text-gray-400">Total Amount :</span>{" "}
          <span className="text-gray-700">$89</span>
        </div>
      </div>

      <OrderCard />
    </div>
  );
}

export default OrderComponent;
