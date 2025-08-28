import connectDb from "@/db/connectDb";
import UserModel from "@/db/models/User.model";
import bcrypt from "bcrypt";

export async function GET(params) {
  await connectDb();
  const allUsers = await UserModel.find({});
  return Response.json(allUsers, { status: 200 });
}

export async function POST(request, { params }) {
  await connectDb();
  try {
    const body = await request.json();
    const { email, name, password, isSeller, isCustomer } = body;

    // check if email exists
    const isExist = await UserModel.findOne({ email });
    if (isExist) {
      return Response.json({ error: "A user has signed up with this email,please login" });
    }
    // has user's password
    const hashedPass = await bcrypt.hash(password, 10);

    // create new user
    const newUser = await UserModel.create({
      email,
      name,
      isSeller,
      isCustomer,
      password: hashedPass,
    });

    return Response.json(newUser, { status: 201 });
  } catch (error) {}
  return Response.json(error, { status: 500 });
}
