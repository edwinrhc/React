interface Person {
    fisrtName: string;
    lastName: string;
    age: number;
    addres: Addres
}
interface Addres{
        postalCode: string;
        city: string;
        street: string;
}


const iroman: Person = {
    fisrtName: 'Tony',
    lastName: 'Stark',
    age: 45,
    addres: {
        postalCode: 'ABC123',
        street: 'Main Street',
        city: 'New York'
    }

}
console.log(iroman);
/*
const spiderman = structuredClone(iroman);

spiderman.fisrtName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.addres.city = 'Los Angeles';

console.log(iroman, spiderman);*/
