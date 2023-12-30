import React from "react";

class ClassCompoenent extends React.Component<{ name: string }> {

    constructor(props: any){
        super(props)
        console.log('construindo ')
    }

    state = {
        nome: 'Antigo',
        sobrenome: 'Historico'
    }

    componentDidMount(): void {
        console.log('Did Mount read')
        console.log('Did Mount read')
    }

    componentDidUpdate() {
        console.log('Did Update')
    }

    render() {
        console.log('render')
        return ( <div>
            <p>name: {this.state.nome}</p>
            <p>sobrenome: {this.state.sobrenome}</p>
            <button onClick={() => {
                this.setState({ nome: 'Novo' })
                this.setState({ sobrenome: 'Lenda' })
            }}>Click Aqui</button>
        </div>
        )
    }
}

export default ClassCompoenent