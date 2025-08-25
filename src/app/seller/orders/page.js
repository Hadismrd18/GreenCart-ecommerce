import React from "react";
import { assets, dummyOrders } from "@/assets/assets";
import { RxCross2 } from "react-icons/rx";
function page() {
  return ( 
    <div className="p-6 w-full xl:w-7/8">
      <h2 className="text-xl font-semibold mb-4">Orders List</h2>
      <div className="space-y-4">
        {dummyOrders.map((order, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 md:flex-row md:items-center justify-between border rounded-lg p-4 bg-white shadow-sm"
          >
            {/* Left: Product placeholder & details */}
            <div className="flex flex-col lg:flex-row  w-3/5 items-start gap-3 flex-1">
              {/* Gray placeholder instead of image */}
              <img src={assets.box_icon.src} />

              <div className="flex flex-col lg:flex-row items-start justify-between w-full">
                {/* Items */}
                <div className="font-semibold w-2/5 text-gray-800">
                  {order.items.map((item, i) => (
                    <div
                      key={i}
                      className="text-gray-700 flex items-center gap-1"
                    >
                      {item.product.name}
                      <div className="mr-10 text-[#4fbf8b] flex items-center gap-0.5" >
                        <RxCross2 />
                        {item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Info */}
                <div className="flex flex-col w-3/5 items-start">
                  <div className="mt-1 text-gray-700 font-medium">
                    {order.userId}
                  </div>
                  <div className="text-sm text-gray-500">
                    {order.address.street}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Order Info */}
            <div className="flex w-2/5 items-start justify-between mt-4 md:mt-0 text-right min-w-[180px]">
              <div className="text-lg font-semibold text-gray-800">
                ${order.amount}
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-600">
                  Method: {order.paymentType}
                </div>
                <div className="text-sm text-gray-600">
                  Date: {order.createdAt}
                </div>
                <div className="text-sm text-gray-600">
                  Payment: {order.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
