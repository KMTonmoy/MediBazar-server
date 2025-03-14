import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'customer';
    isBlocked: boolean;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    isPasswordMatch(password: string): Promise<boolean>;
}

const userSchema: Schema<IUser> = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        image: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
        isBlocked: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

userSchema.pre<IUser>('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

userSchema.methods.isPasswordMatch = async function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
};

const UserModel: Model<IUser> = mongoose.model<IUser>('customer', userSchema);

export default UserModel;