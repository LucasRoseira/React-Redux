import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

// ReactDOM.render(

//     'Olá React !!!',
//     document.getElementById('root'));

//const tag = <strong>Olá js!!</strong>;

ReactDOM.render(
    <div id="app">
        {/* <Primeiro></Primeiro>
        <ComParametro titulo="segundo componente" subtitulo = "cool cool cooll !!!"/> */}
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro silveira"
            nota={9.3}
        />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria"
            nota={9.9}
        />
    </div>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <div >
//         {tag}
//     </div>,
//     document.getElementById('root');
// );