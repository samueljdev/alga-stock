
import React, { useState, useEffect } from 'react'
import '../TestComponent/TestCompoment.css'

function TestComponent(props: { name: string }) {
    //declaração de constante, do componente, porém ñ dar pra referenciar, o react ñ sabe pq falta apontar
    // const state = {
    //     idade: 10
    // }

    // trabalhando com HOOKs no react
    const [age, setAge] = useState(34)

    // metodo precisa ser executado antes do retorno da function
    // o metodo useEffect() só é executado assim que o componete é renderizado
    useEffect(() => {
        console.log('componente criado com useEffect')
    }, [])

    useEffect(() => {
        console.log('componente criado com useEffect dependencia ' + age)
    }, [age])

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
