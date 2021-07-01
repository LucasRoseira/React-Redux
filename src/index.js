import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';

// ReactDOM.render(

//     'Olá React !!!',
//     document.getElementById('root'));

//const tag = <strong>Olá js!!</strong>;

ReactDOM.render(
    <div >
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <div >
//         {tag}
//     </div>,
//     document.getElementById('root');
// );