// this route is for getting all the orders on orders page of seller dashboard

import connectDb from "@/db/connectDb";
import OrderModel from "@/db/models/Order.model";
import UserModel from "@/db/models/User.model";

export async function GET(req, { params }) {
  await connectDb();
  try {
    const parameters = await params;
    const sellerId = parameters.sellerId;
    // check if that id is for a seller
    const seller = await UserModel.find({ _id: sellerId, isSeller: true });
    if (!seller) {
      return new Response(JSON.stringify("seller not found"));
    }
    const sellerOrders = await OrderModel.find({ sellerId });
    return new Response(JSON.stringify(sellerOrders), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error?.message }));
  }
}
