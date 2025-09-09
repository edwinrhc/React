import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";
import {mockGifs} from "./mock-data/gifs.mock.ts";
import {useState} from "react";
import {getGifsByQuery} from "./gifs/actions/get-gifs-by-query.action.ts";

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])

    const handleTermClicked = (term: string) => {
        console.log({term});
    }

    const handleSearch = async (query: string) => {

        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 8))

        const gifs = await getGifsByQuery(query);
        console.log({gifs});
    };

    return (
        <>
            {/*header*/}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>
            {/* Search*/}
            <SearchBar
                placeHolder="Busca lo que quieras..."
                onQuery={(query: string) => handleSearch(query)}
            />
            {/*    Búsqueda previas */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={(term: string) => handleTermClicked(term)}/>

            {/*    GifList */}
            <GifList gifs={mockGifs}/>

        </>
    )
}
