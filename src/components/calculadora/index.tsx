import Formulario from "../formulario";
import Resultado from "../resultado";
import styled from "styled-components";
import media from "../../responsividade";

const StyledCalculadora = styled.div`
  display: flex;
  flex-flow: column;
  background-color: rgba(34, 34, 34, 0.9);
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  height: auto;
  text-align: center;
  align-items: center;
  color: #f5f5f5;
 

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
  }

  @media ${media.tablet} {
    margin-bottom: 25px;
  }

  @media ${media.mobile} {
    width: 300px;

    h2 {
      margin-bottom: 8px;
      font-size: 20px;
    }

    p {
      margin-bottom: 18px;
      font-size: 14px;
    }
  }
`;

const Calculadora = () => {
  return (
    <StyledCalculadora>
      <p>
        Digite seus dados nos campos abaixo para obter o seu resultado de índice
        de massa corporal e saber se você está no peso ideal.
      </p>
      <Formulario />
      <Resultado />
    </StyledCalculadora>
  );
};

export default Calculadora;
