import { render,screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe('Button component', () => {
    test('Renders with text', () => {
        render(<Button text="test"/>);
        const button = screen.getByText('test');
        expect(button).toBeInTheDocument();
    }),
    test('Renders with correct className', () => {
        render(<Button text="test" />);
        const button = screen.getByText('test');
        expect(button).toHaveClass('custom-button');
    }),
    test('Renders with handleClick', () => {
        const testFunction = jest.fn();
        render(<Button text="test" handleClick={testFunction} />);
        const button = screen.getByText('test');
        fireEvent.click(button);
        expect(testFunction).toHaveBeenCalledTimes(1);
    })
})