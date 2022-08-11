import React from 'react'
import {useState} from 'react'

import '../tres/tres.css'

export default function Ejercicio3() {
    const palabras = ['hola','saludo','tadeo','ajedrez','libro', 'cama', 'javascript' ]
    const [textoInput, setTextoInput] = useState('');
    const [filteredList, setFilteredList] = useState(palabras)
    const manejarCambio = (e) => {
        setTextoInput(e.target.value);
    }


    return (
    <div className='container'>
        
        <div className='search'>
        <input type='text' placeholder='Escriba aquí' onChange={manejarCambio}></input>
        
        <ul className='filteredList'>
            {palabras.map((palabra,i) =>{
            if (palabra.includes(`${textoInput}`)) {
                return(
                    <li key={i}>
                    {palabra}
                </li>
                    )    
            }
            })}
        </ul>
        </div>

        <ul className='list'>
            {palabras.map((palabra, index) => {
                return (
                <li key={index}>
                    {palabra}
                </li>
                )
            })}
        </ul>
    </div>
  )
}
