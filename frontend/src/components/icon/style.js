import styled from 'styled-components';

const GREEN = '#06E182';
const GRAY = '#A9A9A9';
const WHITE = '#FFFFFF';

export const StyledLogo = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 14px;
    font-family: Inter, Arial, sans-serif;
`;

export const StyledIcon = styled.div`
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    background-color: ${GREEN};
    color: ${WHITE};
    border-radius: 17px;

    box-shadow: 0 5px 15px rgba(6, 225, 130, 0.18);

    svg {
        width: 36px;
        height: 36px;
    }

    @media (max-width: 480px) {
        width: 48px;
        height: 48px;
        border-radius: 14px;

        svg {
            width: 30px;
            height: 30px;
        }
    }
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const StyledName = styled.h1`
    margin: 0;
    color: ${WHITE};
    font-size: 2.25rem;
    font-weight: 800;
    letter-spacing: -1.8px;
    line-height: 1;

    span {
        color: ${GREEN};
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const StyledDescription = styled.p`
    margin: 0;
    color: ${GRAY};
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.2px;

    @media (max-width: 480px) {
        font-size: 0.7rem;
    }
`;
