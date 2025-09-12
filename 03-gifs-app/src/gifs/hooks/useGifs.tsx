import {useRef,useState} from "react";
import type {Gif} from "../interfaces/gif.interface.ts";
import {getGifsByQuery} from "../actions/get-gifs-by-query.action.ts";
// Metodo 01 Cache Aqui se coloca para que no se dispare mas peticiones http
// const gifsCache: Record<string, Gif[]> =  {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
// Metodo 02 Cache Aqui se coloca para que no se dispare mas peticiones http
    const gifsCache= useRef<Record<string, Gif[]>>({}); // nos crea un espacio de memoria en memoria y no causa render


    const handleTermClicked = async (term: string) => {

        // Metodo 01
        // if(gifsCache[term]){
        //     setGifs(gifsCache[term]);
        //     return;
        // }
        // Metodo 02
        if(gifsCache.current[term]){
            setGifs(gifsCache.current[term]);
            return;
        }


        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    }

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 8))

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        // Metodo 01
        // gifsCache[query] = gifs;

        // Metodo 02
        gifsCache.current[query] = gifs;
    };


    return{
        // Properties
        gifs,
        // Methods / Actions
        handleTermClicked,
        handleSearch,
        previousTerms,
    }
}
