import styled from 'styled-components';

interface TypographySizes {
    [key: string]: {
        fontSize: string;
        fontWeight: number;
    }
}

const sizes: TypographySizes = {
  display2xl: {
    fontSize: '6rem',
    fontWeight: 700,
  },
  displayxl: {
    fontSize: '5rem',
    fontWeight: 700,
  },
  displaylg: {
    fontSize: '4rem',
    fontWeight: 700,
  },
  displaymd: {
    fontSize: '3rem',
    fontWeight: 700,
  },
  displaysm: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  headline: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  body: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  bodyxs: {
    fontSize: '0.75rem',
    fontWeight: 500,
  },
};

const Typography = styled.span <{ variant: string; weight?: number}>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => sizes[props.variant]?.fontWeight || props.weight || 400};
  font-size: ${(props) => sizes[props.variant]?.fontSize || '1rem'};
`;

export default Typography;