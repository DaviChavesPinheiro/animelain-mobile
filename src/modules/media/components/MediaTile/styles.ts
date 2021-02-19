import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const MediaCard = styled(RectButton)`
  background-color: #1e1e1e;
  border-radius: 3px;
  width: 100px;
  height: 200px;
  overflow: hidden;

  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const MediaImage = styled.Image`
  width: 100%;
  height: 70%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const MediaMetaContainer = styled.View`
  height: 30%;
  padding: 8px;
`;

export const MediaTitle = styled.Text`
  font-size: 14px;
  line-height: 15px;
  color: white;
  font-family: 'Roboto-Regular';
  height: 30px;
`;

export const MediaDescription = styled.Text`
  font-size: 13px;
  color: #aaa;
  font-family: 'Roboto-Regular';
`;
