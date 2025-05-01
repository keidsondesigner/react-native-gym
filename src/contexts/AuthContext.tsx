import { createContext, ReactNode } from 'react';

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export type AuthContextDataProps = {
  user: UserDTO;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: '1',
          name: 'John Doe',
          email: 's0v7s@example.com',
          avatar: 'https://i.pravatar.cc/300',
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
} 