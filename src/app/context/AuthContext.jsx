"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const response = await fetch("https://shortnest-server-backend.vercel.app/api/auth/me", {
          credentials: "include",
        });
        
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.user) {
            setUser(result.user);
          }
        }
      } catch (error) {
        console.error("Session check error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, []);

 
  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("https://shortnest-server-backend.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });
      const result = await response.json();
      if (result.success) {
        setUser(result.user);
      }
      return result;
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Server error occurred." };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await fetch("https://shortnest-server-backend.vercel.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Register error:", error);
      return { success: false, message: "Server error occurred." };
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async (googleUserData) => {
    setLoading(true);
    try {
      const response = await fetch("https://shortnest-server-backend.vercel.app/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(googleUserData),
        credentials: "include",
      });
      const result = await response.json();
      if (result.success) {
        setUser(result.user);
      }
      return result;
    } catch (error) {
      console.error("Google Login error:", error);
      return { success: false, message: "Server error occurred during Google Login." };
    } finally {
      setLoading(false);
    }
  };

  
  const logout = async () => {
    try {
      await fetch("https://shortnest-server-backend.vercel.app/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, googleLogin, logout, setUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useRequireAuth() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user === null) {
      router.push("/login");
    }
  }, [user, loading, router]);

  return user;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}