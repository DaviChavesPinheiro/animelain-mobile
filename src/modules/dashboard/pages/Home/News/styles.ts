import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Anime } from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const ListContainer = styled.View``;
export const ListTitle = styled.Text`
  font-size: 16px;
  color: white;
  font-family: 'Roboto-Regular';
`;
export const HorizontalList = styled(FlatList as new () => FlatList<Anime>)``;
