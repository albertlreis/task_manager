import express from 'express';

const app = express();

// Middleware de análise de corpo JSON
app.use(express.json());



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});
