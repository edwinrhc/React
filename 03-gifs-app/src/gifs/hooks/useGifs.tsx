import {useState} from "react";
import type {Gif} from "../interfaces/gif.interface.ts";
import {getGifsByQuery} from "../actions/get-gifs-by-query.action.ts";
// Cache Aqui se coloca para que no se dispare mas peticiones http
const gifsCache: Record<string, Gif[]> =  {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = async (term: string) => {
        if(gifsCache[term]){
            setGifs(gifsCache[term]);
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

        gifsCache[query] = gifs;
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
