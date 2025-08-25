import './style.css'
// import './bases/03-object-literal';
// import './bases/05-functions';
// import './bases/07-array-destructuring';
import './bases/08.imp.exp';
import {getHeroesByOwner} from "./bases/08.imp.exp.ts";
import {Owner} from "./bases/data/heroes.data.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
        <h1>Hola Mundo</h1>
  </div>
`;

// El en main.ts usarán las función
// console.log(getHeroesByOwner('Marvel'));
// console.log(getHeroesByOwner(Owner.DC));
