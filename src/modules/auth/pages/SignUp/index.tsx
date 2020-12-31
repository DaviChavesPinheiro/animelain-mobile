import React, { useCallback, useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Alert, TextInput } from 'react-native';
import * as Yup from 'yup';
import Button from '../../../../shared/components/Button';
import Input from '../../../../shared/components/Input';
import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  Logo,
  Title,
  Error,
} from './styles';

import logoImg from '../../../../assets/logo.png';
import getValidationErrors from '../../../../shared/utils/getValidationErrors';
import api from '../../../../shared/services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        setErrorMessage(null);

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        if (err.isAxiosError) {
          switch (err.response.data.message) {
            case 'Email address already taken':
              setErrorMessage('Esse e-mail já está cadastrado, sempai.');
              break;
            default:
              break;
          }
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente mais tarde, sempai.',
        );
      }
    },
    [navigation],
  );

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
          {errorMessage && <Error>{errorMessage}</Error>}
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
