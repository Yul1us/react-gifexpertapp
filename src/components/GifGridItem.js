import React from 'react'

//Ver. 1
// export const GifGridItem = ( img ) => {

//     console.log(img);

//     return (
//         <div>
//             { img.title }
//         </div>
//     )
// }


//Ver. 2
// export const GifGridItem = ( props ) => {

//     console.log(props);
//     //Se ve así:
//     // {id: 'VXJWhaO7afRe', 
//     // title: 'One Punch Man GIF', 
//     // url: 'https://media4.giphy.com/media/VXJWhaO7afRe/giphy.…9ei2xcrb2pvo1l1dq3taqu90qga41b&rid=giphy.gif&ct=g'}


//     return (
//         <div>
//             {/* { img.title } */}
//         </div>
//     )
// }


//Ver. 3 desestructurando -> props en: { id, title, url } 
// export const GifGridItem = ( { id, title, url } ) => {

//     console.log(  id, title, url  );
//     //Se ve así:
//     // yo3TC0yeHd53G 
//     // saitama GIF 
//     // https://media1.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=4ec6a343guioud4fh89ei2xcrb2pvo1l1dq3taqu90qga41b&rid=giphy.gif&ct=g


//     return (
//         <div>
//             {/* { img.title } */}
//         </div>
//     )
// }

//Ver. 4 para verlo en el browser 
// export const GifGridItem = ( { id, title, url } ) => {

//     // console.log(  id, title, url  );
//     //Se ven las imagenes:
//     //despues de destructurar ya se pueden usar las propiedades 
//     //siempre es bueno colocar el atributo   alt={  }
//     return (
//         <div>
//             {/* { img.title } */}
//             <img src={ url } alt={ title } />

//         </div>
//     )
// }


//Ver. 5 usando estilos con una clase: card en el <div className='card'> 
export const GifGridItem = ( { id, title, url } ) => {

    // console.log(  id, title, url  );
    //Se ven las imagenes:
    //despues de destructurar ya se pueden usar las propiedades 
    //siempre es bueno colocar el atributo   alt={  }
    return (

        // USANDO ANIMACIONES >     https://animate.style/
        <div className='card animate__animated animate__fadeIn'>
            {/* { img.title } */}
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

