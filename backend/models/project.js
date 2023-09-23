import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Project = sequelize.define('Project', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    // user_id é uma chave estrangeira para o usuário que criou o projeto
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'projects'
});

export default Project;
