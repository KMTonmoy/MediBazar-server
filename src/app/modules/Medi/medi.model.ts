import { Schema, model } from 'mongoose';

const MedicineSchema = new Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
    ageRange: { type: String, required: true },
    tags: { type: [String], default: [] },
    warnings: { type: [String], default: [] },
    sideEffects: { type: [String], default: [] },
    // preparation: { type: String, required: true },
    prescriptionImage: { type: String, required: false },
    IsDrPrescriptionRequired: { type: Boolean, required: true }, 
  },
  { timestamps: true }
);

export const MedicineModel = model('Medicine', MedicineSchema);
