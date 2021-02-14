import { useNavigation } from '@react-navigation/native';

import React, { useCallback } from 'react';

import { Media, Character } from '../../pages/Media';

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
  media: Media;
}

const Characters: React.FC<Props> = ({ media }) => {
  const navigation = useNavigation();

  const handleCharacterPress = useCallback(
    (character: Character) => {
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
          <CharacterImage source={{ uri: node.coverImageUrl }} />

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
