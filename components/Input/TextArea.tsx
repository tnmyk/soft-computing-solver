import styled from "styled-components";
interface Props {
  fontSize?: string;
  width?: string;
}
export const TextArea = styled.textarea<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1rem")};
  padding: 15px;
  border: none;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  background: #f4f4f4;
  border: 1px solid #c8c8c8;
  width: ${(p) => p.width};
`;
