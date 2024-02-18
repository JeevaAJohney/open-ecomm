// auth/controllers/authController.ts
import { Request, Response } from 'express';
import { loginUser, signupUser } from '../service/authService';


export const login = (req: Request, res: Response) => {
    const { username, password } = req.body; 
    const user = loginUser(username, password);
    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

export const signup = (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    const newUser = signupUser(username, password);
    
    if (newUser) {
        res.status(200).json({ message: 'User registered successfully', user: newUser });
    } else {
        res.status(500).json({ message: 'Error registering user' });
    }
};

