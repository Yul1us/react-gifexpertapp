

// import React from 'react'

import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
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