export interface PaymentRequest {
    email: string;
    amount: number;
    cartItems: any[];
}

export interface PaymentResponse {
    clientSecret: string | null;
}

export interface SavePaymentRequest {
    email: string;
    amount: number;
    cartItems: any[];
    ordertrack: "pending" | "processing" | "shipped" | "delivered";
    status: 'success' | 'failed';
}
