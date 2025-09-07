// in this route we can add a new order by pressing the order button in the cart

import connectDb from "@/db/connectDb";
import OrderModel from "@/db/models/Order.model";

export async function POST(request, { params }) {
  await connectDb();
  try {
    const body = await request.json();
    const { sellerId, items, amount, address, status, paymentType, isPaid } =
      body;

    const newOrder = await OrderModel.create({
      sellerId,
      items,
      amount,
      address,
      status,
      paymentType,
      isPaid,
    });
    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error }));
  }
}
// AAAAHHHHHHHHHHHHHHHHHHHH
