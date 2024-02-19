// auth/controllers/authController.ts
import { Request, Response } from 'express';
import { loginUser, signupUser } from '../service/authService';


export const login = async (req: Request, res: Response) => {
    const user = await loginUser(req.body);
    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

export const signup = async (req: Request, res: Response) => {    
    const newUser = await signupUser(req.body);
    
    if (newUser) {
        res.status(200).json({ message: 'User registered successfully', user: newUser });
    } else {
        res.status(500).json({ message: 'Error registering user' });
    }
};

