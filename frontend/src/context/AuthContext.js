import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);

    const login = () => {
        // Implemente a lógica de autenticação real aqui, como fazer uma chamada à API para verificar as credenciais.
        // Se o login for bem-sucedido, defina o estado authenticated como true.

        // Exemplo simplificado:
        setAuthenticated(true);
    };

    const logout = () => {
        // Implemente a lógica de logout aqui, como limpar o token de autenticação.

        // Exemplo simplificado:
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
