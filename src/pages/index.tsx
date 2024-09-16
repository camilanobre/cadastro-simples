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

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
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
