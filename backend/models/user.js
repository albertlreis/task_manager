// models/user.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

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
  full_name: {
    type: DataTypes.STRING,
    allowNull: true, // Defina como true se for opcional
  },
  oauth_provider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  oauth_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
