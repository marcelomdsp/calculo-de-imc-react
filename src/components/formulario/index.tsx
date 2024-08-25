import styled from "styled-components";
import { useState, FormEvent } from "react";
import { useImc } from "../context";
import media from "../../responsividade";

interface ButtonProps {
  bgColor?: string;
  type: string;
}

export const StyledButton = styled.button<ButtonProps>`
  width: 80px;
  padding: 10px 20px;
  color: #fafafa;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#007bff")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.bgColor ? "#ab0202" : "#0056b3")};
  }
`;

const StyledFormulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #fafafa;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #555555;
    border-radius: 4px;
    font-size: 14px;
    background-color: #222222;
    color: #fafafa;

    &:focus {
      outline: 1px solid #007bff;
    }
  }

  .botoes {
    display: flex;
    gap: 15px;
  }

  .error {
    color: #ff4d4f;
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media ${media.mobile} {
    width: 200px;
  }
`;

const calcular = (
  event: FormEvent,
  inputPeso: string,
  inputAltura: string,
  setResultadoImc: (value: number) => void,
  setError: (value: string) => void,
  textoRef: React.RefObject<HTMLElement>
) => {
  event.preventDefault();

  //Converte os inputs de string para numero de ponto flutuante
  const peso = parseFloat(inputPeso);
  const altura = parseFloat(inputAltura);

  //Valida os inputs e trata error caso haja erro de digitação do usuário
  if (!peso || peso <= 0) {
    setError("Peso inválido! Insira um valor positivo.");
    return;
  }

  if (!altura || altura <= 0) {
    setError("Altura inválida! Insira um valor positivo.");
    return;
  }

  const resultado = peso / altura ** 2; //Calcula o imc atravás da fórmula
  const resultadoImc = Number(resultado.toFixed(2));  //Converte o resultado para number
  setResultadoImc(resultadoImc);

  setError(""); // Limpa o erro ao calcular com sucesso

  rolarParaElemento(textoRef); //Rolar para elemento de texto (mobile)

};

// função que rola a página ao calcular (mobile)
const rolarParaElemento = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};

//Componente de formulário
const Formulario = () => {
  const [inputPeso, setInputPeso] = useState("");
  const [inputAltura, setInputAltura] = useState("");
  const { resultadoImc, setResultadoImc, inicioRef, textoRef } = useImc();
  const [error, setError] = useState("");

  //Funçao para limpar os dados e deixar os campos em branco novamente
  const limparCampos = () => {
    setInputPeso("");
    setInputAltura("");
    setResultadoImc(null);
    setError("");
    rolarParaElemento(inicioRef); //Rolar para o topo após limpar (mobile)
  };

  return (
    <StyledFormulario
      onSubmit={(event) =>
        calcular(
          event,
          inputPeso,
          inputAltura,
          setResultadoImc,
          setError,
          textoRef
        )
      }
    >
      <label htmlFor="peso">Peso (ex.: 69,2)</label>
      <input
        id="peso"
        type="text"
        required
        inputMode="decimal"
        placeholder="Digite seu peso"
        value={inputPeso}
        onChange={(e) => setInputPeso(e.target.value.replace(",", "."))} // Troca as vírgulas por ponto para prevanir erros nos cálculos
      />
      {error && error.includes("Peso") && (
        <p aria-live="polite" className="error">
          {error}
        </p>
      )}

      <label htmlFor="altura">Altura (ex.: 1,70)</label>
      <input
        id="altura"
        type="text"
        required
        inputMode="decimal"
        placeholder="Digite sua altura"
        value={inputAltura}
        onChange={(e) =>
          setInputAltura(
            e.target.value.replace(",", ".").replace(/^(\d)(\d+)/, "$1.$2") // Aqui troca virgula por pontos e adiciona ponto quando não digitado
          )
        }
      />
      {error && error.includes("Altura") && (
        <p aria-live="polite" className="error">
          {error}
        </p>
      )}
      <div className="botoes">
        <StyledButton type="submit">Obter</StyledButton>

        {resultadoImc ? (
          <StyledButton bgColor="red" type="button" onClick={limparCampos}>
            Limpar
          </StyledButton>
        ) : (
          ""
        )}
      </div>
    </StyledFormulario>
  );
};

export default Formulario;
