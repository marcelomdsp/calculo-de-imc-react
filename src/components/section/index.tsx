import styled from "styled-components";
import media from "../../responsividade";
import Calculadora from "../calculadora";
import TextoInformativo from "../texto-informativo";

const StyledMain = styled.main`
  display: flex;
  height: 380px;
  align-items: center;
  justify-content: space-around;
  margin: 40px 20px;
  
  @media ${media.tablet} {
    flex-direction: column;
    height: auto;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <Calculadora />
      <TextoInformativo />
    </StyledMain>
  );
};

export default Main;
