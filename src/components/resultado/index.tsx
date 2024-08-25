import styled from "styled-components";
import { useImc } from "../context";

interface StyledResultadoProps {
  bgColor: string | undefined;
}

//Funcão que define uma cor de fundo para o resultado baseado no valor do IMC
const getCorDeFundo = (imc: number) => {
  const listaCores = ["#ff8f8f", "#fbb967", "#fee47a", "#fdff8c", "#82ffb0"];
  if (imc >= 39.9) return listaCores[0];
  if (imc >= 34.9) return listaCores[1];
  if (imc >= 29.9) return listaCores[2];
  if (imc >= 24.9) return listaCores[3];
  if (imc >= 18.5) return listaCores[4];
  if (imc < 18.5 && imc > 0) return listaCores[0];
};

const StyledResultado = styled.div<StyledResultadoProps>`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  margin-top: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 4px;
  background-color: ${(props) => props.bgColor || "#d4d1d1ca"};
  color: #333333;
`;

//Componente que exibe o resultado
const Resultado = () => {
  const { resultadoImc} = useImc();
  const imc = resultadoImc ? Number(resultadoImc) : 0;
  const bgColor = getCorDeFundo(imc);

  //Função que define os graus de obesidade baseado no valor do IMC
  const grausResultado = (valor = imc) => {
    const listaGraus = [
      '"Abaixo do normal"',
      '"Normal"',
      '"Sobrepeso"',
      '"Obesidade grau I"',
      '"Obesidade grau II"',
      '"Obesidade grau III"',
    ];
    if (valor >= 39.9) return listaGraus[5];
    if (valor >= 34.9) return listaGraus[4];
    if (valor >= 29.9) return listaGraus[3];
    if (valor >= 24.9) return listaGraus[2];
    if (valor >= 18.5) return listaGraus[1];
    if (valor < 18.5) return listaGraus[0];
  };

  return (
    resultadoImc && <StyledResultado bgColor={bgColor}>
      <span>{`Seu IMC é ${resultadoImc} - ${grausResultado()}`}</span>
    </StyledResultado>
    
  );
};

export default Resultado;
