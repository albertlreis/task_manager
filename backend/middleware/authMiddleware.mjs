import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    jwt.verify(token, SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.status(403).json({ message: 'Token inválido.' });
        }

        req.user_id = decoded.user_id;
        req.email = decoded.email;
        next();
    });
};
