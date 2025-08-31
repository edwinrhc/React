import {describe, expect, test} from "vitest";
import {ItemCounter} from "./ItemCounter.tsx";
import {fireEvent, render, screen} from "@testing-library/react";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = 'Test item';
        render(<ItemCounter name={name}/>)

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });
    // ----------------------------------------------------------------------------------------------------------------------
    test('should render with custom quantity', () => {
        const name = 'Nintendo Switch 2';
        const quantity = 1;
        render(<ItemCounter name={name} quantity={quantity}/>)
        expect(screen.getByText(quantity)).toBeDefined();
    });
    // ----------------------------------------------------------------------------------------------------------------------
    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name={'Test item'} quantity={1} />);
        // Take the button
        const [ buttonAdd ] = screen.getAllByRole('button');
        fireEvent.click(buttonAdd);
        expect( screen.getByText('2')).toBeDefined();
    });

    test('Should decrease count when -1 button is pressed', ()=> {
        const quantity = 5
        render(<ItemCounter name={'Test item'} quantity={quantity} />);
        // Take the button
        const [ ,buttonSubtract ] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);
        expect( screen.getByText('4')).toBeDefined();
    });

    test('Should decrease count when -1 button is pressed and quantity is 1', ()=> {
        const quantity = 1
        render(<ItemCounter name={'Test item'} quantity={quantity} />);
        // Take the button
        const [ ,buttonSubtract ] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);
        expect( screen.getByText('1')).toBeDefined();
    })
});
