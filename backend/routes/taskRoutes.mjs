import express from 'express';
import TaskController from '../controllers/taskController.mjs';
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Aplica o middleware de autenticação em todas as rotas de tarefa
router.use(authenticateToken);

// Rota para criar um novo tarefa
router.post('/', TaskController.createTask);

// Rota para listar todos os tarefas
router.get('/project', TaskController.getAllTasks);

// Rota para obter um tarefa por ID
router.get('/:id', TaskController.getTaskById);

// Rota para atualizar um tarefa por ID
router.put('/:id', TaskController.updateTask);

// Rota para excluir um tarefa por ID
router.delete('/:id', TaskController.deleteTask);

export default router;
