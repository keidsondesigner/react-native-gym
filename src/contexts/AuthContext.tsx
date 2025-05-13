import { useAuth } from '@hooks/useAuth';
import { createContext, ReactNode, useState } from 'react';

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState({
    id: '1',
    name: 'John Doe',
    email: 's0v7s@example.com',
    avatar: 'https://i.pravatar.cc/300',
  });

  // Atualiza o estado do usuário, após o login
  function signIn(email: string, password: string) {
    setUser({
        id: '',
        name: '',
        email: email,
        avatar: '',
    });
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
} 