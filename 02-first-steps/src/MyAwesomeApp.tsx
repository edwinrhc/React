import type {CSSProperties} from "react";

const firstName = 'Edwin';
const lastName = 'HC';

const favoriteGames = ['Dota 2', 'Star Craft 2', 'Half Life'];
const isActive = false;

const address = {
    zipCode: 12345,
    counter: 'Peru'
}

const myStyle: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    marginTop: 20
}

export function MyAwesomeApp() {

    return (
        <>
            <div>
                <h1 data-testid="first-name-title">{firstName}</h1>
                <h2>{lastName}</h2>
                <p className="mi-clave-favorita">{favoriteGames.join(', ')}</p>
                <h1>{isActive ? 'Activo' : 'No activo'}</h1>
                <p style={myStyle}>
                    {JSON.stringify(address)}
                </p>
            </div>
        </>
    )
}
