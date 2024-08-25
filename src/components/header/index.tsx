import styled from "styled-components";
import { useImc } from "../context";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  text-align: center;
  color: #fafafa;
  margin-top: 0;
`;

const Header = () => {
  const { inicioRef } = useImc();
  return (
    <StyledHeader ref={inicioRef}>
      <h1>Seja bem vindo!</h1>
    </StyledHeader>
  );
};

export default Header;
