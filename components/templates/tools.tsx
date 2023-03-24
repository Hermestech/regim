import * as React from 'react';
import styled from 'styled-components';
import Typography from '../atoms/typography';
import Image from 'next/image';
import cards from '@/utils/cards-list.json';

interface ITool {
    id: number;
    image_url: string;
}

const mapToolsToCards = (tools: ITool[]) => { 
    return tools.map((tool) => (
            <Image src={tool.image_url} width={140} height={120} alt="icono de caracteristica" key={tool.id}/>
    ))
}

export const Tools = () => { 
    const listOfTools = cards.list_tools;

    return (
        <StyledTools>
            <TwoColumns>
                <StyledLeftColumn>
                    <div>
                        <Typography variant="displaylg">Integrate with your favorite tools</Typography>
                        <Typography variant="bodymd">
                            Connect RegiM with your most favorite sales and marketing tools
                        </Typography>
                   </div>
                </StyledLeftColumn>
                <StyledRightColumn>
                    <div>
                        {mapToolsToCards(listOfTools)}
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
`

const TwoColumns = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    }
`