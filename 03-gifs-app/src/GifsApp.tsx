
export const GifsApp = () => {
    return(
        <>
        {/*header*/}
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Descubre y comparte el gif Perfecto</p>
            </div>
            {/* Search*/}
            <div className="search-container">
                <input type="text" placeholder="Buscar Gifs" />
                <button>Buscar</button>
            </div>
        {/*    Búsqueda previas*/}
            <div className="previous-searches">
                <h2>Búsquedas previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Elden Ring</li>
                </ul>
            </div>
        {/*    Gif */}
            <div className="gifs-container">
                
            </div>
        </>
    )
}
