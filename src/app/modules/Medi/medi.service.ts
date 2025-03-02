import { Medicine } from './medi.interface';
import { MedicineModel } from './medi.model';

const createMedicine = async (medicine: Medicine) => {
    return await MedicineModel.create(medicine);
};

const getAllMedicines = async () => {
    return await MedicineModel.find();
};

const getMedicineById = async (id: string) => {
    return await MedicineModel.findById(id);
};

const updateMedicine = async (id: string, updatedData: Partial<Medicine>) => {
    return await MedicineModel.findByIdAndUpdate(id, { $set: updatedData }, { new: true, runValidators: true });
};

const deleteMedicine = async (id: string) => {
    return await MedicineModel.findByIdAndDelete(id);
};

export const MedicineServices = {
    createMedicine,
    getAllMedicines,
    getMedicineById,
    updateMedicine,
    deleteMedicine,
};
