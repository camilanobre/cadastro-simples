import React from "react";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";
import Modal from "../components/Modal";

export default function Home(props) {
  const { 
          cliente, 
          clientes, 
          selecionarCliente, 
          excluirCliente, 
          novoCliente, 
          salvarCliente,
          tabelaVisivel,
          exibirTabela
        } = useClientes()

  return (
    <div
      className={`
      flex flex-col h-screen justify-center items-center
      bg-pink-100
      text-white p-4 md:p-10
    `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end w-full mb-4">
              <Botao className="mb-4 w-full md:w-auto"
                      onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario cliente={cliente}
                      clienteMudou={salvarCliente}
                      cancelado={exibirTabela}/>
        )}
      </Layout>
    </div>
  );
}
