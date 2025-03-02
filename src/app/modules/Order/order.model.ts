import mongoose, { Schema, Document } from 'mongoose';
import { Order } from './order.interface';

const orderSchema: Schema = new Schema(
    {
        email: { type: String, required: true },
        product: { type: Schema.Types.ObjectId, ref: 'Medicine', required: true },
        quantity: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
    },
    { timestamps: true }
);

export const OrderModel = mongoose.model<Order & Document>('Order', orderSchema);
