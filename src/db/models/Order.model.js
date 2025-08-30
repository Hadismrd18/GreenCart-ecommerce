import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      product: {
        type: Object,
      },
      quantity: { type: Number, required: true },
    },
  ],
  amount: { type: Number, required: true },
  address: {
    type: String,
  },
  status: { type: String, required: true },
  paymentType: { type: String, required: true },
  isPaid: { type: Boolean, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
