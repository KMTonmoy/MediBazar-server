import express from 'express';
import { createPaymentController, createPaymentIntentController, getAllPaymentsController, getPaymentsByEmailController, savePaymentController } from './pay.controller';


const router = express.Router();

router.post('/create-payment-intent', createPaymentIntentController);
router.get('/payments', getAllPaymentsController);
router.get('/payments/:email', getPaymentsByEmailController);
router.post('/payments', createPaymentController);
router.post('/save-payment', savePaymentController);







export const PayRoutes = router;
