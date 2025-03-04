import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { OrderRoutes } from './app/modules/Order/order.routes';
import { UserRoutes } from './app/User/user.route';
import { CartRoutes } from './app/modules/Cart/cart.route';
// import { PayRoutes } from './app/modules/Payment/pay.route';
import { MedicineRoutes } from './app/modules/Medi/medi.route';

const app: Application = express();


app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'https://medibazar.vercel.app'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/api', UserRoutes);
app.use('/api', MedicineRoutes);
app.use('/api', OrderRoutes);
app.use('/api', CartRoutes);
// app.use('/api', PayRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send(`Medicine Store Running Here !!!`);
});

export default app;
