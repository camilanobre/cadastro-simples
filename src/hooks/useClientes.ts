import { useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useTabelaForm from "./useTabelaForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente()

  const { 
        tabelaVisivel, 
        exibirTabela,
        exibirFormulario 
    } = useTabelaForm()
    
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    tabelaVisivel,
    exibirTabela,
    cliente,
    clientes,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    salvarCliente,
    obterTodos
  }
}