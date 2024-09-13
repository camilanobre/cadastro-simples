interface BotaoProps {
    // cor?: 'from-green-400 to-green-700' | 'from-blue-400 to-blue-700' | 'from-gray-400 to-gray-700'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    // const cor = props.cor ?? 'gray'
    
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-gray-400 to-gray-700
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}