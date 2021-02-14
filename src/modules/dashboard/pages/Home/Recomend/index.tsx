import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../../../shared/services/api';
import {
  MediaAuthor,
  MediaCard,
  MediaImage,
  MediaMetaContainer,
  MediaTitle,
  Container,
  HorizontalList,
  ListContainer,
  ListTitle,
} from './styles';

export interface Media {
  id: string;
  title: string;
  profile_url?: string;
}

const Recomend: React.FC = () => {
  const [medias, setMedias] = useState<Media[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get('/medias').then(response => {
      setMedias(response.data);
    });
  }, []);

  const handleMediaCardPress = useCallback(
    (media: Media) => {
      navigation.navigate('Media', { media });
    },
    [navigation],
  );

  return (
    <Container>
      <ScrollView>
        <ListContainer>
          <ListTitle>Seinen</ListTitle>
          <HorizontalList
            data={medias}
            keyExtractor={media => media.id}
            renderItem={({ item: media }) => (
              <MediaCard onPress={() => handleMediaCardPress(media)}>
                <MediaImage source={{ uri: media.profile_url }} />
                <MediaMetaContainer>
                  <MediaTitle numberOfLines={2}>{media.title}</MediaTitle>
                  <MediaAuthor numberOfLines={1}>Naoki Urasawa</MediaAuthor>
                </MediaMetaContainer>
              </MediaCard>
            )}
            horizontal
          />
        </ListContainer>
        <ListContainer>
          <ListTitle>Ação</ListTitle>
          <HorizontalList
            data={medias}
            keyExtractor={media => media.id}
            renderItem={({ item: media }) => (
              <MediaCard onPress={() => handleMediaCardPress(media)}>
                <MediaImage source={{ uri: media.profile_url }} />
                <MediaMetaContainer>
                  <MediaTitle numberOfLines={2}>{media.title}</MediaTitle>
                  <MediaAuthor numberOfLines={1}>Naoki Urasawa</MediaAuthor>
                </MediaMetaContainer>
              </MediaCard>
            )}
            horizontal
          />
        </ListContainer>
        <ListContainer>
          <ListTitle>Shounen</ListTitle>
          <HorizontalList
            data={medias}
            keyExtractor={media => media.id}
            renderItem={({ item: media }) => (
              <MediaCard onPress={() => handleMediaCardPress(media)}>
                <MediaImage source={{ uri: media.profile_url }} />
                <MediaMetaContainer>
                  <MediaTitle numberOfLines={2}>{media.title}</MediaTitle>
                  <MediaAuthor numberOfLines={1}>Naoki Urasawa</MediaAuthor>
                </MediaMetaContainer>
              </MediaCard>
            )}
            horizontal
          />
        </ListContainer>
        <ListContainer>
          <ListTitle>Ecchi</ListTitle>
          <HorizontalList
            data={medias}
            keyExtractor={media => media.id}
            renderItem={({ item: media }) => (
              <MediaCard onPress={() => handleMediaCardPress(media)}>
                <MediaImage source={{ uri: media.profile_url }} />
                <MediaMetaContainer>
                  <MediaTitle numberOfLines={2}>{media.title}</MediaTitle>
                  <MediaAuthor numberOfLines={1}>Naoki Urasawa</MediaAuthor>
                </MediaMetaContainer>
              </MediaCard>
            )}
            horizontal
          />
        </ListContainer>
      </ScrollView>
    </Container>
  );
};

export default Recomend;
