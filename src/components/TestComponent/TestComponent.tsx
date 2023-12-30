
import React, { useState } from 'react'
import '../TestComponent/TestCompoment.css'

function TestComponent(props: { name: string }) {
    //declaração de constante, do componente, porém ñ dar pra referenciar, o react ñ sabe pq falta apontar
    const state = {
        idade: 10
    }

    // trabalhando com HOOKs no react
    const [age, setAge] = useState(34)

    return <div className="TestComponent">
        Olá, {props.name}, {age}
        <button onClick={() => {
            setAge(age + 1)
        }}>
            +
        </button>
    </div>
}


export default TestComponent
