import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    min-height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    margin: 60px auto;
    padding: 40px;

    background: #4E4E4E;
    color: #0D1117;

    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 24px;

    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.18),
        0 4px 12px rgba(0, 0, 0, 0.04);

    position: relative;
    overflow: hidden;

    /* Detalhe verde no topo */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 4px;

        background: linear-gradient(
            90deg,
            #06E182 0%,
            #00B96B 50%,
            rgba(6, 225, 130, 0.15) 100%
        );
    }

    @media (max-width: 1200px) {
        width: calc(100% - 48px);
        max-width: none;
        margin: 40px auto;
    }

    @media (max-width: 768px) {
        width: calc(100% - 32px);
        min-height: 400px;

        margin: 24px auto;
        padding: 28px 22px;

        border-radius: 20px;
    }

    @media (max-width: 480px) {
        width: calc(100% - 24px);

        margin: 16px auto;
        padding: 24px 16px;

        border-radius: 16px;
    }
`;