import { api } from '@services/api';
import { createContext, ReactNode, useState } from 'react';

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  // Atualiza o estado do usuário, após o login
  async function signIn(email: string, password: string) {
    // Faz a requisição para o backend
    try {
      const response = await api.post('/sessions', { email, password });
      console.log('response AuthContext', response.data);

      if (response.data.user) {
        // Se tiver um usuário, no retorno do response do backend
        // Atualiza o estado do usuário
        setUser(response.data.user);

        // Atualiza o header 'Authorization' com o token recebido no axios
        // api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }
    } catch (error) {
      throw error; // passo o erro para o componente que chamou a função
    }
  }

  return (
    // dados do contexto
    // O valor do contexto é o que será acessado em outros componentes
    // podem ser funções, estados, objetos, arrays, etc
    <AuthContext.Provider
      value={{ user, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
} 