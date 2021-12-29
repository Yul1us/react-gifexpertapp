

    //Al recibir la category
    //Con ella haremos un peticion hhttps://

    //Esta funcion reemplazo todo un bloque de codigo en el componente: GifGrid
    export const getGifs = async( category ) => {

        // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick%20and%20Morty&limit=10&api_key=esu9sAL8Fr2087x4OfNMytj9jkZ7rCJD';
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category ) }&limit=10&api_key=esu9sAL8Fr2087x4OfNMytj9jkZ7rCJD`;
        const resp = await fetch( url );
        const {data} = await resp.json();

        //aca transformamos lo que recibimos de category
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                //Este caracter ? -> es un condicional
                //Si vienen las imagenes entonces lo usa
                url: img.images?.downsized_medium.url,

            }

        } )
        // console.log(data);
        // console.log(gifs);
        // setImages(gifs);
        return gifs;

    }
