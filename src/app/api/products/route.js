import connectDb from "@/db/connectDb";
import ProductModel from "@/db/models/Product.model";
import UserModel from "@/db/models/User.model";
import bcrypt from "bcrypt";

export async function GET() {
  await connectDb();
  const allProducts = await ProductModel.find({});
  return Response.json(allProducts, { status: 200 });
}

export async function POST(request, { params }) {
  await connectDb();
  try {
    const body = await request.json();
    const {
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

    // check if email exists
    const isExist = await ProductModel.findOne({ name });
    if (isExist) {
      return Response.json({
        error: "A product already exists with this name",
      });
    }

    // create new user
    const newProduct = await ProductModel.create({
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

    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
