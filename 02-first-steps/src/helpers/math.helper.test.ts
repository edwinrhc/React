import {describe, expect, test} from "vitest";
import {add, divide, multiply, substract} from "./math.helper.ts";

describe('add', () => {

    test('should add two positive numbers', () => {

        //! 1. Arrange
        const a = 23;
        const b = 2;

        //! 2. Act
        const result = add(a, b);

        //! 3. Assert
        console.log({result});
        expect(result).toBe(a + b); // Aqui esperamos que el resultado sea 4
    });
})

describe('substract', () => {
    test('should substract numbers', () => {
        //Arrange
        const a = 23;
        const b = 2;

        const result = substract(a, b);

        expect(result).toBe(a-b);
    })
});

describe('multiply', () => {
    test('should multiply numbers', () => {
        //Arrange
        const a = 2;
        const b = 4;

        const result = multiply(a, b);
        console.log(`Resultado de multiplicar ${a} * ${b} = ${result}`)
        expect(result).toBe(a * b);
    })
})
// ----------------------------------------------------------------------------------------------------------------------
describe('divide', () => {
    test('should divide numbers', () => {
        //Arrange
        const a = 2;
        const b = 4;

        const result = divide(a, b);
        console.log(`Resultado de multiplicar ${a} / ${b} = ${result}`)
        expect(result).toBe(a / b);
    })
})
