import styled from 'styled-components';
import { Col as ColUI } from '../ui/Grid';

export const Col = styled(ColUI)`
    display:flex;
    justify-content:space-between;
`;

export const Info = styled.div`
    
`;

export const Action = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:1rem;
    width:1.25rem;
    height:100%;

    .icon{
        cursor:pointer;
        transition:.3s;

        :hover{
            fill:${props => props.theme.colors.primary100};
        }

        :first-of-type{
            margin-bottom:1rem;
        }
    }
`;
