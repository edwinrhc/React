
import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";
import {mockGifs} from "./mock-data/gifs.mock.ts";

export const GifsApp = () => {
    return (
        <>
            {/*header*/}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>
            {/* Search*/}
            <SearchBar placeHolder="Busca lo que quieras..." />
            {/*    Búsqueda previas */}
            <PreviousSearches searches={['Goku', 'Vegeta', 'Trunks']} />

            {/*    GifList */}
            <GifList  gifs={mockGifs}/>

        </>
    )
}
