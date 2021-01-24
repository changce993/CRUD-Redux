import styled from 'styled-components';

export const Layout = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:999;
    background-color: rgba(0,0,0,.5);
`;

export const Form = styled.form`
    width:30rem;
    max-width:100%;
    padding:2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex:1;
    z-index:1000;
`;

export const Label = styled.label`
    font-size:10px;
    margin:0 0 .25rem .5rem;
`;

export const Input = styled.div`
    margin:${props => props.m ? props.m : '.5rem 0'};
    display:flex;
    flex-direction:column;

    input{
        border:1px solid ${props => props.theme.colors.black10};
        outline:none;
        padding:.75rem;
        width:20rem;
        max-width:100%;
        background-color: transparent;
        color:black;
        border-radius:.75rem;
        transition:.3s;

        :hover{
            border:1px solid ${props => props.theme.colors.primary20};
        }

        :focus{
            border:1px solid ${props => props.theme.colors.primary100};
        };
    }
`;

export const Button = styled.button`
    margin:${props => props.m ? props.m : '1rem 0'};
    cursor:pointer;
    border:none;
    outline:none;
    padding:1rem;
    width:20rem;
    max-width:100%;
    background: ${props => props.theme.colors.primary100};
    transition:.3s;
    color:white;
    border-radius:1rem;

    :hover{
        background: ${props => props.theme.colors.primaryDark};
    }
`;