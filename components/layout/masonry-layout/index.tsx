import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Card } from '@/components/atoms/card';

const appear = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const MasonryLayout = styled.div`
    max-width: 592px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`;

const MasonryItem = styled(Card)`
 animation: ${appear} 1s ease-in-out;   
`
interface Props { 
    cards: { id:number, img_url:string }[];
}

export const Masonry: React.FC<Props> = ({ cards }) => {
    return (
        <MasonryLayout>
            {cards.map((card) => (
                <MasonryItem key={card.id} imgUrl={card.img_url} />
            ))}
        </MasonryLayout>
    )
}