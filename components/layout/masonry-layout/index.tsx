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
`;

const MasonryLayout = styled.div`
    max-width: 620px;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 1rem;
`;

const BackgroundImage = styled.div<{ imgUrl: string; height: string }>`
    background-image: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: center;
    height: ${(props) => props.height};
    animation: ${appear} 1s ease-in-out;
    margin-bottom: 1rem;
    width: 180px;
    border-radius: 1rem;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;


interface Props {
    cards: { id: number; img_url: string }[];
}

export const Masonry: React.FC<Props> = ({ cards }) => {
    const customLayout = [
        { height: 'calc(40% - 0.5rem)' },
        { height: 'calc(30% - 0.5rem)' },
        { height: 'calc(33.33% - 0.66rem)' },
        { height: 'calc(15% - 0.66rem)' },
        { height: 'calc(45% - 0.66rem)' },
        { height: 'calc(35% - 0.5rem)' },
        { height: 'calc(40% - 0.5rem)' },
    ];

    const columns = [[0, 1], [2, 3, 4], [5, 6]];

    return (
        <MasonryLayout>
            {columns.map((column, columnIndex) => (
                <Column key={columnIndex}>
                    {column.map((index) => (
                        <BackgroundImage
                            key={cards[index].id}
                            imgUrl={cards[index].img_url}
                            height={customLayout[index].height}
                        />
                    ))}
                </Column>
            ))}
        </MasonryLayout>
    );
};

