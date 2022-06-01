import styled from "styled-components";
interface Props {
  fontSize?: string;
  width?: string;
}
export const TextArea = styled.textarea<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1rem")};
  padding: 15px;
  border: none;
  border-radius: 7px;
  background: #161b22;
  color: #ffffff;
  border: 1px solid #525759;
  width: ${(p) => p.width};
`;
