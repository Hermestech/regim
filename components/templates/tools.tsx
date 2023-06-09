import * as React from 'react';
import styled from 'styled-components';
import Typography from '../atoms/typography';
import Image from 'next/image';
import cards from '@/utils/cards-list.json';
import { useMobile } from '@/hooks/useMobile';

interface ITool {
    id: number;
    image_url: string;
}

const mapToolsToCards = (tools: ITool[], isMobile: boolean) => { 
    return tools.map((tool) => (
            <Image src={tool.image_url} width={isMobile ? '70' : '120' } height={isMobile ? '70' : '120'} alt="icono de caracteristica" key={tool.id}/>
    ))
}

export const Tools = () => { 
    const listOfTools = cards.list_tools;
    const isMobile = useMobile();
    return (
        <StyledTools>
            <TwoColumns>
                <StyledLeftColumn>
                    <div>
                        <Typography variant={isMobile ? 'displaysm' : 'displaylg'}>Integrate with your favorite tools</Typography>
                        <Typography variant="bodymd" style={{ color: '#374151' }}>
                            Connect RegiM with your most favorite sales and marketing tools
                        </Typography>
                   </div>
                </StyledLeftColumn>
                <StyledRightColumn>
                    <div>
                        {mapToolsToCards(listOfTools, isMobile)}
                    </div>
                </StyledRightColumn>
            </TwoColumns>
        </StyledTools>
    )
}

const StyledTools = styled.section`
    width: 90%;
    height: 70vh;
    background-image: url('/ellipse-.svg');
    background-repeat: no-repeat;
    background-position: top left 40px;
    background-size: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #E5E7EB;
    margin: 0 auto;
    @media (max-width: 768px) {
        background-position: top center;
        background-size: 100%;
    }
    @media (max-width: 500px) {
        background-size: 90%;
    }
`

const TwoColumns = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const StyledLeftColumn = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    & > div {
        margin-top: 5rem;
        padding-left: 20px;
        width: 90%;
        height: 196px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        @media (max-width: 768px) {
            text-align: center;
        }
        @media (max-width: 500px) {
            height: 160px;
            margin-top: 3rem;
            justify-content: space-evenly;

        }
    }
`

const StyledRightColumn = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
     & > div {
        margin-top: 5rem;
        padding-left: 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        @media (max-width: 768px) {
            margin-top: -150px;
        }
        @media (max-width: 500px) {
            margin-top: 0px;
        }
    }
`