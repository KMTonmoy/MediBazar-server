import { Schema, model, Document } from 'mongoose';

export interface CartProduct extends Document {
  email: string;
  productId: string;
  quantity: number;
  productName: string;
  price: number;
  productimage: string;
  productType: string;
  productModel: string;
}

const cartProductSchema = new Schema<CartProduct>({
  email: { type: String, required: true },
  productId: { type: String, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
  productName: { type: String },
  price: { type: Number },
  productimage: { type: String },
  productType: { type: String },
  productModel: { type: String },
});

export const CartProductModel = model<CartProduct>('CartProduct', cartProductSchema);
