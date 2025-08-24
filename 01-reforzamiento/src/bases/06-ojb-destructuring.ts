

const person =  {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

const { name:iromanName, age, key} = person;

console.log(iromanName, age, key);

// ----------------------------------------------------------------------------------------------------------------------

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string
}

const useContext = ({key,name,age,rank = 'Sin rango'} : Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank:rank
    }
};

const context1 = useContext(person);
console.log(context1);

const { rank,
        keyName,
        user} = useContext(person);

const { name } = user;

console.log({rank, keyName, name})

