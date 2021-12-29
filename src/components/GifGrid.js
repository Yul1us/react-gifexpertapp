// import React, { useState, useEffect } from 'react'
import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';




export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);


    // const [count, setCount] = useState(0);


    //Este codigo se ejecuta cada vez que cambie la category
    //Ver 1
    // useEffect( () => {

    //     //Ver 1
    //     // getGifs();
    //     //Ver 2
    //     // getGifs( category ).then( imgs => setImages( imgs ) )

    //     //Ver 3
    //     getGifs( category )
    //     .then( setImages )

    // }, []);

    
    // useEffect( () => {
    //     //Ver 1
    //     // getGifs();
    //     //Ver 2
    //     // getGifs( category ).then( imgs => setImages( imgs ) )

    //     //Ver 3
    //     getGifs( category )
    //     .then( setImages );
    // }, [ category ]);

    //Al recibir la category
    //Con ella haremos un peticion hhttps://

    //Este codigo fue reemplazado por la funcion: getGifs
    // const getGifs = async() => {

    //     // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick%20and%20Morty&limit=10&api_key=esu9sAL8Fr2087x4OfNMytj9jkZ7rCJD';
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category ) }&limit=10&api_key=esu9sAL8Fr2087x4OfNMytj9jkZ7rCJD`;
    //     const resp = await fetch( url );
    //     const {data} = await resp.json();

    //     //aca transformamos lo que recibimos de category
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             //Este caracter ? -> es un condicional
    //             //Si vienen las imagenes entonces lo usa
    //             url: img.images?.downsized_medium.url,

    //         }

    //     } )
    //     // console.log(data);
    //     console.log(gifs);
    //     setImages(gifs);

    // }



    //Apartado# 78
    //Fetch

    // const state = useFetchGifs();
    // console.log(state);


    // export const {data, loading} = useFetchGifs( category );
    // console.log(data);
    // console.log(loading);

    const {data:images, loading} = useFetchGifs( category);
    

    //llamando la funcion
    // getGifs();

    return (
        <>
        
        
        
            <h3  className='card animate__animated animate__fadeIn'>{ category }</h3>

            {/* Apartado #78 */}
            {/* { loading ? 'Cargando...' : 'Data Cargada'} */}
            { loading && <p className='card animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                    {
                        images.map( img  => (
                            <GifGridItem 
                                key = { img.id }
                                { ...img } 

                            />        
                        ))

                    }
            </div>





                {/* <h3> {count} </h3>
                <button onClick={ ()=> setCount(count + 1) }></button> */}
                

                {/* <ol> */}
                    {/* <li>item</li> */}


                    {/* Funcion de Javascript */}
                    {/* {

                        // // Version #1: Codigo sencillo
                        // // images.map( img => (
                        // //     <li key={ img.id }  >{ img.title }</li>
                        // // ))

                        // // Version #2: Codigo desestructurado, para en vez de colocar {img.id} -> {id}
                        // // images.map( ({ id, title}) => (
                        // //     <li key={ id }  >{ title }</li>
                        // // ))


                        // // Version #3: usando una funcion:
                        // // Recordar primero importar la funcion: GifGridItem
                        // //import { GifGridItem } from './GifGridItem';

                        // // images.map( img  => (
                        // //     <GifGridItem 
                        // //         key = { img.id }
                        // //         img={ img } 

                        // //     />        
                        // // ))


                        // // Version #4: operador espect { ...img }  en ves de: img={ img }
                        // data.map( img  => (
                        //     <GifGridItem 
                        //         key = { img.id }
                        //         { ...img } 

                        //     />        
                        // ))


                    } */}

                {/* </ol> */}
            {/* </div> */}
            
        </>
    )
}
