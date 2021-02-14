import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { createHttpLink, gql } from '@apollo/client';
import client from '../../../shared/services/client';

interface User {
  id: string;
  name: string;
  email?: string;
  avatar: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(data: User): void;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@AnimeLain:token',
        '@AnimeLain:user',
      ]);

      if (token[1] && user[1]) {
        const link = createHttpLink({
          uri: 'http://192.168.0.49:3333/graphql',
          headers: {
            authorization: token ? `Bearer ${token[1]}` : '',
          },
        });

        client.setLink(link);

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await client.mutate({
      mutation: gql`
        mutation {
          createSession(
            input: { email: "${email}", password: "${password}" }
          ) {
            user {
              id
              name
              avatar {
                id
                url
                width
                height
              }
            }
            token
          }
        }
      `,
    });

    const { token, user } = response.data.createSession;

    await AsyncStorage.multiSet([
      ['@AnimeLain:token', token],
      ['@AnimeLain:user', JSON.stringify(user)],
    ]);

    const link = createHttpLink({
      uri: 'http://192.168.0.49:3333/graphql',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });

    client.setLink(link);

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@AnimeLain:token', '@AnimeLain:user']);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@AnimeLain:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },

    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth used outside an AuthContextProvider');
  }

  return context;
}
