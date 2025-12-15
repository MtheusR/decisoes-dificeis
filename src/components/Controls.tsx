import React from 'react';

interface ControlsProps {
  onSortear: () => void;
  onReiniciar: () => void;
  totalRestantes: number;
}

const Controls: React.FC<ControlsProps> = ({ onSortear, onReiniciar, totalRestantes }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={onSortear}
        disabled={totalRestantes === 0}
        className={`
          px-8 py-4 rounded-2xl text-xl font-bold text-white 
          shadow-lg transition-all duration-300 transform hover:scale-105
          flex items-center justify-center gap-3 transiction
          ${totalRestantes === 0 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600'
          }
        `}
      >
        <span className="text-2xl">🎲</span>
        SORTEAR PERGUNTA
      </button>
      
      <button
        onClick={onReiniciar}
        className="px-6 py-4 rounded-2xl text-xl font-bold border border-gray-500 border-2 from-blue-500 to-teal-400 
                 text-black shadow-lg transition-all duration-300 transform hover:scale-105
                hover:bg-gray-200 flex items-center justify-center gap-2"
      >
      
        REINICIAR
      </button>
    </div>
  );
};

export default Controls;