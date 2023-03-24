import * as React from 'react';
import  styled  from 'styled-components';
import { theme } from '@/theme/theme';


export interface ButtonProps {
    label: string;
    onClick: () => void;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'tertiary';
}

type StyledButtonProps = Omit <ButtonProps, 'label'>;


export const Button: React.FC<ButtonProps> = ({ label, onClick, size = 'medium', variant = 'primary' }) => {
    return (
        <StyledButton size={size} variant={variant} onClick={onClick}>
            {label}
        </StyledButton>
    );
};


const StyledButton = styled.button<StyledButtonProps>` 
    width: ${(props) => {
        if (props.size === 'small') {
            return '80px';
        } else if (props.size === 'medium') {
            return '145px';
        } else {
            return '160px';
        }
    }};
    
    height: ${(props) => { 
        if (props.size === 'small') {
            return '30px';
        } else if (props.size === 'medium') {
            return '40px';
        } else {
            return '50px';
        }
    }};

    background-color: ${(props) => {
        if (props.variant === 'primary') {
            return theme.colors.primary;
        }
        else if (props.variant === 'secondary') {
            return theme.colors.secondary;
        }
        else if (props.variant === 'tertiary') {
            return theme.colors.tertiary;
        }
        return theme.colors.primary;
    }};
    
    color: ${(props) => {
        if (props.variant === 'primary') {
            return theme.colors.tertiary;
        }
        else if (props.variant === 'secondary') {
            return theme.colors.primary;
        }
        else if (props.variant === 'tertiary') {
            return theme.colors.primary;
        }     
        return theme.colors.tertiary;
    }};
    
    font-size: ${(props)=> {
        if (props.size === 'small') {
            return '14px';
        } else if (props.size === 'medium') {
            return '16px';
        } else {
            return '18px';
        }
    }};
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 14px;
`