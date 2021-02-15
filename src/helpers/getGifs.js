export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Gof56BckPhH8b5UtbpbQ1HKXDWFsHHZW`;

    const resp = await fetch( url );

    const {data} = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //signo de interrogacion para asegurarnos si viene el atributo usarlo
        };

    });

    return gifs;

}