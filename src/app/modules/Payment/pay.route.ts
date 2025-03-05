import { Router } from 'express';
import { createPaymentIntent, getAllOrders, savePayment, updateOrderTrack } from './pay.controller';

const router = Router();

router.post('/create-payment-intent', createPaymentIntent);
router.post('/save-payment', savePayment);
router.patch('/update-order/:id', updateOrderTrack);
router.get('/get-all-orders', getAllOrders);

export const PayRoutes = router;
