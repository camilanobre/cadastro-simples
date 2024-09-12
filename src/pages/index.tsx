
import Layout from "../components/Layout";
import React from "react";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Camila', 30, '1'), 
    new Cliente('Gustavo', 28, '2'), 
    new Cliente('Azeitona', 5, '3')
  ]
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-pink-100
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
         <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}
