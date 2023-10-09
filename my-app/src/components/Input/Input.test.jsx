import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe('Input component', () => {
    test('Renders with label and placeholder', () => {
        render(<Input type="text" label="TestLabel" theme='light' placeholder="TestPlaceholder" value='test' handleChange={() => {}} />);
        const input = screen.getByPlaceholderText('TestPlaceholder');
        expect(input).toBeInTheDocument();
    })
})