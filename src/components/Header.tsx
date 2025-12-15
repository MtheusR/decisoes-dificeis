import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-black to-gray-900 text-white py-6 px-4 shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Decisões Difíceis
        </h1>
        <p className="text-center text-lg md:text-xl opacity-90">
          "Você prefere...?" - O jogo das decisões mais difíceis!
        </p>
      </div>
    </header>
  );
};

export default Header;