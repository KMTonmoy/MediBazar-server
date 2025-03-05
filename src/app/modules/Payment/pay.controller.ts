import { Request, Response } from 'express';
import Stripe from 'stripe';
import Payment from './pay.model';
import { PaymentRequest, PaymentResponse, SavePaymentRequest } from './pay.interface';

const stripe = new Stripe('sk_test_51PLRDh1ER2eQQaKO62FDISx1JSEYIssRAxTTkCbDLF9dwtr65GpWuRQNbx7WTOCRLEqIH8TH7oyPWDiDeiembWQp00Lbh4F97W', {
    apiVersion: '2020-08-27',
});

export const createPaymentIntent = async (req: Request, res: Response) => {
    try {
        const { email, amount, cartItems }: PaymentRequest = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: 'usd',
            receipt_email: email,
            payment_method_types: ["card"], 
        });

        if (!paymentIntent.client_secret) {
            return res.status(500).send('Payment intent client secret not found');
        }

        const paymentResponse: PaymentResponse = {
            clientSecret: paymentIntent.client_secret || '',  
        };

        res.json(paymentResponse);
    } catch (error) {
        console.error(error);
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
            status,
        });

        await newPayment.save();

        res.status(201).send('Payment saved');
    } catch (error) {
        console.error(error);
        res.status(500).send('Payment saving failed');
    }
};
