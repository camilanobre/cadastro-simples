import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
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
                </tr>
            )
        })
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