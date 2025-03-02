export interface Medicine {
    id: string;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
    ageRange: string;
    tags: string[];
    warnings: string[];
    sideEffects: string[];
    preparation: string;
    requiresPrescription: boolean;
    inStock: boolean;
    quantity: number;
    IsDrPrescriptionRequired: boolean;
}
