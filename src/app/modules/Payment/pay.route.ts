// payment.router.ts
import { Router } from 'express';
import { createPaymentIntent, savePayment } from './pay.controller';

const router = Router();

// Endpoint for creating a payment intent
router.post('/create-payment-intent', createPaymentIntent);

// Endpoint for saving payment information
router.post('/save-payment', savePayment);

export const PayRoutes = router;