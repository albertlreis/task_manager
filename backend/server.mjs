import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import authRoutes from './routes/authRoutes.mjs';
import projectRoutes from './routes/projectRoutes.mjs';
import taskRoutes from './routes/taskRoutes.mjs';

config(); // Isso carregará automaticamente as variáveis de ambiente do arquivo .env

const app = express();

// Configurar o CORS para permitir solicitações do seu aplicativo React
app.use(
    cors({
        origin: 'http://localhost:3000', // Substitua pelo URL do seu aplicativo em produção, se necessário
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // Habilitar credenciais (cookies, cabeçalhos de autenticação, etc.), se necessário
    })
);

// Middleware de análise de corpo JSON
app.use(express.json());

// Rotas de autenticação
app.use('/auth', authRoutes);

// Rotas de projetos
app.use('/projects', projectRoutes);

// Rotas protegidas com autenticação
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});
