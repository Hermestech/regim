import * as React from 'react';
import { Button } from '../atoms/button';
import styled from 'styled-components';
import Image from 'next/image';

export const Navbar = () => { 
    return (
        <StyledNavbar>
            <Image src='/Logo.svg' width={100} height={100} alt="logo RegiM"/>
            <Button
                size='medium'
                label="Ger Early Access"
                variant='primary'
                onClick={() => {console.log('clicked')}}
            />
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 116px 20px 80px;
    height: 5rem;
    @media (max-width: 768px) {
        padding: 20px 40px;
    }
    @media (max-width: 500px) {
        padding: 0 20px;
    }
    `