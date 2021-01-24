import styled from 'styled-components';

export const Layout = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rgba(0,0,0,.3);
    z-index:1000000;
`;

export const Modal = styled.div`
    padding:3rem 2rem;
    width:30rem;
    max-width:90%;
    background-color: #fff;
    border-radius:.25rem;
    box-shadow:0 0 32px 40px rgba(16,22,76,.06);

    .icon{
        width:100%;
        height:5rem;
        margin:0 auto;
    }
`;

export const Message = styled.p`
    text-align:center;
    margin:2rem 0;
`

export const Buttons = styled.div`
    display:flex;
    justify-content:center;
    column-gap:1rem;
`;

const Button = styled.button`
    outline:none;
    padding:.75rem 1rem;
    width:7rem;
    border-radius:1rem;
    cursor:pointer;
    transition:.3s;
`;

export const Confirm = styled(Button)`
    background-color: ${props => props.theme.colors.info};
    border:none;
    color:white;

    :hover{
        background-color: ${props => props.theme.colors.secondary100};
    }
`;

export const Cancel = styled(Button)`
    background-color: transparent;
    border:1px solid ${props => props.theme.colors.info};
    color:${props => props.theme.colors.info};

    :hover{
        color:${props => props.theme.colors.secondary100};
        border:1px solid ${props => props.theme.colors.secondary100};
    }
`;