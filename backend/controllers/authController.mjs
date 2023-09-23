import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const SECRET_KEY = process.env.SECRET_KEY;

class AuthController {
    static generateToken(user) {
        return jwt.sign({ user_id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    }

    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(401).json({ message: 'Usuário não encontrado.' });
            }

            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(401).json({ message: 'Senha incorreta.' });
            }

            const token = AuthController.generateToken(user);
            res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    static async register(req, res) {
        const { email, password, name } = req.body;

        try {
            const existingUser = await User.findOne({ where: { email } });

            if (existingUser) {
                return res.status(400).json({ message: 'Este email já está em uso.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                email,
                password: hashedPassword,
                name
            });

            const token = AuthController.generateToken(newUser.id);
            res.status(201).json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}

export default AuthController;
