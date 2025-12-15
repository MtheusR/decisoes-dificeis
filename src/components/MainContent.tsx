import React from 'react';
import { useSorteio } from '../context/SorteioContext';
import PerguntaCard from './PerguntaCard';
import StatsCard from './StatsCard';
import Controls from './Controls';
import Instructions from './Instructions';

const MainContent: React.FC = () => {
  const {
    perguntaAtual,
    sortearPergunta,
    reiniciarSorteio,
    totalSorteadas,
    totalRestantes,
    perguntas
  } = useSorteio();

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Controls 
          onSortear={sortearPergunta}
          onReiniciar={reiniciarSorteio}
          totalRestantes={totalRestantes}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          {perguntaAtual ? (
            <PerguntaCard pergunta={perguntaAtual} />
          ) : (
           ""
          )}
        </div>
        
        <div className="space-y-8">
          <StatsCard 
            totalSorteadas={totalSorteadas}
            totalRestantes={totalRestantes}
            totalPerguntas={perguntas.length}
          />
          <Instructions />
        </div>
      </div>

      
    </main>
  );
};

export default MainContent;