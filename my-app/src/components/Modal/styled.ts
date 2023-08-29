import styled from 'styled-components';

export const StyledModal = styled.div<{theme: 'light' | 'dark'}>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 65%;
    background-color: ${({theme}) => theme === 'light' ? '#fff' : '#111'};
`