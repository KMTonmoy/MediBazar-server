import { Request, Response } from 'express';
import { MedicineServices } from './medi.service';

const createMedicine = async (req: Request, res: Response) => {
    const medicineData = req.body;
    const result = await MedicineServices.createMedicine(medicineData);
    res.status(201).json({ success: true, message: 'Medicine created successfully', data: result });
};

const getAllMedicines = async (req: Request, res: Response) => {
    const result = await MedicineServices.getAllMedicines();
    res.status(200).json({ success: true, message: 'Medicines retrieved successfully', data: result });
};

const getMedicineById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await MedicineServices.getMedicineById(id);
    if (!result) return res.status(404).json({ success: false, message: 'Medicine not found' });
    res.status(200).json({ success: true, message: 'Medicine retrieved successfully', data: result });
};

const updateMedicine = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await MedicineServices.updateMedicine(id, updatedData);
    if (!result) return res.status(404).json({ success: false, message: 'Medicine not found' });
    res.status(200).json({ success: true, message: 'Medicine updated successfully', data: result });
};

const deleteMedicine = async (req: Request, res: Response) => {
    const { id } = req.params;
    await MedicineServices.deleteMedicine(id);
    res.status(200).json({ success: true, message: 'Medicine deleted successfully' });
};

export const medicineControllers = {
    createMedicine,
    getAllMedicines,
    getMedicineById,
    updateMedicine,
    deleteMedicine,
};
