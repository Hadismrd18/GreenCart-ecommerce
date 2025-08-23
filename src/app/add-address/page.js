import { assets } from "@/assets/assets";

export default function AddShipping() {
  return (
    <>
      <div>
        <h1>Add Shipping Address</h1>
      </div>

      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left: Form Column */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  Add Shipping <span className="text-[#4fbf8b]">Address</span>
                </h1>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                      type="text"
                      placeholder="First Name"
                      aria-label="First Name"
                    />
                    <input
                      className="border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                      type="text"
                      placeholder="Last Name"
                      aria-label="Last Name"
                    />
                  </div>

                  <input
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email"
                  />

                  <input
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                    type="text"
                    placeholder="Street"
                    aria-label="Street"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                      type="text"
                      placeholder="City"
                      aria-label="City"
                    />
                    <input
                      className="border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                      type="text"
                      placeholder="State"
                      aria-label="State"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                      type="text"
                      placeholder="Zip code"
                      aria-label="Zip code"
                    />
                    <input
                      className="border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                      type="text"
                      placeholder="Country"
                      aria-label="Country"
                    />
                  </div>

                  <input
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200"
                    type="tel"
                    placeholder="Phone"
                    aria-label="Phone"
                  />

                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full transition-all duration-150 bg-[#4fbf8b] hover:bg-[#44ae7c] text-white font-medium py-2 rounded"
                    >
                      ADD ADDRESS TO ORDER
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: Gray Illustration Area */}
              <div className="w-full md:w-1/2  flex items-center justify-center p-8">
                <img src={assets.add_address_iamge.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
