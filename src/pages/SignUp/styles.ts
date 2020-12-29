import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;

  padding: 0px 15px;
`;

export const Logo = styled.Image`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: 'Roboto-Medium';

  margin: 100px 0 30px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #03a9f5;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  margin-left: 16px;
`;
