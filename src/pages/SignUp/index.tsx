import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView style={{ marginBottom: 42 }}>
        <Logo source={logoImg} resizeMode="contain" />
        <Title>Cadastro</Title>

        <Input name="name" icon="user" placeholder="Nome" />

        <Input name="email" icon="mail" placeholder="E-mail" />

        <Input name="password" icon="lock" placeholder="Senha" />

        <Button style={{ marginTop: 35, marginBottom: 30 }}>Cadastrar</Button>
      </ScrollView>

      <CreateAccountButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#03a9f5" />
        <CreateAccountButtonText>Ir para Login</CreateAccountButtonText>
      </CreateAccountButton>
    </Container>
  );
};

export default SignUp;
