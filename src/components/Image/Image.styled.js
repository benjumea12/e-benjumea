import styled, { keyframes } from "styled-components"

// Show card keyframes
const animaShowCard = keyframes`
    0% { transform: scale(0.8); opacity: 0; }
    30% { transform: scale(1.04); opacity: 0.3; }
    50% { transform: scale(0.96); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
`

export const Main = styled.div`
	width: ${props => props.width ? props.width : `100%`};
	opacity: 0;
	margin: 15px;
	animation: ${animaShowCard} 0.7s 1s ease-in-out forwards;  

	@media (max-width: ${props => props.theme.sizes.sm}) {
		width: 100%;
	}

		.card{
			position: relative;
			cursor: pointer;

			.image {
				${props => !props.imgLoad && `
					height: 10em;
					display: flex;
					justify-content: center;
					align-items: center;
			`};
		}

		.image > h3 {
			display: ${props => props.imgLoad && `none`};
		}

		.image > img {
			position: relative;
			z-index: 1;
			width: 99%;
			margin: 0px 0px -4px 0px;
			border: 2px solid ${props => props.theme.secondary};
			display: ${props => props.imgLoad ? `block` : `none`};
		}

		.border1, .border2 {
				z-index: 0;
				position: absolute;
				width: 98%;
				height: 98%;
				border: 2px solid ${props => props.theme.secondary};
				transition: transform cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.4s;
		}

		&:hover > .border1 {
				transform: translate(16px, 16px);
		}

		&:hover > .border2 {
				transform: translate(11px, 10px);
				transition-delay: 0.05s;
		}
	}
`

const AnimaOverlay = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`

const ReverseAnimaOverlay = keyframes`
	from { opacity: 1; }
	to { opacity: 0; }
`

const AnimaImage = keyframes`
	from { transform: scale(0.9) }
	to { transform: scale(1) }
`
const ReverseAnimaImage = keyframes`
	from { transform: scale(1) }
	to { transform: scale(0.9) }
`

export const ModalMain = styled.div`
    position: fixed;
    z-index: 100; 
    height: 100vh;
    width: 100vw;   
    cursor: pointer;
    animation: ${props => props.openImg ? AnimaOverlay : ReverseAnimaOverlay} 0.2s ease-in-out forwards ; 
    
    .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.25;
    }

    .image {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-height: 90%;
        max-width: 90%;
        background-color: cyan;
        border: 2px solid ${props => props.theme.secondary};

        @media (max-width: ${props => props.theme.sizes.sm}) {
            max-height: 90%;
            max-width: 90%;
        }

        animation: ${props => props.openImg ? AnimaImage : ReverseAnimaImage} 0.2s forwards cubic-bezier(0.68, -0.6, 0.32, 1.6); 
    }
`