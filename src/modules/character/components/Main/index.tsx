import { gql, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import {
  CreateUserCharacter,
  DeleteUserCharacter,
  ListCharacter_character,
} from '../../../../types/graphql-types';
import { useAuth } from '../../../auth/hooks/auth';

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
  character?: ListCharacter_character;
  refetchCharacter(): Promise<any>;
}

const CREATE_USER_CHARACTER = gql`
  mutation CreateUserCharacter(
    $userId: String!
    $characterId: String!
    $userCharacterStatus: UserCharacterStatus!
  ) {
    createUserCharacter(
      input: {
        userId: $userId
        characterId: $characterId
        userCharacterStatus: $userCharacterStatus
      }
    ) {
      id
    }
  }
`;
const DELETE_USER_CHARACTER = gql`
  mutation DeleteUserCharacter(
    $userId: String!
    $characterId: String!
    $userCharacterStatus: UserCharacterStatus!
  ) {
    deleteUserCharacter(
      input: {
        userId: $userId
        characterId: $characterId
        userCharacterStatus: $userCharacterStatus
      }
    ) {
      id
    }
  }
`;

const Main: React.FC<Props> = ({ character, refetchCharacter }) => {
  const { user } = useAuth();

  const [createUserCharacter] = useMutation<CreateUserCharacter>(
    CREATE_USER_CHARACTER,
  );
  const [deleteUserCharacter] = useMutation<DeleteUserCharacter>(
    DELETE_USER_CHARACTER,
  );

  const handleToogleFavorite = useCallback(async () => {
    if (character?.isFavorited) {
      await deleteUserCharacter({
        variables: {
          userId: user.id,
          characterId: character?.id,
          userCharacterStatus: 'FAVORITE',
        },
      });
    } else {
      await createUserCharacter({
        variables: {
          userId: user.id,
          characterId: character?.id,
          userCharacterStatus: 'FAVORITE',
        },
      });
    }
    await refetchCharacter();
  }, [
    createUserCharacter,
    deleteUserCharacter,
    character?.id,
    character?.isFavorited,
    refetchCharacter,
    user.id,
  ]);

  const handleToogleFollow = useCallback(async () => {
    if (character?.isFollowed) {
      await deleteUserCharacter({
        variables: {
          userId: user.id,
          characterId: character?.id,
          userCharacterStatus: 'FOLLOW',
        },
      });
    } else {
      await createUserCharacter({
        variables: {
          userId: user.id,
          characterId: character?.id,
          userCharacterStatus: 'FOLLOW',
        },
      });
    }
    await refetchCharacter();
  }, [
    createUserCharacter,
    deleteUserCharacter,
    character?.id,
    character?.isFollowed,
    refetchCharacter,
    user.id,
  ]);

  return (
    <Container>
      <BannerImage source={{ uri: character?.bannerImageUrl || undefined }} />

      <ProfileImage source={{ uri: character?.coverImageUrl || undefined }} />

      <Title>{character?.name}</Title>

      <Author>Por Naoki Urasawa</Author>

      <ButtonsContainer>
        <Button>
          <FeatherIcons name="play" />

          <ButtonLabel>Assistir</ButtonLabel>
        </Button>

        <Button onPress={handleToogleFollow}>
          <FeatherIcons name={character?.isFollowed ? 'bell' : 'bell-off'} />

          <ButtonLabel>
            {character?.isFollowed ? 'Seguindo' : 'Seguir'}
          </ButtonLabel>
        </Button>

        <Button onPress={handleToogleFavorite}>
          <IoniconsIcons
            name={character?.isFavorited ? 'heart' : 'heart-outline'}
            color={character?.isFavorited ? '#f50303' : '#03a9f5'}
          />

          <ButtonLabel>
            {character?.isFavorited ? 'Favoritado' : 'Favoritar'}
          </ButtonLabel>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Main;
