import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const Header = styled.View`
  background-color: #000;
  flex-direction: row;
  padding: 16px;

  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const CancelButton = styled.TouchableOpacity``;

export const CancelText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const SaveButton = styled.TouchableOpacity``;

export const SaveText = styled.Text`
  color: #03a9f5;
  font-size: 18px;
`;

export const Avatar = styled.Image`
  width: 128px;
  height: 128px;

  border-radius: 64px;

  align-self: center;
  margin-top: 10px;
  border-color: #1e1e1e;
  border-width: 3px;
`;

export const Error = styled.Text`
  color: #e87c03;
  font-size: 13px;
  margin: 5px 0px 8px;
  padding-left: 5px;
  align-self: center;
`;
