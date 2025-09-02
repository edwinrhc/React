import {render,screen} from "@testing-library/react";
import {describe, expect, test, vi} from "vitest";
import {FirstStepsApp} from "./FirstStepsApp.tsx";

vi.mock('./shopping-cart/ItemCounter.tsx', () => ({
    ItemCounter: () => <div data-testid="ItemCounter" />
}));

describe('FirstStepsApp', () =>{

    test('should math snapshot',()=> {
        const  { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    })
    // ----------------------------------------------------------------------------------------------------------------------
    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);
        const itemCounters = screen.getAllByTestId('ItemCounter');
        // console.log(itemCounters.length);
        expect(itemCounters.length).toBe(3);
        screen.debug();
    })

})
