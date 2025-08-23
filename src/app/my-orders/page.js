import OrderComponent from "@/components/orders/OrderComponent";

export default function page() {
  return (
    <>
      <div className="mt-20 min-h-screen bg-white p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex flex-col items-start ">
            <h2 className="text-xl font-semibold text-gray-800 inline">
              MY ORDERS
            </h2>
            <div
              className="inline align-middle ml-3 w-12 h-0.5"
              style={{ backgroundColor: "#4fbf8b" }}
            />
          </div>

          {/* Order Card */}
          <OrderComponent />

          {/* Add spacing for multiple cards demonstration */}
          <div className="h-8" />
        </div>
      </div>
    </>
  );
}
