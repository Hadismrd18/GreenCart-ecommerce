import connectDb from "@/db/connectDb";
import ProductModel from "@/db/models/Product.model";
import UserModel from "@/db/models/User.model";
import bcrypt from "bcrypt";

export async function GET() {
  await connectDb();
  const allProducts = await ProductModel.find({});
  return Response.json(allProducts, { status: 200 });
}

// the added products should be added to the products model as a whole so that we can access them all in the store
// we should have a seller id for each of them so that we can access a specific group of products in the route /api/seller/products/sellerId
export async function POST(request) {
  await connectDb();

  try {
    const body = await request.json();
    const {
      sellerId,
      name,
      category,
      price,
      offerPrice,
      image,
      description,
      createdAt,
      updatedAt,
      inStock,
    } = body;

    const seller = await UserModel.findById(sellerId);
    console.log(seller);
    if (!seller) {
      return new Response(JSON.stringify("seller not found"), { status: 404 });
    }

    const newProduct = await ProductModel.create({
      sellerId,
      name,
      category,
      price,
      offerPrice,
      image,
      description,
      createdAt,
      updatedAt,
      inStock,
    });

    return new Response(newProduct, { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error }));
  }
}
