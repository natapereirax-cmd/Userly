import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.1rem;
    font-size: 12px;
    padding-bottom: 2rem;

    .footer-text {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }
    
    p {
        color: #A6A6A6;
    }

    span {
        background: linear-gradient(90deg, #0be98b, #06c978, #06c978);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 6 00;
    }

    i {
        background: transparent;
        color: #06c978;
    }
`