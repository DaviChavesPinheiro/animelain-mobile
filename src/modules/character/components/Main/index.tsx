import { gql, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { useAuth } from '../../../auth/hooks/auth';

import { Character } from '../../pages/Character';

import {
  Author,
  BannerImage,
  Button,
  ButtonLabel,
  ButtonsContainer,
  Container,
  FeatherIcons,
  IoniconsIcons,
  ProfileImage,
  Title,
} from './styles';

interface Props {
  character: Character;
  refetchCharacter(): Promise<any>;
}

const CREATE_USER_CHARACTER = gql`
  mutation CreateUserCharacter($userId: String!, $characterId: String!) {
    createUserCharacter(
      input: {
        userId: $userId
        characterId: $characterId
        userCharacterStatus: FAVORITE
      }
    ) {
      id
    }
  }
`;
const DELETE_USER_CHARACTER = gql`
  mutation DeleteUserCharacter($userId: String!, $characterId: String!) {
    deleteUserCharacter(
      input: {
        userId: $userId
        characterId: $characterId
        userCharacterStatus: FAVORITE
      }
    ) {
      id
    }
  }
`;

const Main: React.FC<Props> = ({ character, refetchCharacter }) => {
  const { user } = useAuth();

  const [createUserCharacter] = useMutation(CREATE_USER_CHARACTER);
  const [deleteUserCharacter] = useMutation(DELETE_USER_CHARACTER);

  const handleToogleFavorite = useCallback(async () => {
    if (character.isFavorited) {
      await deleteUserCharacter({
        variables: {
          userId: user.id,
          characterId: character.id,
        },
      });
      await refetchCharacter();
    } else {
      await createUserCharacter({
        variables: {
          userId: user.id,
          characterId: character.id,
        },
      });
      await refetchCharacter();
    }
  }, [
    createUserCharacter,
    deleteUserCharacter,
    character.id,
    character.isFavorited,
    refetchCharacter,
    user.id,
  ]);

  return (
    <Container>
      <BannerImage source={{ uri: character.bannerImageUrl }} />

      <ProfileImage source={{ uri: character.coverImageUrl }} />

      <Title>{character.name}</Title>

      <Author>Por Naoki Urasawa</Author>

      <ButtonsContainer>
        <Button>
          <FeatherIcons name="play" />

          <ButtonLabel>Assistir</ButtonLabel>
        </Button>

        <Button>
          <FeatherIcons name="bell" />

          <ButtonLabel>Seguir</ButtonLabel>
        </Button>

        <Button onPress={handleToogleFavorite}>
          <IoniconsIcons
            name={character.isFavorited ? 'heart' : 'heart-outline'}
            color={character.isFavorited ? '#f50303' : '#03a9f5'}
          />

          <ButtonLabel>
            {character.isFavorited ? 'Favoritado' : 'Favoritar'}
          </ButtonLabel>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Main;
