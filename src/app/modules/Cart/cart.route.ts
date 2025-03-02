import express, { Request, Response, NextFunction } from 'express';
import { cartContorller } from './cart.controller';

const router = express.Router();

router.get('/mycartall', cartContorller.getCartAll);
router.post('/mycart', cartContorller.addProductToMyCart);
router.put('/mycart/:_id', cartContorller.updateProductInMyCart);
router.delete('/mycart/:_id', cartContorller.removeProductFromMyCart);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: err.message || 'Internal Server Error',
    });
});

export const CartRoutes = router;
