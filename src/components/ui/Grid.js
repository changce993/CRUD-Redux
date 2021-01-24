import styled from 'styled-components';

export const Row = styled.div`
    display:grid;
    grid-template-columns:repeat(1,1fr);
    column-gap:2rem;
    row-gap:2rem;
    margin: ${props => props.margin};

    @media screen and (min-width:640px){
        grid-template-columns:repeat(2,1fr);
    };

    @media screen and (min-width:800px){
        grid-template-columns:repeat(3,1fr);
    };

    @media screen and (min-width:1080px){
        grid-template-columns:repeat(4,1fr);
    };
`;

export const Col = styled.div`
    box-shadow:0 0 4px #ddd;
    padding:${props => props.padding ? props.padding : '1rem'};
    background: ${props => props.background ? props.background : 'white'};
    border:1px solid ${props => props.borderColor ? props.borderColor : 'transparent'};
    transition:.3s;

    :hover{
        box-shadow:0 0 16px 8px #eee;
    }
`;
