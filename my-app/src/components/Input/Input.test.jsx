import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe('Input component', () => {
    test('Renders with label and placeholder', () => {
        // const {getByLabelText, getByPlaceholderText} = render(<Input type="text" label="test" placeholder="test" value='test' handleChange={() => {}} />)
        // expect(getByLabelText('TestLabel')).toBeInTheDocument();
    
        render(<Input type="text" label="TestLabel" theme='light' placeholder="TestPlaceholder" value='test' handleChange={() => {}} />);
        const input = screen.getByPlaceholderText('TestPlaceholder');
        expect(input).toBeInTheDocument();
    })
})