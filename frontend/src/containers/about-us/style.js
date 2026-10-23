import styled from "styled-components";

export const StyledAboutUs = styled.div`
    width: min(700px, 90%);
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
        width: 100%;
        margin: 0;
        color: white;
        text-align: left;
        color: #0be98b;
    }

    p {
        margin: 0;
        color: rgba(255, 255, 255, 0.75);
        font-size: 16px;
        line-height: 1.7;
        text-align: justify;
    }
`