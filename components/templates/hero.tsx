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
`