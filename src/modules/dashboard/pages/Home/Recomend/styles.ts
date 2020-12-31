import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Anime } from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const ListContainer = styled.View`
  margin-top: 18px;
  margin-left: 18px;
`;
export const ListTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-family: 'Roboto-Medium';
  margin-bottom: 10px;
`;
export const HorizontalList = styled(FlatList as new () => FlatList<Anime>)``;

export const AnimeCard = styled(RectButton)`
  background-color: #1e1e1e;
  border-radius: 3px;
  width: 120px;
  height: 230px;
  overflow: hidden;

  margin-right: 10px;
`;

export const AnimeImage = styled.Image`
  width: 100%;
  height: 70%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const AnimeMetaContainer = styled.View`
  height: 30%;
  padding: 10px;
`;

export const AnimeTitle = styled.Text`
  font-size: 14px;
  color: white;
  font-family: 'Roboto-Regular';
`;
