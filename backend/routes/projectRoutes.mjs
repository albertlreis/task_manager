import express from 'express';
import ProjectController from '../controllers/projectController.mjs';
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Aplica o middleware de autenticação em todas as rotas de projeto
router.use(authenticateToken);

// Rota para criar um novo projeto
router.post('/', ProjectController.createProject);

// Rota para listar todos os projetos
router.get('/', ProjectController.getAllProjects);

// Rota para obter um projeto por ID
router.get('/:id', ProjectController.getProjectById);

// Rota para atualizar um projeto por ID
router.put('/:id', ProjectController.updateProject);

// Rota para excluir um projeto por ID
router.delete('/:id', ProjectController.deleteProject);

export default router;
