import { useNavigation } from '@react-navigation/native';

import React, { useCallback } from 'react';
import {
  ListMedia_media,
  ListMedia_media_characters_edges_node,
} from '../../../../types/graphql-types';

import {
  CharacterContainer,
  CharacterImage,
  CharacterMeta,
  CharacterName,
  CharacterRole,
  Container,
  Title,
} from './styles';

interface Props {
  media: ListMedia_media;
}

const Characters: React.FC<Props> = ({ media }) => {
  const navigation = useNavigation();

  const handleCharacterPress = useCallback(
    (character: ListMedia_media_characters_edges_node) => {
      navigation.navigate('Character', { character });
    },

    [navigation],
  );

  return (
    <Container>
      <Title>Personagens</Title>

      {media.characters.edges?.map(({ id, role, node }) => (
        <CharacterContainer
          key={id}
          activeOpacity={0.5}
          onPress={() => handleCharacterPress(node)}
        >
          <CharacterImage source={{ uri: node.coverImageUrl || undefined }} />

          <CharacterMeta>
            <CharacterName>{node.name}</CharacterName>

            {role && <CharacterRole>{role}</CharacterRole>}
          </CharacterMeta>
        </CharacterContainer>
      ))}
    </Container>
  );
};

export default Characters;
