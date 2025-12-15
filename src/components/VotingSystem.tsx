import React, { useState } from 'react';
import { Pergunta } from '../types';

interface VotingSystemProps {
  pergunta: Pergunta;
  onVote: (opcao: 'A' | 'B') => void;
  onSkip: () => void;
  votosA?: number;
  votosB?: number;
}

const VotingSystem: React.FC<VotingSystemProps> = ({ 
  pergunta, 
  onVote, 
  onSkip,
  votosA = 0,
  votosB = 0 
}) => {
  const [votoFeito, setVotoFeito] = useState(false);
  const [opcaoEscolhida, setOpcaoEscolhida] = useState<'A' | 'B' | null>(null);

  const totalVotos = votosA + votosB;
  const porcentagemA = totalVotos > 0 ? Math.round((votosA / totalVotos) * 100) : 0;
  const porcentagemB = totalVotos > 0 ? Math.round((votosB / totalVotos) * 100) : 0;

  const handleVote = (opcao: 'A' | 'B') => {
    setOpcaoEscolhida(opcao);
    setVotoFeito(true);
    onVote(opcao);
  };

  const extrairOpcoes = (texto: string) => {
    const matches = texto.match(/\*\*(.*?)\*\*/g);
    if (matches && matches.length >= 2) {
      return {
        opcaoA: matches[0].replace(/\*\*/g, ''),
        opcaoB: matches[1].replace(/\*\*/g, '')
      };
    }
    return {
      opcaoA: 'Opção A',
      opcaoB: 'Opção B'
    };
  };

  const { opcaoA, opcaoB } = extrairOpcoes(pergunta.texto);

  return (
    <div className="mt-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🗳️ SUA VEZ DE ESCOLHER
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Opção A */}
        <button
          onClick={() => handleVote('A')}
          disabled={votoFeito}
          className={`
            p-6 rounded-xl border-4 transition-all duration-300 transform hover:scale-105
            ${votoFeito && opcaoEscolhida === 'A' 
              ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg' 
              : 'border-blue-300 bg-white hover:border-blue-500 hover:shadow-lg'
            }
            ${votoFeito && opcaoEscolhida !== 'A' ? 'opacity-50' : ''}
          `}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            {votoFeito && opcaoEscolhida === 'A' && (
              <span className="text-green-600 font-bold text-lg">✅ SUA ESCOLHA</span>
            )}
          </div>
          <div className="text-lg font-bold text-gray-800 mb-4">{opcaoA}</div>
          {votoFeito && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Votos: {votosA}</span>
                <span>{porcentagemA}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                  style={{ width: `${porcentagemA}%` }}
                ></div>
              </div>
            </div>
          )}
        </button>

        {/* Opção B */}
        <button
          onClick={() => handleVote('B')}
          disabled={votoFeito}
          className={`
            p-6 rounded-xl border-4 transition-all duration-300 transform hover:scale-105
            ${votoFeito && opcaoEscolhida === 'B' 
              ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg' 
              : 'border-red-300 bg-white hover:border-red-500 hover:shadow-lg'
            }
            ${votoFeito && opcaoEscolhida !== 'B' ? 'opacity-50' : ''}
          `}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            {votoFeito && opcaoEscolhida === 'B' && (
              <span className="text-green-600 font-bold text-lg">✅ SUA ESCOLHA</span>
            )}
          </div>
          <div className="text-lg font-bold text-gray-800 mb-4">{opcaoB}</div>
          {votoFeito && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Votos: {votosB}</span>
                <span>{porcentagemB}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-red-500 to-orange-400 h-3 rounded-full"
                  style={{ width: `${porcentagemB}%` }}
                ></div>
              </div>
            </div>
          )}
        </button>
      </div>

      {votoFeito ? (
        <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-300">
          <h4 className="font-bold text-lg text-gray-800 mb-2">🎉 Voto Registrado!</h4>
          <p className="text-gray-600 mb-4">
            Você escolheu: <span className="font-bold">{opcaoEscolhida === 'A' ? opcaoA : opcaoB}</span>
          </p>
          
          {/* Sistema de Pontuação Simulado */}
          <div className="bg-white rounded-lg p-4 mb-4">
            <h5 className="font-bold text-gray-700 mb-3">📊 Pontuação Estimada</h5>
            <div className="flex justify-around">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {porcentagemA > 70 || porcentagemB > 70 ? '+1' : '+3'}
                </div>
                <div className="text-sm text-gray-600">pontos</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-700">
                  {totalVotos + 1} jogadores
                </div>
                <div className="text-sm text-gray-600">total</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={onSkip}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-lg transition-all"
          >
            PRÓXIMA PERGUNTA 🚀
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Escolha uma opção abaixo. Lembre-se das regras de pontuação!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onSkip}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold hover:shadow-lg transition-all"
            >
              PULAR ESTA ⏭️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VotingSystem;