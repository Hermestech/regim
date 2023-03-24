import * as React from 'react';
import styled from 'styled-components';
import Typography from '../atoms/typography';
import { Button } from '../atoms/button';
import { Masonry } from '../layout/masonry-layout';
import cards from '@/utils/cards-list.json'
import { useMobile } from '@/hooks/useMobile';


export const Columns = () => { 
    const listOfCards = cards.cards_list;
    const isMobile = useMobile();



    return (
        <StyledColumns>
            <StyledLeftColumn>
                <div>
                    <Typography variant={isMobile ? 'displaymd' : 'displaylg'}>
                        Event Registration Reimagined
                    </Typography>
                <Typography
                    variant='bodylg'
                    style={{ color: '#374151' }}    
                    >Manage your event registrations hassle free and without any dependency with the technical team. Isn`t it sounds amazing?
                </Typography>
                    <Button
                        size='medium'
                        label="Get Early Access"
                        variant='primary'
                        onClick={() => { console.log('clicked') }}
                    />
                </div>
            </StyledLeftColumn>
            <StyledRightColumn>
                <Masonry cards={listOfCards}/>
            </StyledRightColumn>
        </StyledColumns>
    )
}

const StyledColumns = styled.div`
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: 1.1fr  1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const StyledLeftColumn = styled.div`
    width: 100%;
    height: 100%;   
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        display: flex;
        flex-direction: column;
        max-width: 592px;
        gap: 1.5rem;
    }
`

const StyledRightColumn = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: 768px) {
       justify-content: center;
       height: 65vh;
    }
`