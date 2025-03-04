
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'customer';
    isBlocked: boolean;
    createdAt: string;
    image: string;
    updatedAt: string;
};
