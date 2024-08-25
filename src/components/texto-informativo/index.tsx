import styled from "styled-components";
import media from "../../responsividade";
import { useImc } from "../context";
import "animate.css";

const TextoDinamico = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: 400px;
  height: auto;
  background-color: rgba(34, 34, 34, 0.9);
  border-radius: 8px;
  line-height: 1.4em;
  color: #f5f5f5;
  padding: 20px;
  font-size: 20px;

  @media ${media.tablet} {
    margin-top: 25px;
  }

  @media ${media.mobile} {
    width: 300px;
    font-size: 15px;
    line-height: 1.2em;
  }
`;


//Componente que exibe um texto informativo
const TextoInformativo = () => {
  const { resultadoImc, textoRef } = useImc();
  const imc = Number(resultadoImc);

 

  //Texto explicativo sobre o IMC
  const textoInicial =
    " O Índice de Massa Corporal (IMC) é uma das principais ferramentas, adotada inclusive pela Organização Mundial de Saúde (OMS), para calcular o chamado “peso ideal”. Obtido a partir do peso e da altura do indivíduo, o IMC também aponta níveis de magreza e obesidade, que são usados para nortear o trabalho de profissionais de saúde e de educadores físicos.";

  //Função que define um texto informativo sobre cada grau de obesidade baseado no valor do IMC
  const setTexto = (valor = imc) => {
    const listaTexto = [
      "(Abaixo do normal): Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.",

      "(Normal): Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.",

      "(Sobrepeso): Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.",

      "(Obesidade grau I): Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.",

      "(Obesidade grau II): Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.",

      "(Obesidade grau III): Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.",
    ];

    if (valor >= 39.9) return listaTexto[5];
    if (valor >= 34.9) return listaTexto[4];
    if (valor >= 29.9) return listaTexto[3];
    if (valor >= 24.9) return listaTexto[2];
    if (valor >= 18.5) return listaTexto[1];
    if (valor < 18.5) return listaTexto[0];
  };

  return (
    <TextoDinamico ref={textoRef} className={imc ? "animate__animated animate__fadeInLeft" : ""}>
      {imc == 0 ? textoInicial : setTexto()}
    </TextoDinamico>
  );
};

export default TextoInformativo;
