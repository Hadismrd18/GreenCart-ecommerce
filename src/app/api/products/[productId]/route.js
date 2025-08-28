import connectDb from "@/db/connectDb";
import ProductModel from "@/db/models/Product.model";

// for getting products on each page
export async function GET(request, { params }) {
  await connectDb();
  const parameters = await params;
  const productId = parameters.productId;
  try {
    const currentProduct = await ProductModel.findById(productId);
    return Response.json(currentProduct, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
