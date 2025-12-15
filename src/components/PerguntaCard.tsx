import React from 'react';
import { Pergunta } from '../types';

interface PerguntaCardProps {
  pergunta: Pergunta;
}

const PerguntaCard: React.FC<PerguntaCardProps> = ({ pergunta }) => {
  const processarTexto = (texto: string) => {
    return texto.split('**').map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="font-bold text-orange-300 px-1 rounded">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 border-4 border-orange-400">
      <div className="mb-6">
        <span className="inline-block bg-orange-600 text-white text-sm font-bold py-1 px-4 rounded-full">
          #{pergunta.id} - {pergunta.categoria}
        </span>
      </div>
      
      <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-8 leading-tight">
        {processarTexto(pergunta.texto)}
      </div>
      
      {/* <div className="flex justify-center space-x-4 mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <span className="ml-2 text-gray-600">Escolha A</span>
        </div>
        <div className="text-gray-400 font-bold text-xl">OU</div>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <span className="ml-2 text-gray-600">Escolha B</span>
        </div>
      </div> */}
      
      {/* <div className="text-center text-gray-500 italic text-sm">
        Qual você escolheria? Pense bem!
      </div> */}
    </div>
  );
};

export default PerguntaCard;