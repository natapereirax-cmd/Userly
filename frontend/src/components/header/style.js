import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;

    nav {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    nav a {
        color: #ffff;
        border-bottom: 2px solid transparent;
        background-clip: text;
        text-decoration: none;
    }

    nav a.is-active {
        border-bottom-color: #0be98b;
        font-weight: 700;
    }
`