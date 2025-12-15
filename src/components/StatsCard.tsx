import React from 'react';

interface StatsCardProps {
  totalSorteadas: number;
  totalRestantes: number;
  totalPerguntas: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  totalSorteadas, 
  totalRestantes, 
  totalPerguntas 
}) => {
  const porcentagem = (totalSorteadas / totalPerguntas) * 100;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg border-2 border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        📊 Progresso do Sorteio
      </h2>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
          <span>Progresso</span>
          <span>{porcentagem.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-orange-400 to-orange-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${porcentagem}%` }}
          ></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-white rounded-xl shadow">
          <div className="text-3xl font-bold text-green-700">{totalSorteadas}</div>
          <div className="text-sm text-gray-600">Já sorteadas</div>
        </div>
        <div className="text-center p-4 bg-white rounded-xl shadow">
          <div className="text-3xl font-bold text-orange-600">{totalRestantes}</div>
          <div className="text-sm text-gray-600">Restantes</div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Total de perguntas: <span className="font-bold">{totalPerguntas}</span>
      </div>
    </div>
  );
};

export default StatsCard;