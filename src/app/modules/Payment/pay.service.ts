import Stripe from 'stripe';
import { PaymentRequest, PaymentResponse, SavePaymentRequest } from './pay.interface';
import Payment from './pay.model';

const stripe = new Stripe('sk_test_51PLRDh1ER2eQQaKO62FDISx1JSEYIssRAxTTkCbDLF9dwtr65GpWuRQNbx7WTOCRLEqIH8TH7oyPWDiDeiembWQp00Lbh4F97W', {
    apiVersion: '2024-12-18.acacia',
});

export const createPaymentIntentService = async (paymentRequest: PaymentRequest): Promise<PaymentResponse> => {
    const { email, amount } = paymentRequest;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd',
        receipt_email: email,
    });

    return { clientSecret: paymentIntent.client_secret };
};

export const savePaymentService = async (paymentData: SavePaymentRequest): Promise<void> => {
    const { email, amount, cartItems, status } = paymentData;

    const newPayment = new Payment({
        email,
        amount,
        cartItems,
        ordertrack: "pending",
        status,
    });

    await newPayment.save();
};

export const updateOrderTrackService = async (id: string, ordertrack: "pending" | "processing" | "shipped" | "delivered"): Promise<void> => {
    await Payment.findByIdAndUpdate(id, { ordertrack });
};
