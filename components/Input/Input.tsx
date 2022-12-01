import styled from "styled-components";
interface Props {
  fontSize?: string;
  width?: string;
}
export const Input = styled.input<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1rem")};
  padding: 15px;
  border: none;
  border-radius: 7px;
  background: #161b22;
  border: 1px solid #525759;
  color: #c9d1d9;
  ::placeholder {
    color: #6e7681;
  }
  width: ${(p) => p.width};

  // Change
  outline: 1px;
`;

export const IconedInputContainer = styled.div`
  position: relative;
  width: 32rem;
  input {
    padding-left: 3rem;
    width: 100%;
  }
  svg {
    position: absolute;
    left: 0.8rem;
    font-size: 1.6rem;
    color: #969696;
    top: 50%;
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 1000px){
    width:80%;
  };

  @media only screen and (max-width: 500px){
    width:95%;
  };
`;
