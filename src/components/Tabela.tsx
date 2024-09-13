import Cliente from "../core/Cliente"
import { EditIcon, DeleteIcon } from "./Icons"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderData() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-pink-50' : 'bg-pink-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderActions(cliente) : false}
                </tr>
            )
        })
    }

    function renderActions(cliente: Cliente) {
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                     <button onClick={() => props.clienteSelecionado?.(cliente)}
                        className={`flex justify-center items-center
                        text-orange-950 rounded-full
                        hover:bg-red-100
                        p-2 m-1`}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                     <button onClick={() => props.clienteExcluido?.(cliente)}
                        className={`flex justify-center items-center
                        text-red-500 rounded-full
                        hover:bg-red-100
                        p-2 m-1`}>
                        {DeleteIcon}
                    </button>
                ) : false}             
            </td>
        )
    }


    return(
            <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                  bg-gradient-to-r from-purple-400 via-pink-300 to-blue-300
                 text-white
                `}>
                {renderHeader()}
            </thead>
            <tbody>
               {renderData()}
            </tbody>
        </table>
    )
}