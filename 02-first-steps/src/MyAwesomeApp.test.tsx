import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {MyAwesomeApp} from "./MyAwesomeApp.tsx";

describe('MyAwesomeApp', () => {
    test('should render  firstName and lastName', () => {
        const {container} = render(<MyAwesomeApp/>);
        const h1 = container.querySelector('h1');
        const h2 = container.querySelector('h2');

        expect(h1?.innerHTML).toContain('Edwin');
        expect(h2?.innerHTML).toContain('HC');
    });

    test('should render  firstName and lastName - Screen', () => {
        render(<MyAwesomeApp />);
        screen.debug();
        console.log('---------------------------------------------------')
        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Edwin');
    });

    // Fotografia de la pantalla  como test
    test('should match snapsho', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    })
});
