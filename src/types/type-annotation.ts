/* eslint-disable */
// tipos básicos ( aqui ocorre inferência de tipos )
let name: string = "Lucio"; // Qualquer tipos strings:
let age: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // true ou false
let simbol: symbol = Symbol("qualquer-simbolo"); // symbol
let big: bigint = 10n; // bigint

// Arrays
let numberArrays: Array<number> = [1, 2, 3];
let numberArraysTwo: number[] = [1, 2, 3];
let stringArray: Array<string> = ["Morango", "Banana", "Melancia"];
let stringArrayTwo: string[] = ["Morango", "Banana", "Melancia"];

// Objetos
let person: { name: string; age: number; adult?: boolean } = {
    name: "Bruce Wayne",
    age: 30,
};

// Functions
function sum(x: number, y: number) {
    return x + y;
}

const sumTwo = (x: number, y: number) => {
    return x + y;
};

const sumTree: (x: number, y: number) => number = (x, y) => x + y;
