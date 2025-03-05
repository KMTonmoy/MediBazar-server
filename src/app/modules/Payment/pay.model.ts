// payment.model.ts
import mongoose, { Schema, Document } from 'mongoose';

interface Payment extends Document {
  email: string;
  amount: number;
  cartItems: any[];
  status: 'success' | 'failed';
  createdAt: Date;
}

const PaymentSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    cartItems: { type: Array, required: true },
    status: { type: String, enum: ['success', 'failed'], required: true },
  },
  { timestamps: true }
);

export default mongoose.model<Payment>('Payment', PaymentSchema);
