/*ContextAPI para gerenciar um estado global 
compartilhando o valor do resultado do IMC para outos componentes 
e gerar interatividade com o usuário*/

import { createContext, useState, ReactNode, useContext, useRef } from "react";

interface ImcContextProps {
  resultadoImc: null | number;
  setResultadoImc: (value: number | null) => void;
  textoRef: React.RefObject<HTMLDivElement>;
  inicioRef: React.RefObject<HTMLDivElement>;
}

const ImcContext = createContext<ImcContextProps | undefined>(undefined);

export const ImcProvider = ({ children }: { children: ReactNode }) => {
  const [resultadoImc, setResultadoImc] = useState<number | null>(null);

  // Referência para o elemento de Texto
  const textoRef = useRef<HTMLDivElement>(null);
  const inicioRef = useRef<HTMLDivElement>(null);

  return (
    <ImcContext.Provider
      value={{ resultadoImc, setResultadoImc, textoRef, inicioRef }}
    >
      {children}
    </ImcContext.Provider>
  );
};

export const useImc = () => {
  const context = useContext(ImcContext);
  if (!context) {
    throw new Error("useImc deve ser usado dentro de um ImcProvider");
  }
  return context;
};
