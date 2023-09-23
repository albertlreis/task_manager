import express from 'express';
import authController from '../controllers/authController.mjs';

const router = express.Router();

// Rota de login
router.post('/login', authController.login);

// Rota de registro
router.post('/register', authController.register);

export default router;
