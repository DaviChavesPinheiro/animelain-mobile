import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { createHttpLink, gql, useMutation } from '@apollo/client';
import client from '../../../shared/services/client';
import { CreateSession } from '../../../types/graphql-types';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: {
    id: string;
    url: string;
    width?: number | null;
    height?: number | null;
  } | null;
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

const CREATE_SESSION = gql`
  mutation CreateSession($email: String!, $password: String!) {
    createSession(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
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
`;

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState);
  const [createSession] = useMutation<CreateSession>(CREATE_SESSION);
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

        setAuthData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const response = await createSession({
        variables: {
          email,
          password,
        },
      });

      if (!response.data) throw new Error('SignIn CreateSession Error');

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

      setAuthData({ token, user });
    },
    [createSession],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@AnimeLain:token', '@AnimeLain:user']);

    setAuthData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@AnimeLain:user', JSON.stringify(user));

      setAuthData({
        token: authData.token,
        user,
      });
    },

    [authData.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: authData.user, signIn, signOut, updateUser, loading }}
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
