"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder, removeItemFromCart } from "@/redux/slices/cart.slice";
import { useEffect, useState } from "react";
import seperateOrders from "@/lib/seperateOrders";
import { useRouter } from "next/navigation";
export default function page() {
  const [address, setAddress] = useState("this is an address");
  const [deliveryMethod, setDeliveryMethod] = useState("online");
  const [totalPrice, setTotalPrice] = useState(0);
  const cartData = useSelector((state) => state.cart);
  const router = useRouter();
  console.log(cartData);
  const dispatch = useDispatch();

  const removeItem = (itemId) => {
    console.log(itemId);
    dispatch(removeItemFromCart(itemId));
  };

  useEffect(() => {
    let total = 0;
    cartData.map((item) => {
      total += item.productDetails.data.price * item.productDetails.quantity;
    });
    setTotalPrice(total);
  }, [cartData]);
  console.log(totalPrice);
  const finalizeOrder = () => {
    const ordersArrangedBySeller = seperateOrders(cartData);
    ordersArrangedBySeller.map((item) => {
      const orderData = {
        sellerId: item.sellerId,
        items: item.items,
        amount: totalPrice,
        address,
        status: "Order placed",
        paymentType: deliveryMethod,
        isPaid: true,
      };
      console.log(orderData);
      dispatch(placeOrder(orderData));
    });
    router.push("/");
  };

  return (
    <div className="mt-20 w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Product list */}
        <div className="flex-1 bg-white rounded-lg  p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Shopping Cart{" "}
              <span className="text-sm text-gray-400">2 Items</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 pb-4">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>Product details</div>

                <div className="text-lg  text-gray-800">Subtotal</div>
              </div>
            </div>

            <div className="ml-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full ">
                Action
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Item 1 */}
            {cartData?.map((item, index) => (
              <div key={index} className="flex items-center gap-4 pb-4">
                <img
                  src={item.productDetails.data.image[0]}
                  className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"
                  aria-hidden="true"
                />

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-medium text-gray-800">
                        {item.productDetails.data.name}
                      </div>
                      <div className="text-sm text-gray-400">Weight: N/A</div>
                      <div className="text-sm text-gray-400">
                        Qty: {item.productDetails.quantity}
                      </div>
                    </div>

                    <div className="text-lg font-semibold text-gray-800">
                      $
                      {item.productDetails.data.price *
                        item.productDetails.quantity}
                    </div>
                  </div>
                </div>

                <div className="ml-2">
                  <button
                    onClick={() => removeItem(item.productDetails.data._id)}
                    type="button"
                    className="w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-200 hover:bg-red-500 hover:text-white border-red-500 text-red-500"
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div>
              <Link
                href="/products"
                className="inline-flex items-center text-green-600 text-sm"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Order summary */}
        <aside className="bg-gray-100 w-full lg:w-96  rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-bold border-b pb-4 text-gray-800 mb-4">
            Order Summary
          </h3>

          <div className="text-sm text-gray-500 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-700">
                Delivery Address
              </span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="text-gray-400 mb-2"
                placeholder="type your address"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm mb-2">
                Payment Method
              </label>
              <div className="relative">
                <select
                  value={deliveryMethod}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white"
                  defaultValue="Cash On Delivery"
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                >
                  <option>Cash On Delivery</option>
                  <option>Online Payment</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 text-sm text-gray-600">
            <div className="flex items-center justify-between mb-2">
              <span>Price</span>
              <span className="font-medium text-gray-800">${totalPrice}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Shipping Fee</span>
              <span className="text-green-500 font-medium">Free</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Tax (2%)</span>
              <span className="font-medium text-gray-800">
                ${0.02 * totalPrice}
              </span>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <span className="text-gray-700 font-semibold">Total Amount:</span>
              <span className="text-xl font-bold text-gray-800">
                ${1.02 * totalPrice}
              </span>
            </div>

            <button
              type="button"
              className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded text-sm font-medium"
              onClick={finalizeOrder}
            >
              Place Order
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
