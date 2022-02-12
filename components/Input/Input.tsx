import styled from "styled-components";
interface Props {
  fontSize: string;
}
export const Input = styled.input<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1.2rem")};
  padding: 15px;
  border: none;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  background: #f4f4f4;
  border: 1px solid #c8c8c8;
`;
export const SearchInput = styled(Input)`
  width: 30rem;
`;

export const IconedInputContainer = styled.div`
  position: relative;
  input {
    padding-left: 3rem;
  }
  svg {
    position: absolute;
    left: 0.8rem;
    font-size: 1.6rem;
    color: #969696;
    top: 50%;
    transform: translateY(-50%);
  }
`;
