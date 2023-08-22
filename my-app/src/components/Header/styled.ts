import styled from 'styled-components';

export const StyledHeader = styled.header<{theme: 'light' | 'dark'}>`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 50px;
    background-color: #2835a1;
    border: 1.5px solid ${({theme}) => theme === 'light' ? '#eee' : '#222'};
`
export const StyledButtonBlue = styled.button<{theme: 'light' | 'dark'}>`
    width: 5%;
    background-color: #2835a1;
    border-right: 1.5px solid ${({theme}) => theme === 'light' ? '#eee' : '#222'};
`
export const StyledButtonLightBlue = styled.button<{theme: 'light' | 'dark'}>`
    width: 5%;
    background-color: #5762c3;
    border-right: 1.5px solid ${({theme}) => theme === 'light' ? '#eee' : '#222'};
`
