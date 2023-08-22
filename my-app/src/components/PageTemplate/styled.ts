import styled from 'styled-components';

export const StyledContainer = styled.div<{theme: 'light' | 'dark'}>`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${({theme}) => theme === 'light' ? '#eee' : '#222'};
    color: ${({theme}) => theme === 'light' ? '#000' : '#fff'};
`
export const StyledButton = styled.button<{theme: 'light' | 'dark'}>`
    align-self: flex-end;
    background-color: ${({theme}) => theme === 'light' ? '#eee' : '#222'};
    color: ${({theme}) => theme === 'light' ? '#000' : '#fff'};
`
