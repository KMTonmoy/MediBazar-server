import express, { Request, Response, NextFunction } from 'express';
import { medicineControllers } from './medi.controller';

const router = express.Router();

router.post('/medicines', medicineControllers.createMedicine);
router.get('/medicines', medicineControllers.getAllMedicines);
router.get('/medicines/:id', medicineControllers.getMedicineById);
router.put('/medicines/:id', medicineControllers.updateMedicine);
router.delete('/medicines/:id', medicineControllers.deleteMedicine);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: err.message || 'Internal Server Error',
    });
});

export const MedicineRoutes = router;
