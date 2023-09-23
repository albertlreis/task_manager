import jwt from 'jsonwebtoken';

const SECRET_KEY = 'sua_chave_secreta'; // Substitua pela sua chave secreta

export const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido.' });
        }

        req.user = user;
        next();
    });
};
