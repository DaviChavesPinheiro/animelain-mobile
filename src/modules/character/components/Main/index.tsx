import { gql, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import {
  CreateUserCharacter,
  CreateUserCharacterVariables,
  DeleteUserCharacter,
  ListCharacter_character,
} from '../../../../types/graphql-types';
import { useAuth } from '../../../auth/hooks/auth';
import { LIST_CHARACTER } from '../../pages/Character';

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
  character: ListCharacter_character;
}

// eslint-disable-next-line no-shadow
enum UserCharacterStatus {
  FAVORITE = 'FAVORITE',
  FOLLOW = 'FOLLOW',
  HATE = 'HATE',
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
      userCharacterStatus
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
      userCharacterStatus
    }
  }
`;

const Main: React.FC<Props> = ({ character }) => {
  const { user } = useAuth();

  const [createUserCharacter] = useMutation<
    CreateUserCharacter,
    CreateUserCharacterVariables
  >(CREATE_USER_CHARACTER, {
    update(cache, fetchData) {
      if (
        fetchData.data?.createUserCharacter.userCharacterStatus ===
        UserCharacterStatus.FAVORITE
      ) {
        cache.writeQuery({
          query: LIST_CHARACTER,
          variables: {
            id: character.id,
          },
          data: {
            character: {
              isFavorited: true,
            },
          },
        });
      } else if (
        fetchData.data?.createUserCharacter.userCharacterStatus ===
        UserCharacterStatus.FOLLOW
      ) {
        cache.writeQuery({
          query: LIST_CHARACTER,
          variables: {
            id: character.id,
          },
          data: {
            character: {
              isFollowed: true,
            },
          },
        });
      }
    },
  });
  const [deleteUserCharacter] = useMutation<DeleteUserCharacter>(
    DELETE_USER_CHARACTER,
    {
      update(cache, fetchData) {
        if (
          fetchData.data?.deleteUserCharacter.userCharacterStatus ===
          UserCharacterStatus.FAVORITE
        ) {
          cache.writeQuery({
            query: LIST_CHARACTER,
            variables: {
              id: character.id,
            },
            data: {
              character: {
                isFavorited: false,
              },
            },
          });
        } else if (
          fetchData.data?.deleteUserCharacter.userCharacterStatus ===
          UserCharacterStatus.FOLLOW
        ) {
          cache.writeQuery({
            query: LIST_CHARACTER,
            variables: {
              id: character.id,
            },
            data: {
              character: {
                isFollowed: false,
              },
            },
          });
        }
      },
    },
  );

  const handleToogleFavorite = useCallback(async () => {
    if (character?.isFavorited) {
      await deleteUserCharacter({
        variables: {
          userId: user.id,
          characterId: character?.id,
          userCharacterStatus: UserCharacterStatus.FAVORITE,
        },
      });
    } else {
      await createUserCharacter({
        variables: {
          userId: user.id,
          characterId: character?.id,
          userCharacterStatus: UserCharacterStatus.FAVORITE,
        },
      });
    }
  }, [
    createUserCharacter,
    deleteUserCharacter,
    character?.id,
    character?.isFavorited,
    user.id,
  ]);

  const handleToogleFollow = useCallback(async () => {
    if (character?.isFollowed) {
      await deleteUserCharacter({
        variables: {
          userId: user.id,
          characterId: character?.id,
          userCharacterStatus: UserCharacterStatus.FOLLOW,
        },
      });
    } else {
      await createUserCharacter({
        variables: {
          userId: user.id,
          characterId: character?.id,
          userCharacterStatus: UserCharacterStatus.FOLLOW,
        },
      });
    }
  }, [
    createUserCharacter,
    deleteUserCharacter,
    character?.id,
    character?.isFollowed,
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
