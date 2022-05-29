import styled from "styled-components";
interface Props {
  fontSize?: string;
  width?: string;
}
export const TextArea = styled.textarea<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1rem")};
  padding: 15px;
  border: none;
  /* box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.06); */
  border-radius: 7px;
  background: #2d3031;
  color: #ffffff;
  border: 1px solid #525759;
  width: ${(p) => p.width};
`;
