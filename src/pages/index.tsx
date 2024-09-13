
import Layout from "../components/Layout";
import React, { useState } from "react";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";

export default function Home() {

  const clientes = [
    new Cliente('Camila', 30, '1'), 
    new Cliente('Gustavo', 28, '2'), 
    new Cliente('Azeitona', 5, '3')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-pink-100
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
          <div className="flex justify-end">
          <Botao className="mb-4">Novo Cliente</Botao>
          </div>
         <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}></Tabela>
         <Formulario cliente={clientes[0]}></Formulario>
      </Layout>
    </div>
  );
}
