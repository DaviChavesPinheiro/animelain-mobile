import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { QueryAllMedias_page_medias } from '../../../../../types/graphql-types';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const ListContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 0px;
`;

export const List = styled(
  FlatList as new () => FlatList<QueryAllMedias_page_medias>,
)``;
