import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 1, -6, 0, 2]);
numbersCollection.bubbleSort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('yXaba');
charactersCollection.bubbleSort();
console.log(charactersCollection.data);
