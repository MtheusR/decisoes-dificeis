export interface Pergunta {
  id: number;
  texto: string;
  categoria: string;
}

export interface SorteioContextType {
  perguntas: Pergunta[];
  perguntasSorteadas: number[];
  perguntaAtual: Pergunta | null;
  sortearPergunta: () => void;
  reiniciarSorteio: () => void;
  totalSorteadas: number;
  totalRestantes: number;
}

// Novo tipo para sistema de votação/pontuação
export interface Voto {
  perguntaId: number;
  opcaoEscolhida: 'A' | 'B';
  jogadorId?: string;
  timestamp: Date;
}

export interface EstatisticasPergunta {
  perguntaId: number;
  votosA: number;
  votosB: number;
  porcentagemA: number;
  porcentagemB: number;
  respostaMaisComum: 'A' | 'B' | null;
}