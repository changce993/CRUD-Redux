import styled from 'styled-components';

export const Notification = styled.div`
    position:absolute;
    bottom:5rem;
    left:50%;
    transform:translateX(-50%);
    z-index:100;
    padding:.5rem;
    margin:1rem;
    width:20rem;
    max-width:100%;
    text-align:center;
    background: ${(props, {success, error} = props.theme.colors) => props.success ? success : error};
    border-radius:1rem;
    color:white;
    animation:noti .6s;

    @keyframes noti{
        from {
            opacity:0;
            transform:translateY(3rem) translateX(-50%) scale(.95);
        }

        to {
            opacity:1;
            transform:translateY(0) translateX(-50%) scale(1);
        }
    }
`