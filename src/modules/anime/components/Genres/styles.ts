import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
  padding: 10px;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-family: 'Roboto-Medium';
  width: 100%;
  margin-bottom: 10px;
`;

export const GenreButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;

  margin: 0px 5px;
  margin-bottom: 15px;

  border-radius: 5px;
  border-width: 1px;
  border-color: #aaa;
`;

export const GenreText = styled.Text`
  color: #aaa;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;
