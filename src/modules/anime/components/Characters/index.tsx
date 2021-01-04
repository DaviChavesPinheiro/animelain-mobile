import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Anime, Character } from '../../pages/Anime';
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
  anime: Anime;
}

const Characters: React.FC<Props> = ({ anime }) => {
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
      {anime.animes_characters?.map(({ id, role, character }) => (
        <CharacterContainer
          key={id}
          activeOpacity={0.5}
          onPress={() => handleCharacterPress(character)}
        >
          <CharacterImage source={{ uri: character.profile_url }} />
          <CharacterMeta>
            <CharacterName>{character.name}</CharacterName>
            {role && <CharacterRole>{role}</CharacterRole>}
          </CharacterMeta>
        </CharacterContainer>
      ))}
    </Container>
  );
};

export default Characters;
