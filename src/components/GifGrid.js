import React /*, { useState, useEffect }*/ from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category ); //al usar los : estamos renombrando el valor recibido

    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [ category ]); //al enviar una lista de dependencias vacias, ejecutamos la porción de codigo solo en la primera renderizacion
    //                   //Ahora le enviamos category para que renderice en caso de que cambie esta propiedad



    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p> /* OPerador AND: si es true muestra parrafo, de lo contrario no haga nada*/} 

            <div className="card-grid">
    
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
