import { Request, Response } from 'express';
import { CartProductModel } from './cart.model';

const getCartAll = async (req: Request, res: Response) => {
  const result = await CartProductModel.find();
  if (!result || result.length === 0) {
    return res.status(404).json({
      success: false,
      message: 'No products found in the cart',
    });
  }
  res.status(200).json({
    success: true,
    message: 'Cart products retrieved successfully',
    data: result,
  });
};

const getCartByUserEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
  const cartItems = await CartProductModel.find({ email });
  if (!cartItems || cartItems.length === 0) {
    return res.status(404).json({ success: false, message: 'Cart is empty or not found' });
  }
  res.status(200).json({ success: true, data: cartItems });
};

const addProductToMyCart = async (req: Request, res: Response) => {
  const { email, productId, price, productimage, productName, productType, productModel, quantity } = req.body;
  const existingProduct = await CartProductModel.findOne({ email, productId });
  if (existingProduct) {
    existingProduct.quantity += quantity;
    await existingProduct.save();
    return res.status(200).json({
      success: true,
      message: 'Product quantity updated in cart',
      data: existingProduct,
    });
  }

  const newCartProduct = new CartProductModel({
    email,
    productId,
    price,
    productimage,
    productName,
    productType,
    productModel,
    quantity,
  });
  await newCartProduct.save();
  res.status(201).json({
    success: true,
    message: 'Product added to cart',
    data: newCartProduct,
  });
};

const updateProductInMyCart = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const { quantity } = req.body;
  const updatedCartProduct = await CartProductModel.findByIdAndUpdate(
    _id,
    { quantity },
    { new: true }
  );
  if (!updatedCartProduct) {
    return res.status(404).json({ success: false, message: 'Product not found in cart' });
  }
  res.status(200).json({ success: true, message: 'Cart product updated', data: updatedCartProduct });
};

const removeProductFromMyCart = async (req: Request, res: Response) => {
  const { email, productId } = req.body;

  const deletedCartProduct = await CartProductModel.findOneAndDelete({ email, productId });

  if (!deletedCartProduct) {
    return res.status(404).json({ success: false, message: 'Product not found in user cart' });
  }

  res.status(200).json({ success: true, message: 'Product removed from cart', data: deletedCartProduct });
};

export const cartContorller = {
  getCartByUserEmail,
  addProductToMyCart,
  updateProductInMyCart,
  removeProductFromMyCart,
  getCartAll,
};
