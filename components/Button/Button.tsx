import styled from "styled-components";

interface ButtonProps {
  size?: string;
  fontSize?: string;
}
export const IconButon = styled.button<ButtonProps>`
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
  cursor: pointer;
`;

export const Button = styled.button<ButtonProps>`
  font-size: ${(p) => p.fontSize};
  padding: 0.6rem 0.9rem;
  border: none;
  border: 1px solid gray;
  background: #161b22;

  border: 1px solid #525759;
  color: var(--white);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
