"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    username: string;
    fullName: string;
    role: string;
    department?: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check sessionStorage for existing session (Tab Specific)
        const storedToken = sessionStorage.getItem("token");
        const storedUser = sessionStorage.getItem("user");

        if (storedToken && storedUser) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            // Set default auth header for axios
            axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
        }
        setIsLoading(false);
    }, []);

    const login = (newToken: string, newUser: User) => {
        setToken(newToken);
        setUser(newUser);
        sessionStorage.setItem("token", newToken);
        sessionStorage.setItem("user", JSON.stringify(newUser));
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        // Redirect to dynamic user dashboard
        router.push(`/dashboard/${newUser.id}`);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];
        router.push("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isAuthenticated: !!token,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
