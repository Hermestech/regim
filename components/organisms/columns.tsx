import * as React from 'react';
import styled from 'styled-components';
import Typography from '../atoms/typography';
import { Button } from '../atoms/button';
import { Masonry } from '../layout/masonry-layout';
import cards from '@/utils/cards-list.json'
import { useMobile } from '@/hooks/useMobile';
import { useSelector, useDispatch } from 'react-redux';
import Confetti from 'react-confetti';
import { setConfettiVisible, setEmail } from '@/store/actions';
import { RootState } from '@/store/store';

import { RegisterModal } from '../atoms/register-modal';

export const Columns = () => { 
    const listOfCards = cards.cards_list;
    const [showModal, setShowModal] = React.useState(false);
    const [showConfetti, setShowConfetti] = React.useState(false);


    const isMobile = useMobile();
    const dispatch = useDispatch();
    const confettiVisible = useSelector((state: RootState ) => state.waitlist.confettiVisible)


React.useEffect(() => {
  if (showConfetti) {
    const timerId = setTimeout(() => {
      setShowConfetti(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }
}, [showConfetti]);



    const handleModal = () => { 
        setShowModal(!showModal);
    }

  const handleCloseModal = () => {
    setShowModal(false);
    setShowConfetti(false);
  };
    
const handleModalSubmitted = () => {
    setShowModal(false);
    setShowConfetti(true);
  };


    return (
        <StyledColumns>
            <StyledLeftColumn>
                <div>
                    <Typography variant={isMobile ? 'displaymd' : 'displaylg'}>
                        Event Registration Reimagined
                    </Typography>
                <Typography
                    variant={isMobile ? 'body' : 'bodylg'}
                        style={{
                            color: '#374151',
                            letterSpacing: '0.02em',
                            lineHeight: '28px',
                        }}    
                    >Manage your event registrations hassle free and without any dependency with the technical team. Isn`t it sounds amazing?
                </Typography>
                    <Button
                        size='medium'
                        label="Get Early Access"
                        variant='primary'
                        onClick={() => handleModal()}
                    />
                    <RegisterModal
                        isOpen={showModal}
                        onClose={handleCloseModal}
                        onFormSubmitted={handleModalSubmitted}
                    />
                </div>
            </StyledLeftColumn>
            <StyledRightColumn>
                <Masonry cards={listOfCards}/>
            </StyledRightColumn>
            {showConfetti && <Confetti />}
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
        gap: 2rem;

        & > button {
            margin-top: 1rem;
        }
    }
    @media (max-width: 500px) {
        padding: 1rem;
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