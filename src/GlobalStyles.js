import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html {
        font-size: 16px;
        box-sizing:border-box;
    }

    *, *::before, *::after {
        padding:0;
        margin:0;
        box-sizing:inherit;
        font-family: 'DM Sans', sans-serif;
        color:${props => props.theme.colors.black90};
    }

    body {
        font-size:1rem;
        line-height:1.5;
        background-color: #fafaff;
    }

    .container{
        max-width:1440px;
        width:90%;
        margin:0 auto;
        position:relative;
    }

    img {
        max-width:100%;
    }
`;
