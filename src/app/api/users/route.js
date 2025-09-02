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
      return Response.json({
        error: "A user has signed up with this email,please login",
      });
    }
    // has user's password
    const hashedPass = await bcrypt.hash(password, 10);

    // if none of the user types were selected,the user type must be a customer
    if (!isCustomer && !isSeller) {
      const newUser = await UserModel.create({
        email,
        name,
        isSeller,
        isCustomer: true,
        password: hashedPass,
      });

      return Response.json(newUser, { status: 201 });
    }

    // if both of the user types were selected,the user type must be a seller
    if (isCustomer && isSeller) {
      const newUser = await UserModel.create({
        email,
        name,
        isSeller: true,
        isCustomer: false,
        password: hashedPass,
      });

      return Response.json(newUser, { status: 201 });
    }

    // create new user if one of the user statuses is checked
    const newUser = await UserModel.create({
      email,
      name,
      isSeller,
      isCustomer,
      password: hashedPass,
    });

    return Response.json(newUser, { status: 201 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  }
}
