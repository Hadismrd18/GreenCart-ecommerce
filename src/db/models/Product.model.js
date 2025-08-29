import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  image: { type: Array, required: true },
  description: { type: Array, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  inStock: { type: Boolean, required: true },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
