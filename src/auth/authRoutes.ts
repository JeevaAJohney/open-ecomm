import express from 'express';
import { authenticate } from './middleware/authenticate';
import { login, signup } from './controller/authController';

const router = express.Router();

router.post('/login', authenticate, login);
router.post('/register', signup);

export default router;