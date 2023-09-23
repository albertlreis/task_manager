import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Rota protegida com autenticação
router.get('/tasks', authenticateToken, (req, res) => {
    // Aqui você pode acessar req.user para obter informações do usuário autenticado
    res.json({ message: 'Esta rota é protegida.' });
});

export default router;
