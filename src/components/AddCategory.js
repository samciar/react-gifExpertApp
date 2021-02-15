import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => { //Desestructuramos los metodos del componente para no usar props

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(inputValue.trim().length > 2){ //evitamos input vacio y ademas debe ser mayor a dos caracteres

            setCategories( cats => [inputValue, ...cats]);

            setInputValue(''); //para borrar el inputValue
        }

        
    }

    return (
        <>
        <form onSubmit={ handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>

        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

