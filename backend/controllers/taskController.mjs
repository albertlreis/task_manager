import Task from '../models/task.js';

class TaskController {
    async createTask(req, res) {
        try {
            const task = await Task.create(req.body);
            res.status(201).json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async getAllTasks(req, res) {
        try {
            const project_id = req.body.project_id; // ID do projeto

            const tasks = await Task.findAll({ where: { project_id: project_id } });
            res.status(200).json(tasks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async getTaskById(req, res) {
        const task_id = req.params.id;

        try {
            const task = await Task.findOne({
                where: { id: task_id },
            });

            if (!task) {
                return res.status(404).json({ message: 'Tarefa não encontrada.' });
            }

            res.status(200).json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async updateTask(req, res) {
        const task_id = req.params.id;
        const { title, description, due_date, completed } = req.body;

        try {
            const [updated] = await Task.update(
                { title, description, due_date, completed },
                {
                    where: { id: task_id },
                }
            );

            if (!updated) {
                return res.status(404).json({ message: 'Tarefa não encontrada.' });
            }

            res.status(200).json({ message: 'Tarefa atualizada com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async deleteTask(req, res) {
        const task_id = req.params.id;

        try {
            const deleted = await Task.destroy({
                where: { id: task_id },
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Tarefa não encontrada.' });
            }

            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}

export default new TaskController();
