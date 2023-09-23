import {DataTypes} from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true, // Defina como true se for opcional
    }
}, {
    tableName: 'users'
});

export default User;
