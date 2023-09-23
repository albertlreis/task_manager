import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Container, TextField, Typography} from '@mui/material';
import api from "../api/api";
import {useAuth} from "../context/AuthContext";

function Login() {
    const {login} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async () => {
        setError('');

        try {
            const response = await api.post('/auth/login', {
                email,
                password,
            });

            // Verifique se a resposta foi bem-sucedida e faça as ações necessárias, como definir o estado de autenticação.
            if (response.status === 200) {
                const token = response.data.token;
                login();
                localStorage.setItem('token', token);
                history.push('/');
            } else {
                setError('Falha ao fazer login. Verifique seu e-mail e senha.');
            }
        } catch (error) {
            setError('Falha ao fazer login. Verifique seu e-mail e senha.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <div>
                <TextField
                    label="Email"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Senha"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <Typography variant="body2" color="error" align="center" paragraph>
                        {error}
                    </Typography>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                >
                    Entrar
                </Button>
            </div>
        </Container>
    );
}

export default Login;
