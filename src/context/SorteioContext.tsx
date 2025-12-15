import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Pergunta, SorteioContextType } from '../types';
import perguntasData from '../data/perguntas.json';

const SorteioContext = createContext<SorteioContextType | undefined>(undefined);

export const useSorteio = () => {
  const context = useContext(SorteioContext);
  if (!context) {
    throw new Error('useSorteio deve ser usado dentro de SorteioProvider');
  }
  return context;
};

interface SorteioProviderProps {
  children: ReactNode;
}

export const SorteioProvider: React.FC<SorteioProviderProps> = ({ children }) => {
  const [perguntas] = useState<Pergunta[]>(perguntasData.perguntas);
  const [perguntasSorteadas, setPerguntasSorteadas] = useState<number[]>([]);
  const [perguntaAtual, setPerguntaAtual] = useState<Pergunta | null>(null);

  const sortearPergunta = () => {
    if (perguntasSorteadas.length >= perguntas.length) {
      alert('Todas as perguntas já foram sorteadas! Reinicie o sorteio.');
      return;
    }

    const perguntasNaoSorteadas = perguntas.filter(
      p => !perguntasSorteadas.includes(p.id)
    );

    if (perguntasNaoSorteadas.length === 0) {
      return;
    }

    const indiceAleatorio = Math.floor(Math.random() * perguntasNaoSorteadas.length);
    const perguntaSorteada = perguntasNaoSorteadas[indiceAleatorio];

    setPerguntaAtual(perguntaSorteada);
    setPerguntasSorteadas([...perguntasSorteadas, perguntaSorteada.id]);
  };

  const reiniciarSorteio = () => {
    setPerguntasSorteadas([]);
    setPerguntaAtual(null);
  };

  const totalSorteadas = perguntasSorteadas.length;
  const totalRestantes = perguntas.length - totalSorteadas;

  return (
    <SorteioContext.Provider
      value={{
        perguntas,
        perguntasSorteadas,
        perguntaAtual,
        sortearPergunta,
        reiniciarSorteio,
        totalSorteadas,
        totalRestantes,
      }}
    >
      {children}
    </SorteioContext.Provider>
  );
};