function greet(name: string): string {
    return `Hola ${name}`
}

const greet2 = (name: string): string => {
    return `Hola ${name}`;
};

const greet3 = (name: string) => `Hola ${name}`;


const message = greet('Goku');
const message2 = greet2('Goku');
const message3 = greet3('Picoro');

console.log(message);
console.log(message2);
console.log(message3);

interface User {
    uid: string;
    username: string;
}

function getUser1(): User {
    return {
        uid: 'ABC-123',
        username: 'EL_leanor'
    }
}

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'EL_leanor'
    }
}

// ----------------------------------------------------------------------------------------------------------------------
const getUser2 = () => {
    return {
        uid: 'ABC-1234',
        username: 'EL_leanor2'
    }
}

const getUser3 = () => ({
    uid: 'ABC-12345',
    username: 'EL_leanor3'
})

// ----------------------------------------------------------------------------------------------------------------------
const user = getUser();
const user1 = getUser1();
const user2 = getUser2();
const user3 = getUser3();

console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
// ----------------------------------------------------------------------------------------------------------------------

const myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Metodo 01
myNumbers.forEach((value) => {
    console.log({value});
});



