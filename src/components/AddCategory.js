
//racp
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    // const [inputValue, setInputValue] = useState('Hola mundo')
    const [inputValue, setInputValue] = useState('')
    //para manejar los cambios en el input
    const handleInputChange = (e) => {

        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    //Para el manejo de Formularios -> form
    //de modo que no se cargue toda la pagina nuevamente con los cambios
    const handleSubmit = (e) => {
        //Para prevenir la carga de toda la pagina
        e.preventDefault();
        // console.log('Submit done...')
        
        if (inputValue.trim().length > 2 ) {

            setCategories( cats => [inputValue, ...cats ] );
            setInputValue('');  // inicializa nuevamente el valor
        }
    }


    return (
        // <>
        
        <form onSubmit={ handleSubmit }>
            {/* Si usamos form -> no usamos el fracment <> </> */}
            {/* inputValue = es el valor que la persona escribio... */}
            {/* <h2>Add Category</h2> */}
            {/* <h1>{inputValue}</h1> */}
            <input
                type="text"
                value={inputValue}
                // onChange={(e) => console.log(e)}
                onChange={handleInputChange}
            />
        </form>

        // </>
    )
}
AddCategory.propTypes = { 
    setCategories: PropTypes.func.isRequired
 }