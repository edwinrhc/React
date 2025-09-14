import {describe, expect, test} from "vitest";
import {CustomHeader} from "./CustomHeader.tsx";
import {render, screen} from "@testing-library/react";


describe('CustomHeader', () => {

    const title = 'Test Title';

    test('should render the title correctly', () => {
            render(<CustomHeader title={title} />)
        // screen.debug();
        expect(screen.getByText(title)).toBeDefined();
    });

    test('should render the description when provied', () => {
        const description = 'Test Description';
        render(<CustomHeader title={title} description={description} />)
        screen.debug();
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);

    });

    test('should not render description when not provided', () => {
        // container = render
        const { container } = render(<CustomHeader title={title} />);
        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();

    });


})
