import styled, { keyframes } from 'styled-components'  

const animaCursor = keyframes`
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
`

export const Main = styled.div`
	.title { 
		padding: 5px;
		font-size: 50px;
		color: ${props => props.theme.secondary};
		background-color: ${props => props.theme.primary};
		display: inline-block;
	}

	.cursor {
		height: 40px;
		width: 5px;
		margin: 5px 5px 0px 5px;
		background-color: ${props => props.theme.secondary};
		display: inline-block;
		animation: ${ animaCursor } 0.9s infinite steps(1);
	} 
`
