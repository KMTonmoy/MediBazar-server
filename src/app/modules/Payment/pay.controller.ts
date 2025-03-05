import { Request, Response } from 'express';
import Stripe from 'stripe';
import Payment from './pay.model';
import { PaymentRequest, PaymentResponse, SavePaymentRequest } from './pay.interface';

const stripe = new Stripe('sk_test_51PLRDh1ER2eQQaKO62FDISx1JSEYIssRAxTTkCbDLF9dwtr65GpWuRQNbx7WTOCRLEqIH8TH7oyPWDiDeiembWQp00Lbh4F97W', {
    apiVersion: '2024-12-18.acacia',
});

export const createPaymentIntent = async (req: Request, res: Response) => {
    try {
        const { email, amount }: PaymentRequest = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: 'usd',
            receipt_email: email,
            payment_method_types: ["card"],
        });

        res.json({ clientSecret: paymentIntent.client_secret || null });
    } catch (error) {
        res.status(500).send('Payment creation failed');
    }
};

export const savePayment = async (req: Request, res: Response) => {
    try {
        const { email, amount, cartItems, status }: SavePaymentRequest = req.body;

        const newPayment = new Payment({
            email,
            amount,
            cartItems,
            ordertrack: "pending",
            status,
        });

        await newPayment.save();
        res.status(201).send('Payment saved');
    } catch (error) {
        res.status(500).send('Payment saving failed');
    }
};

export const updateOrderTrack = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { ordertrack } = req.body;

        const updatedPayment = await Payment.findByIdAndUpdate(id, { ordertrack }, { new: true });

        if (!updatedPayment) {
            return res.status(404).send('Payment not found');
        }

        res.json(updatedPayment);
    } catch (error) {
        res.status(500).send('Order track update failed');
    }
};
