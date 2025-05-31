import { createContext, ReactNode, useEffect, useState } from 'react';

import { storageUserGet, storageUserSave, storageUserRemove } from '@storage/storageUser';

import { api } from '@services/api';
import { set } from '@gluestack-style/react';

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
  // isLoadingUserStorageData: boolean; // Indica se os dados do usuário estão sendo carregados do Storage Local
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

  // Atualiza o estado do usuário, após o login
  async function signIn(email: string, password: string) {
    // Faz a requisição para o backend
    try {
      const response = await api.post('/sessions', { email, password });
      console.log('response AuthContext', response.data);

      // Se tiver um usuário, no retorno do response do backend
      if (response.data.user) {
        // Salva o usuario no estado setUser do AuthContext
        setUser(response.data.user);
        // Salva o usuário no AsyncStorage[Storage Local]
        storageUserSave(response.data.user);

        // Atualiza o header 'Authorization' com o token recebido no axios
        // api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }
    } catch (error) {
      throw error; // passo o erro para o componente que chamou a função
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      // limpo o estado do User, passando um objeto vazio;
      setUser({} as UserDTO);
      // Limpo o AsyncStorage[Storage Local], passando um objeto vazio
      await storageUserRemove();
      // Isso indica que o usuário não está mais logado no app

    } catch (error) {
      throw error; // passo o erro para o componente que chamou a função
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUserStorageData() {
    try {
      // Busco o usuário no AsyncStorage[Storage Local]
      // verifica se o usuário esta logado
      const userLogged = await storageUserGet();

      // Se o usuário existir, atualizo o estado do usuário
      // Se o usuário existir, ele está logado no app
      if (userLogged) {
        // Atualiza o estado com os dados do User do Storage Local
        setUser(userLogged);
      }
    } catch (error) {
      throw error; // passo o erro para o componente que chamou a função
    } finally {
      // Indica que os dados do User foram carregados do Storage Local
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    // Carrego o usuário do AsyncStorage[Storage Local] quando o app inicia
    loadUserStorageData();
  }, []);


  return (
    // dados do contexto
    // O valor do contexto é o que será acessado em outros componentes
    // podem ser funções, estados, objetos, arrays, etc
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isLoadingUserStorageData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
} 