import styled from 'styled-components';
import { Form as FormUI } from '../../components/ui/Form'

export const Form = styled(FormUI)`
    display:flex;
    background-color: #fff;
    border-radius:1rem;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    box-shadow:0 0 16px  #909090;
`;