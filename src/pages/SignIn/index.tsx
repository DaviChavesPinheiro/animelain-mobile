import React, { useCallback, useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { TextInput } from 'react-native';
import {
  Container,
  Title,
  ForgotPasswordText,
  ForgotPassword,
  CreateAccountButton,
  CreateAccountButtonText,
  Logo,
} from './styles';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <ScrollView style={{ marginBottom: 42 }}>
        <Logo source={logoImg} resizeMode="contain" />
        <Title>Entrar</Title>

        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />

          <Input
            ref={passwordInputRef}
            secureTextEntry
            autoCapitalize="none"
            name="password"
            icon="lock"
            placeholder="Senha"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />

          <Button
            style={{ marginTop: 35 }}
            onPress={() => formRef.current?.submitForm()}
          >
            Entrar
          </Button>
        </Form>

        <ForgotPassword style={{ marginBottom: 30 }}>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </ScrollView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#03a9f5" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </Container>
  );
};

export default SignIn;
