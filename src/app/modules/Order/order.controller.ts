import { Request, Response } from 'express';
import { MedicineServices } from '../Medi/medi.service';
import { OrderServices } from './order.service';
import { OrderModel } from './order.model';

const orderMedicine = async (req: Request, res: Response) => {
    const { email, product, quantity } = req.body;
    const medicine = await MedicineServices.getMedicineById(product);

    if (!medicine) return res.status(404).json({ success: false, message: 'Medicine not found' });
    if (medicine.quantity < quantity) return res.status(400).json({ success: false, message: 'Insufficient stock' });

    const totalPrice = medicine.price * quantity;

    await MedicineServices.updateMedicine(product, {
        quantity: medicine.quantity - quantity,
        inStock: medicine.quantity - quantity > 0
    });

    const orderData = { email, product, quantity, totalPrice };
    const result = await OrderServices.createOrderIntoDB(orderData);

    res.status(201).json({ success: true, message: 'Order placed successfully', data: result });
};

export const orderControllers = { orderMedicine };
