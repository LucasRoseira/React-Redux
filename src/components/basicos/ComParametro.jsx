import React from 'react'
export default function ComParametro(props) {
    // console.log(props);
    // const sub = props.subtitulo;
    const status = props.nota >=7 ? 'Aprovado' : 'Recuperação';
    return (
        <div id="app">
            <h2>{props.titulo}</h2>
            <p>
                <strong>{ props.aluno }</strong>
                tem nota
                <strong> { props.aluno } </strong>
                e está
                <strong> { status }</strong> !
            </p>
        </div>
    )
}