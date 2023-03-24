import { Navbar } from "../molecules/navbar"
import styled from "styled-components"
import { Columns } from "../organisms/columns"

export const Hero = () => { 
    return (
        <StyledHero>
            <Navbar />
            <Columns />
        </StyledHero>
    )
}


const StyledHero = styled.main`
    max-width: 1440px;
    height: 100vh;
    background-image: url('/Ellipse.svg');
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 42%;
    @media (max-width: 768px) {
        background-image: url('/ellipse-tablet.svg');
        background-position: bottom right;
        background-size: 90%;
        height: 110vh;
    }
    @media (max-width: 500px) {
        background-image: url('/ellipse-mobile.svg');
        background-size: 80%;
        background-position: bottom right;
    }
`