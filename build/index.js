"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 1, -6, 0, 2]);
numbersCollection.bubbleSort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('yXaba');
charactersCollection.bubbleSort();
console.log(charactersCollection.data);