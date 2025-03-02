import { CartProduct } from './cart.interface';
import { CartProductModel } from './cart.model';

class CartService {
    static async addProductToCart(cartProduct: CartProduct) {
        try {
            const result = await CartProductModel.create(cartProduct);
            console.log(result)
            return result;
        } catch (err) {
            throw new Error('Failed to add product to cart');
        }
    }

    static async getAllCartProducts(email: string) {
        try {
            const result = await CartProductModel.find({ email });
            return result;
        } catch (err) {
            throw new Error('Failed to retrieve cart products');
        }
    }

    static async getSingleCartProduct(id: string) {
        try {
            const result = await CartProductModel.findOne({ _id: id });
            if (!result) {
                throw new Error('Cart product not found');
            }
            return result;
        } catch (err) {
            throw new Error('Failed to retrieve cart product');
        }
    }

    static async updateCartProduct(id: string, updatedData: Partial<CartProduct>) {
        try {
            const result = await CartProductModel.findByIdAndUpdate(
                id,
                { $set: updatedData },
                { new: true, runValidators: true }
            );

            if (!result) {
                throw new Error('Cart product not found');
            }
            return result;
        } catch (err) {
            throw new Error('Failed to update cart product');
        }
    }

    static async deleteCartProduct(id: string) {
        try {
            const result = await CartProductModel.findByIdAndDelete(id);
            if (!result) {
                throw new Error('Cart product not found');
            }
            return result;
        } catch (err) {
            throw new Error('Failed to delete cart product');
        }
    }
}

export default CartService;
