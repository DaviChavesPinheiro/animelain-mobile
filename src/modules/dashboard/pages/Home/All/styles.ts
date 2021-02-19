import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Media } from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const ListContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 0px;
`;

export const List = styled(FlatList as new () => FlatList<Media>)``;
