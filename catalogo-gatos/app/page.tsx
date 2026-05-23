'use client'
import React, { useState } from 'react';

interface Gato {
  id: number;
  nome: string;
  cor: string;
  adotado: boolean;
}

export default function CatalogoGatos() {
  const tituloPagina = "Catálogo de Adoção Felina";

  const [gatos] = useState<Gato[]>([
    { id: 1, nome: "Mingau", cor: "Branco", adotado: false },
    { id: 2, nome: "Frajola", cor: "Preto e Branco", adotado: true },
    { id: 3, nome: "Garfield", cor: "Laranja", adotado: false }
  ]);

  const verificarStatus = (statusAdocao: boolean) => {
    return statusAdocao ? "Já encontrou um lar!" : "Aguardando adoção";
  };

  return (
    <div className="p-8 font-sans max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{tituloPagina}</h1>
      <p className="text-gray-600 mb-8">Bem-vindo ao nosso sistema de cadastro e adoção.</p>

      <div className="flex flex-wrap gap-6">
        {gatos.map((gato) => (
          <div key={gato.id} className="border border-gray-200 p-6 rounded-xl shadow-sm w-full md:w-64 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{gato.nome}</h2>
            <p className="text-gray-600 mb-1"><span className="font-medium">Cor:</span> {gato.cor}</p>
            <p className="text-gray-600 mb-4"><span className="font-medium">Status:</span> {verificarStatus(gato.adotado)}</p>
            <button 
              onClick={() => alert(`Você demonstrou interesse no ${gato.nome}`)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Tenho Interesse
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
