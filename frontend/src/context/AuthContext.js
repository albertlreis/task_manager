import React, {createContext, useContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Verificar a persistência da autenticação ao carregar a página
        const token = Cookies.get('token');
        if (token) {
            // Você pode fazer uma chamada à API para verificar a validade do token aqui
            // Se o token for válido, defina authenticated como true
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = () => {
        // Implemente a lógica de autenticação real aqui, como fazer uma chamada à API para verificar as credenciais.
        // Se o login for bem-sucedido, defina o estado authenticated como true.

        // Exemplo simplificado:
        setAuthenticated(true);
    };

    const logout = () => {
        // Implemente a lógica de logout aqui, como limpar o token de autenticação.

        // Exemplo simplificado:
        Cookies.remove('token')
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
