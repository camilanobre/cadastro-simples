import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela")

  useEffect(() => {
    repo.obterTodos().then(setClientes)
  }, [])

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }


  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-pink-100
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4"
                      onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
            ></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente}
                      clienteMudou={salvarCliente}
                      cancelado={() => setVisivel('tabela')}/>
        )}
      </Layout>
    </div>
  );
}
