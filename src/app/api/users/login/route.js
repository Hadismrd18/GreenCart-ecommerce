import UserModel from "@/db/models/User.model";
import connectDb from "@/db/connectDb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function POST(request, { params }) {
  await connectDb();
  const body = await request.json();
  //   send all user data(username password email in the request)
  const user = await UserModel.findOne({ email: body.email });
  console.log(user.email);
  try {
    const match = await bcrypt.compare(body.password, user.password);

    const accessToken = jwt.sign(JSON.stringify(user), process.env.SECRET_KEY, {
      expiresIn: "3600s",
    });
    console.log(accessToken);
    if (match) {
      console.log("this is token", accessToken);
      return Response.json({ accessToken });
    } else {
      return Response.json(
        { error: "user not found.please sign in" },
        { status: 404 }
      );
    }
  } catch (error) {
    return Response.json(error);
  }
}
