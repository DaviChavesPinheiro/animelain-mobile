import React, { useCallback, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { TextInput } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  Logo,
  Title,
} from './styles';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <ScrollView style={{ marginBottom: 42 }}>
        <Logo source={logoImg} resizeMode="contain" />
        <Title>Cadastro</Title>
        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input
            autoCapitalize="words"
            name="name"
            icon="user"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current?.focus();
            }}
          />

          <Input
            ref={emailInputRef}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
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
            style={{ marginTop: 35, marginBottom: 30 }}
            onPress={() => formRef.current?.submitForm()}
          >
            Cadastrar
          </Button>
        </Form>
      </ScrollView>

      <CreateAccountButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#03a9f5" />
        <CreateAccountButtonText>Ir para Login</CreateAccountButtonText>
      </CreateAccountButton>
    </Container>
  );
};

export default SignUp;
