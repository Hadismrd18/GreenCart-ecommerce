// get all orders to show all the products list of the seller dashboard
import connectDb from "@/db/connectDb";
import UserModel from "@/db/models/User.model";
import ProductModel from "@/db/models/Product.model";

export async function GET(request, { params }) {
  await connectDb();
  try {
    const parameters = await params;
    const sellerId = parameters.sellerId;
    const sellerProducts = await ProductModel.find({ _id: sellerId });

    return new Response(sellerProducts, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }));
  }
}
