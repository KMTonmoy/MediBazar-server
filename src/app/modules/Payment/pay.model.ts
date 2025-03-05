import mongoose, { Schema, Document } from 'mongoose';

interface Payment extends Document {
  email: string;
  amount: number;
  cartItems: any[];
  ordertrack: "pending" | "processing" | "shipped" | "delivered";
  status: 'success' | 'failed';
  createdAt: Date;
}

const PaymentSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    cartItems: { type: Array, required: true },
    ordertrack: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered'],
      default: 'pending'
    },
    status: { type: String, enum: ['success', 'failed'], required: true },
  },
  { timestamps: true }
);

export default mongoose.model<Payment>('Payment', PaymentSchema);
