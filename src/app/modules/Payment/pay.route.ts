import { Router } from 'express';
import { createPaymentIntent, savePayment, updateOrderTrack } from './pay.controller';

const router = Router();

router.post('/create-payment-intent', createPaymentIntent);
router.post('/save-payment', savePayment);
router.patch('/update-order/:id', updateOrderTrack);

export const PayRoutes = router;
