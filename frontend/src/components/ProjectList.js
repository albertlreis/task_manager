import React, { useEffect, useState } from 'react';
import api from "../api/api";

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fazer uma solicitação GET à API para buscar a lista de projetos
        api.get('/projects')
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar lista de projetos:', error);
            });
    }, []);

    return (
        <div>
            <h2>Lista de Projetos</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                    // Substitua 'name' pelo nome do campo que contém o nome do projeto na resposta da API
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
