import styled from "styled-components";
import Image from "next/image";

interface CardProps { 
    imgUrl: string;
}

export const Card = ({imgUrl}:CardProps) => { 
    return (
        <StyledCard imgUrl={imgUrl} />
    )
}


const StyledCard = styled.div<{imgUrl:string}>`
    width: 180px;
    min-height: 92px;
    background-color: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    background-image: url(${({ imgUrl }: CardProps) => imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
`