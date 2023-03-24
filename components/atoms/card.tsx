import styled from "styled-components";
import Image from "next/image";

interface CardProps { 
    imgUrl: string;
}

export const Card = ({imgUrl}:CardProps) => { 
    return (
        <StyledCard>
            <Image src={imgUrl}
                width={100}
                height={100}
                
                alt="card" />
        </StyledCard>
    )
}


const StyledCard = styled.div`
    width: 180px;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`