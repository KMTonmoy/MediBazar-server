import Stripe from 'stripe';
import PaymentModel from './pay.model';
import { Payment } from './pay.interface';

const stripe = new Stripe("sk_test_51PLRDh1ER2eQQaKO62FDISx1JSEYIssRAxTTkCbDLF9dwtr65GpWuRQNbx7WTOCRLEqIH8TH7oyPWDiDeiembWQp00Lbh4F97W", {});

export const createPaymentIntent = async (price: number) => {
    const amount = Math.round(price * 100);
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card'],
    });
    return paymentIntent.client_secret;
};

export const getAllPayments = async () => {
    return await PaymentModel.find();
};

export const getPaymentsByEmail = async (email: string) => {
    return await PaymentModel.find({ email });
};

export const createPayment = async (payment: Payment) => {
    const newPayment = new PaymentModel(payment);
    return await newPayment.save();
};

// export const savePaymentToDB = async (email: string, productIds: string[], price: number, transactionId: string, paymentStatus: string) => {
//     try {
//         console.log(productIds)
//         const payment: Payment = {
//             email,
//             orderdProducts: productIds,
//             amount: price,
//             currency: 'USD',
//             paymentMethodId: transactionId,
//             status: paymentStatus,
//         };

//         const newPayment = new PaymentModel(payment);
//         await newPayment.save();

//         return newPayment;
//     } catch (error) {
//         throw new Error('Error saving payment data');
//     }
// };




export const savePaymentToDB = async (
    email: string,
    products: Array<any>, // Ensure this is an array of full product data
    price: number,
    transactionId: string,
    paymentStatus: string
) => {
    try {
        // Log the products to verify their structure
        console.log('Products array:', products);

        // Mapping the products to match the schema
        const orderedProducts = products.map(product => ({
            productId: product.productId,
            productName: product.productName,
            productType: product.productType,
            productModel: product.productModel,
            productImage: product.productImage,
            price: product.price,
            quantity: product.quantity
        }));

        console.log('Ordered products:', orderedProducts);

        const payment: Payment = {
            email,
            amount: price,
            currency: 'USD',
            paymentMethodId: transactionId,
            status: paymentStatus,
            orderedProducts: orderedProducts,
        };

        const newPayment = new PaymentModel(payment);
        await newPayment.save();

        return newPayment;
    } catch (error) {
        console.error('Error saving payment data:', error);
        throw new Error('Error saving payment data');
    }
};
