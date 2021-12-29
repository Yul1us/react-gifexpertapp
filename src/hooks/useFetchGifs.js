

// import React from 'react'

import { useState, useEffect } from "react"

//Nota muy importante...
//Esta linea (import { useEffect } from "react/cjs/react.development";) no dejaba la aplicacion funcionar en los servidores de Github...
//se coloco en esta linea -> y todo listo... 
//import { useState, useEffect } from "react"
// import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect( () => {

        getGifs( category )
        .then( imgs => {

            // setTimeout(() => {

            //     console.log(imgs);
            //     setState({
            //         data: imgs,
            //         loading: false
            //     });
                
            // }, 3000);



            //Sin TimeOut
            console.log(imgs);
            setState({
                data: imgs,
                loading: false
            });
  
                


        })
    }, [ category ]);




    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     });
    // }, 3000);

    return state; //{data: [], loading: true}
}
