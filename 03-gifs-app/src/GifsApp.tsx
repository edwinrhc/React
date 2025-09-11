import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";
import {useGifs} from "./gifs/hooks/useGifs.tsx";

export const GifsApp = () => {

    const  { gifs, handleTermClicked, previousTerms, handleSearch} = useGifs();

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
            <GifList gifs={gifs}/>

        </>
    )
}
