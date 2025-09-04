import UserModel from "@/db/models/User.model";
import connectDb from "@/db/connectDb";

export async function GET(request, { params }) {
  await connectDb();
  try {
    const parameters = await params;
    const userEmail = parameters.userEmail;
    const currentUser = await UserModel.find({ email: userEmail });
    return new Response(JSON.stringify(currentUser), { status: 200 });
  } catch (error) {
    return new Response({ error: error.message });
  }
}
