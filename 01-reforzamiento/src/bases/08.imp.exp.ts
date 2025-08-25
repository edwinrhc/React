import {heroes, type Hero, Owner} from "./data/heroes.data.ts";


const getHeroById = (id: number): Hero|undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id;
    });
    // if (!hero) throw new Error(`No existe un héreo con el id ${id}`);


    return hero;
}

console.log(getHeroById(3))

/**
 * getHeroesByOwner => Hero[]
 * Filtra héroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC o Marvel), usar el enumaración Owner
 * @returns Array de héroes pertenecientes al propietario especificado Hero[]
 */

export const getHeroesByName = (name:string): Hero| undefined => {
    const heroName = heroes.find((heroName) => {
        return heroName.owner === name;
    })

    return heroName;
}
// console.log(getHeroesByName('Spiderman'))

// ----------------------------------------------------------------------------------------------------------------------

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesOwner = heroes.filter((hero) => {
        return hero.owner === owner;
    })
    return heroesOwner;
}


// console.log(getHeroesByOwner('Marvel')