import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = [ 'One Punch','Samurai X','Dragon Ball' ];

    //const [categories, setCategories] = useState([ 'One Punch','Samurai X','Dragon Ball' ]);
    const [categories, setCategories] = useState([ 'One Punch' ]);
    // const handleAdd = () =>{
    //     //Como es un arreglo para adicionar un nuevo 
    //     //elemento se debe user la function 'push'

    //     // el problema con el push es que:
    //     //React no sabe que debe renderizar
    //     // categories.push('Otro Super Heroe')
    //     // console.log(categories);

    //     //La solución esta en el setCategories
    //     //usando el operador spread  [...] del apartado #16 de arreglos
    //     //setCategories([...categories, 'Otro Super Héroe']);
    //     //ó
    //     //setCategories(['Otro Super Héroe', ...categories]);
    //     //ó
    //     // setCategories(cats => [...cats, 'Otro Super Héroe' ]);

    // }

    return (
        <>
            
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>

            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>

                {

                    // categories.map( category => {
                    //     return <li key={ category }> {category} </li>

                    // })

                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={ category } 
                        />
                    ))

                }

            </ol>





        </>
    )
}

export default GifExpertApp
