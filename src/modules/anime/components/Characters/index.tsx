import React from 'react';
import {
  Character,
  CharacterImage,
  CharacterMeta,
  CharacterName,
  CharacterRole,
  Container,
  Title,
} from './styles';

interface Character {
  id: string;
  name: string;
  profile_url: string;
  age: number;
}

interface Props {
  characters?: Character[];
}

const Characters: React.FC<Props> = ({ characters }) => {
  return (
    <Container>
      <Title>Personagens</Title>
      {characters?.map(character => (
        <Character key={character.id} activeOpacity={0.5}>
          <CharacterImage source={{ uri: character.profile_url }} />
          <CharacterMeta>
            <CharacterName>{character.name}</CharacterName>
            <CharacterRole>Principal</CharacterRole>
          </CharacterMeta>
        </Character>
      ))}
    </Container>
  );
};

export default Characters;
