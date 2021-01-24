import styled from 'styled-components';

export const Title = styled.h1`
    color:${props => props.textColor};
    cursor:${props => props.cursor};
    text-align:${props => props.textAlign};
    font-weight:${props => props.fontWeight};
    font-size:${props => props.fontSize};
    margin:${props => props.m};
    padding:${props => props.p};
    width:${props => props.w};
    transition:.3s;

    :hover{
        color:${props => props.hoverColor};
    }
`

export const Subtitle = styled.h2`
    color:${props => props.textColor};
    cursor:${props => props.cursor};
    text-align:${props => props.textAlign};
    font-weight:${props => props.fontWeight};
    font-size:${props => props.fontSize};
    margin:${props => props.m};
    padding:${props => props.p};
    width:${props => props.w};
    transition:.3s;

    :hover{
        color:${props => props.hoverColor};
    }
`

export const Text = styled.p`
    color:${props => props.textColor};
    cursor:${props => props.cursor};
    text-align:${props => props.textAlign};
    font-weight:${props => props.fontWeight};
    font-size:${props => props.fontSize};
    margin:${props => props.m};
    padding:${props => props.p};
    width:${props => props.w};
    transition:.3s;

    :hover{
        color:${props => props.hoverColor};
    }
`
