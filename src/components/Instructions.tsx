import React from 'react';

const Instructions: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">🎮</span> Como Jogar"
      </h3>
      
      {/* <div className="mb-6">
        <h4 className="font-bold text-lg text-gray-700 mb-2">📋 Sistema de Pontuação</h4>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">Resposta Consensual:</span>
              <span className="text-gray-600 ml-2">+1 ponto</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <span className="text-yellow-600 font-bold">💎</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">Resposta Rara:</span>
              <span className="text-gray-600 ml-2">+3 pontos</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 font-bold">👑</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">Resposta Solitária:</span>
              <span className="text-gray-600 ml-2">+5 pontos</span>
            </div>
          </div>
        </div>
      </div> */}

     <ul className="space-y-2 text-gray-700 text-sm">
  <li className="flex items-start gap-2">
    <span className="text-green-500 font-bold">1.</span>
    <span>Sorteie uma carta e leia em voz alta as duas opções (A ou B)</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="text-green-500 font-bold">2.</span>
    <span>Todos os jogadores votam secretamente na opção que acham que a maioria escolherá</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="text-green-500 font-bold">3.</span>
    <span>Revelem todas as escolhas ao mesmo tempo</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="text-green-500 font-bold">4.</span>
    <span>Quem acertar a escolha da maioria ganha 1 ponto</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="text-green-500 font-bold">5.</span>
    <span>O primeiro jogador a alcançar 3 pontos vence</span>
  </li>
</ul>

      
        <div className="space-y-4">
          {/* <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-blue-500">🎯</span> Modo de Jogo Clássico
            </h4> 
          </div> */}
        
        {/* <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-pink-500">⚡</span> Modo Solo/Desafio
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold">•</span>
              <span>Escolha sua resposta mentalmente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold">•</span>
              <span>Tente adivinhar o que a maioria escolheria</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold">•</span>
              <span>Anote seus pontos e desafie seus amigos depois!</span>
            </li>
          </ul>
        </div> */}
      </div>
      
      {/* <div className="mt-6 p-4 bg-white rounded-xl border border-yellow-300">
        <p className="text-sm text-gray-600">
          <span className="font-bold text-yellow-600">🏆 REGRA DE OURO:</span>{" "}
          A diversão está nas discussões! Justifique sua escolha e tente convencer os outros - 
          mesmo que sua resposta seja... bem, uma merda! 😂
        </p>
      </div> */}
    </div>
  );
};

export default Instructions;