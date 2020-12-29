import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  backgroundColor?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  color,
  ...rest
}) => {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <ButtonText color={color}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
