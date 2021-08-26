import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container type="button" {...rest}>{children}</Container>
)

export default Button;