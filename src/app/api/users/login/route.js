import UserModel from "@/db/models/User.model";
import connectDb from "@/db/connectDb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request, { params }) {
  await connectDb();
  const body = await request.json();

  try {
    const user = await UserModel.findOne({ email: body.email });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const match = await bcrypt.compare(body.password, user.password);
    if (!match) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Minimal token payload
    const payload = {
      email: user.email,
      name: user.name,
      isSeller: user.isSeller,
      isCustomer: user.isCustomer,
    };
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return new Response(JSON.stringify({ accessToken }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
