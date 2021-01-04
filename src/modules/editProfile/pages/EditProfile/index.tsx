/* eslint-disable no-unused-expressions */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useAuth } from '../../../auth/hooks/auth';
import {
  Avatar,
  CancelButton,
  CancelText,
  Container,
  Header,
  SaveButton,
  SaveText,
  Error,
} from './styles';
import Input from '../../../../shared/components/Input';
import api from '../../../../shared/services/api';
import getValidationErrors from '../../../../shared/utils/getValidationErrors';

interface SaveProfileData {
  email: string;
  password: string;
}

const EditProfile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSaveProfileData = useCallback(
    async (data: SaveProfileData) => {
      try {
        formRef.current?.setErrors({});
        setErrorMessage(null);
        setSaving(true);

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.put('/profile', data);

        updateUser(response.data);

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        if (err.isAxiosError) {
          switch (err.response.data.message) {
            case 'E-mail already in use.':
              setErrorMessage('Esse e-mail já está cadastrado, sempai.');
              break;
            default:
              setErrorMessage('Ocorreu algum erro de validação, sempai.');
              break;
          }
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente mais tarde, sempai.',
        );
      } finally {
        setSaving(false);
      }
    },
    [navigation, updateUser],
  );

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <Container>
        <Header>
          <CancelButton onPress={() => navigation.goBack()}>
            <CancelText>Cancelar</CancelText>
          </CancelButton>
          <SaveButton onPress={() => formRef.current?.submitForm()}>
            <SaveText>{saving ? 'Salvando' : 'Salvar'}</SaveText>
          </SaveButton>
        </Header>
        <ScrollView style={{ padding: 10 }}>
          <Avatar source={{ uri: user.avatar_url }} />

          <Form
            initialData={user}
            ref={formRef}
            onSubmit={handleSaveProfileData}
            style={{ marginTop: 40 }}
          >
            <Input
              autoCapitalize="words"
              name="name"
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
            />

            <Input
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
            />

            {errorMessage && <Error>{errorMessage}</Error>}
          </Form>
        </ScrollView>
      </Container>
    </>
  );
};

export default EditProfile;
