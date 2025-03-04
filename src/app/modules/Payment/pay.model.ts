// import mongoose, { Document, Schema } from 'mongoose';
// import { Payment } from './pay.interface';

// const paymentSchema: Schema = new Schema({
//     email: { type: String, required: true },
//     amount: { type: Number, required: true },
//     currency: { type: String, required: true },
//     paymentMethodId: { type: String, required: true },
//     status: { type: String, default: 'pending' },
//     orderedProducts: [{
//         productId: { type: String, required: true },
//         productName: { type: String, required: true },
//         productType: { type: String, required: true },
//         productModel: { type: String, required: true },
//         productImage: { type: String, required: true },
//         price: { type: Number, required: true },
//         quantity: { type: Number, required: true }
//     }],
// }, { timestamps: true });

// const PaymentModel = mongoose.model<Payment & Document>('Payment', paymentSchema);

// export default PaymentModel;
