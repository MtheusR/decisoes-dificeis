import React from 'react';

interface Jogador {
  id: string;
  nome: string;
  pontos: number;
  respostasRaras: number;
  respostasSolitarias: number;
}

interface ScoreboardProps {
  jogadores: Jogador[];
  rodadaAtual: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ jogadores, rodadaAtual }) => {
  const jogadoresOrdenados = [...jogadores].sort((a, b) => b.pontos - a.pontos);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-yellow-400">🏆</span>
          PLACAR DE PONTOS
        </h3>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-1 px-4 rounded-full">
          Rodada #{rodadaAtual}
        </div>
      </div>

      <div className="space-y-4">
        {jogadoresOrdenados.map((jogador, index) => (
          <div 
            key={jogador.id}
            className={`
              p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]
              ${index === 0 
                ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500' 
                : index === 1 
                ? 'bg-gradient-to-r from-gray-300/20 to-gray-400/20 border-2 border-gray-400'
                : index === 2
                ? 'bg-gradient-to-r from-amber-900/20 to-amber-800/20 border-2 border-amber-800'
                : 'bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-700'
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                  ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' :
                    index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-black' :
                    index === 2 ? 'bg-gradient-to-r from-amber-800 to-amber-900 text-white' :
                    'bg-gradient-to-r from-gray-600 to-gray-800 text-white'}
                `}>
                  {index + 1}
                </div>
                <div>
                  <div className="font-bold text-lg">{jogador.nome}</div>
                  <div className="text-sm text-gray-300 flex gap-4">
                    <span>🎯 {jogador.respostasRaras} raras</span>
                    <span>👑 {jogador.respostasSolitarias} solitárias</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-bold text-yellow-400">
                  {jogador.pontos}
                </div>
                <div className="text-sm text-gray-300">pontos</div>
              </div>
            </div>
            
            {/* Barra de progresso relativa */}
            <div className="mt-3">
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Progresso</span>
                <span>{Math.round((jogador.pontos / jogadoresOrdenados[0].pontos) * 100)}% do líder</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`
                    h-2 rounded-full
                    ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                      index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                      index === 2 ? 'bg-gradient-to-r from-amber-800 to-amber-900' :
                      'bg-gradient-to-r from-blue-500 to-purple-500'}
                  `}
                  style={{ 
                    width: `${Math.round((jogador.pontos / jogadoresOrdenados[0].pontos) * 100)}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-700/30">
          <div className="text-2xl font-bold text-green-400">+1</div>
          <div className="text-sm text-gray-300">Consensual</div>
        </div>
        <div className="p-3 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-700/30">
          <div className="text-2xl font-bold text-blue-400">+3</div>
          <div className="text-sm text-gray-300">Rara</div>
        </div>
        <div className="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-700/30">
          <div className="text-2xl font-bold text-purple-400">+5</div>
          <div className="text-sm text-gray-300">Solitária</div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;