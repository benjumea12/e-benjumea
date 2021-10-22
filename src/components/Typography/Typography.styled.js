import styled, { keyframes } from 'styled-components'

const animaTitle = keyframes`
    from { transform: translate(0,0) }
    to { transform: translate(6px,6px) }
`

const animaText = keyframes`
    from { opacity: 0; }
    to { opacity: 1 }
`


export const H1 = styled.div`
    position: relative;

    .border {
        z-index: 0;
        position: absolute;
        width: 99%;
        height: 95%;
        border: 2px solid ${ props => props.theme.secondary };
        animation: ${ animaTitle } 0.4s 2.5s forwards cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    
    h1{
        position: relative;
        z-index: 2;
        font-size: 50px;
        padding: 5px 15px;
        color: ${ props => props.theme.primary };
        background-color: ${ props => props.theme.secondary };
    }
`

export const H2 = styled.div`
    position: relative;
    .border {
        z-index: 0;
        position: absolute;
        width: 99%;
        height: 95%;
        border: 2px solid ${ props => props.theme.secondary };
        animation: ${ animaTitle } 0.4s 3.5s forwards cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    h2 {
        z-index: 2;
        position: relative;
        font-size: 42px;
        padding: 3px 10px;
        color: ${ props => props.theme.primary };
        background-color: ${ props => props.theme.secondary };
    }
`

export const H3 = styled.h2`
    font-size: 35px;
    padding: 3px 10px;
    color: ${ props => props.theme.primary };
    background-color: ${ props => props.theme.secondary };
`

export const P = styled.p`
    font-size: 15px;
    opacity: 0;
    line-height : 28px;
    padding: 2px 5px;
    color: ${ props => props.theme.secondary };
    animation: ${ animaText } 0.7s ${ props => props.delay*1.5 }s forwards cubic-bezier(0.68, -0.6, 0.32, 1.6);
`