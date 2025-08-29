import {expect, test} from "vitest";
import {add} from "./math.helper.ts";


test('should add two positive numbers', () => {

    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    console.log({result});
    expect(result).toBe(4); // Aqui esperamos que el resultado sea 4

});
