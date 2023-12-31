import React from "react";
import './Button.css'

// Uma interface TypeScript é declarada para definir a estrutura do objeto props que o componente Button vai receber.
// A interface ButtonProps garante que o componente esteja recebendo as props corretas.
declare interface ButtonProps {
    content?: string // A propriedade 'content' é esperada para ser do tipo string.
    onClick?: () => void
    appendIcon: JSX.Element
    children: string
}

// Aqui é definido um componente funcional React chamado 'Button'.
// Este componente espera receber um objeto 'props' que satisfaz a estrutura da interface 'ButtonProps'.
const Button: React.FC<ButtonProps> = (props) => {
    return (
        // O componente retorna um botão com a classe 'AppButton'.
        // O conteúdo do botão é determinado pela propriedade 'content' do objeto 'props'.
        <button
            className="AppButton"
            onClick={props.onClick}
        >
            {props.children || 'Nameless button'}
            {props.appendIcon}
        </button>
    )
}


// const Button: React.FC<{content: string}> = (props) => {
//     return (
//         <button className="AppButton">
//             {props.content}
//         </button>
//     )
// }

// primeira forma tipando o objeto props
// const Button = (props: {content : string }) => {
//     return (
//         <button className="AppButton">
//             {props.content}
//         </button>
//     )
// }

export default Button