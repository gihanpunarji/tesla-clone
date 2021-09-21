import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, RightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={ backgroundImg }>
            <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
                </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                <LeftButton>
                    { leftBtnText }
                </LeftButton>
                { RightBtnText && 
                    <RightButton>
                        { RightBtnText }
                    </RightButton>
                 }     
            </ButtonGroup>
                </Fade>
            <DownArrow src="./images/down-arrow.svg">

            </DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./images/model-s.jpg');
    background-image: ${props => `url("/images/${props.bgImage}")`}
    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    align-items:center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: .85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: .65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`