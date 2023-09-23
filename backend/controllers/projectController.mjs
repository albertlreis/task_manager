import Project from '../models/project.js';

class ProjectController {
    async createProject(req, res) {
        try {
            // Obtém o ID do usuário do token JWT
            const userId = req.user_id;

            // Adiciona o ID do usuário aos dados do projeto a serem criados
            const projectData = {
                ...req.body,
                user_id: userId, // Define o ID do usuário
            };

            const project = await Project.create(projectData);
            res.status(201).json(project);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async getAllProjects(req, res) {
        try {
            const user_id = req.user_id; // ID do usuário extraído do token

            const projects = await Project.findAll({ where: { user_id: user_id } });
            res.status(200).json(projects);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async getProjectById(req, res) {
        const projectId = req.params.id;
        const user_id = req.user_id; // ID do usuário extraído do token

        try {
            const project = await Project.findOne({
                where: { id: projectId, user_id: user_id },
            });

            if (!project) {
                return res.status(404).json({ message: 'Projeto não encontrado.' });
            }

            res.status(200).json(project);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async updateProject(req, res) {
        const projectId = req.params.id;
        const { name, description } = req.body;

        try {
            const [updated] = await Project.update(
                { name, description },
                {
                    where: { id: projectId },
                }
            );

            if (!updated) {
                return res.status(404).json({ message: 'Projeto não encontrado.' });
            }

            res.status(200).json({ message: 'Projeto atualizado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async deleteProject(req, res) {
        const projectId = req.params.id;

        try {
            const deleted = await Project.destroy({
                where: { id: projectId },
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Projeto não encontrado.' });
            }

            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}

export default new ProjectController();
