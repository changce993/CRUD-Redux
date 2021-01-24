import styled from 'styled-components';

export const Nav = styled.nav`
    height:5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: white;
    box-shadow:0 0 32px 40px #fdfdff;
`

export const AddProduct = styled.button`
    outline:none;
    border:none;
    padding:1rem;
    min-width:10rem;
    max-width:100%;
    border-radius:10rem;
    cursor:pointer;
    color:white;
    background: ${props => props.theme.colors.primary100};
    transition:.3s;

    :hover{
        background: ${props => props.theme.colors.primaryDark};
    }
`