import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (order: Order) => {
    return await OrderModel.create(order);
};

export const OrderServices = {
    createOrderIntoDB,
};
