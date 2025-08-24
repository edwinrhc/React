


const characterNames = ['Goku','Vegeta','Trunks'];

const [ , , Trunks ] = characterNames;

console.log({Trunks});

const returnsArrayFn = () =>{
    return ['ABC', 123] as const;
}

const [letters, numbers]  = returnsArrayFn();

console.log(letters, numbers);

