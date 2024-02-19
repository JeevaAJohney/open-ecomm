import express, { Request, Response } from 'express'
import authRoutes  from './auth/authRoutes'
import productRoutes from './products/productRoutes'
import 'reflect-metadata'
import { createConnection } from 'typeorm';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/products', productRoutes);


createConnection()
.then(() => console.log('Database connected'))
.catch((err) => console.log('Error connecting to database: ', err))

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});