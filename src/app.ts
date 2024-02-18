import express, { Request, Response } from 'express'
import authRoutes  from './auth/authRoutes'

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});