import styled, { css } from "styled-components";

interface IconButtonProps {
  size: string;
  fontSize?: string;
}
export const IconButon = styled.button<IconButtonProps>`
  ${({ size }) =>
    size &&
    `
    width: ${size};
    height:${size};
  `}
  font-size: ${(p) => p.fontSize};
  border: none;
  border: 1px solid gray;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
