import styled from 'styled-components';

export const StyledSpan = styled.span`
    display: block;
    font-weight: 500;
    margin: 30px 0 10px 0;
`

export const StyledInput = styled.input<{theme: 'light' | 'dark'}>`
    padding: 12px 15px;
    width: 100%;
    border-radius: 5px;
    background-color: ${({theme}) => theme === 'light' ? '#fff' : '#eee'};
`
