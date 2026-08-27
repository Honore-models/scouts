'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

/* ═══════════════════════════════════════════════════════════════
   Mock user database (simulates backend)
   ═══════════════════════════════════════════════════════════════ */

interface StoredUser extends User {
  password: string;
}

const INITIAL_MOCK_USERS: StoredUser[] = [
  {
    id: '1',
    name: 'Ivan Hirwa',
    email: 'ivan@scoutts.com',
    password: 'password123',
    avatar: '/avatar.png',
    username: '@ivanhirwa',
  },
  {
    id: '2',
    name: 'David Kim',
    email: 'david@scoutts.com',
    password: 'password123',
    avatar: '/avatar.png',
    username: '@davidkim',
  },
  {
    id: '3',
    name: 'Cenat',
    email: 'cenat@scoutts.com',
    password: 'password123',
    avatar: '/avatar.png',
    username: '@cenat',
  },
];

function getUsers(): StoredUser[] {
  if (typeof window === 'undefined') return INITIAL_MOCK_USERS;
  const stored = localStorage.getItem('scoutts_users');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('scoutts_users', JSON.stringify(INITIAL_MOCK_USERS));
  return INITIAL_MOCK_USERS;
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem('scoutts_users', JSON.stringify(users));
}

/* ═══════════════════════════════════════════════════════════════
   Context
   ═══════════════════════════════════════════════════════════════ */

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('scoutts_current_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('scoutts_current_user');
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));

    const users = getUsers();
    const found = users.find((u) => u.email === email && u.password === password);

    if (!found) {
      return { success: false, error: 'Invalid email or password' };
    }

    const loggedInUser: User = {
      id: found.id,
      name: found.name,
      email: found.email,
      avatar: found.avatar,
      username: found.username,
    };

    setUser(loggedInUser);
    localStorage.setItem('scoutts_current_user', JSON.stringify(loggedInUser));
    return { success: true };
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));

    const users = getUsers();

    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      return { success: false, error: 'An account with this email already exists' };
    }

    const newUser: StoredUser = {
      id: String(users.length + 1),
      name,
      email,
      password,
      avatar: '/avatar.png',
      username: `@${name.toLowerCase().replace(/\s+/g, '')}`,
    };

    users.push(newUser);
    saveUsers(users);

    const signedUpUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
      username: newUser.username,
    };

    setUser(signedUpUser);
    localStorage.setItem('scoutts_current_user', JSON.stringify(signedUpUser));
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('scoutts_current_user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
