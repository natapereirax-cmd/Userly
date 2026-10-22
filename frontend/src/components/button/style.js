import styled from 'styled-components';

export const StyledButton = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 10px 18px;
    min-height: 54px;

    background: linear-gradient(
        135deg,
        #0be98b 0%,
        #06c978 100%
    );

    color: #071b13;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 14px;

    font-family: inherit;
    font-size: 1.5rem;

    letter-spacing: 0.1px;

    cursor: pointer;
    overflow: hidden;

    box-shadow:
        0 4px 12px rgba(6, 225, 130, 0.12),
        0 0 0 1px rgba(6, 225, 130, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        background 0.25s ease;

    /* Reflexo sutil */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -120%;
        width: 70%;
        height: 100%;

        background: linear-gradient(
            100deg,
            transparent,
            rgba(255, 255, 255, 0.22),
            transparent
        );

        transform: skewX(-20deg);
        transition: left 0.6s ease;
    }

    /* Área do ícone */
    .button-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 29px;
        height: 29px;

        background: rgba(7, 27, 19, 0.09);
        border: 1px solid rgba(7, 27, 19, 0.1);
        border-radius: 9px;

        transition:
            transform 0.25s ease,
            background 0.25s ease;
    }

    .button-icon svg {
        width: 17px;
        height: 17px;
        stroke-width: 2;
    }

    .button-label {
        position: relative;
        z-index: 1;
    }

    .button-arrow {
        width: 17px;
        height: 17px;
        transition: transform 0.25s ease;
    }

    &:hover {
        transform: translateY(-2px);

        box-shadow:
            0 8px 24px rgba(6, 225, 130, 0.2),
            0 0 0 1px rgba(6, 225, 130, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);

        &::before {
            left: 150%;
        }

        .button-icon {
            transform: rotate(-5deg) scale(1.05);
            background: rgba(7, 27, 19, 0.15);
        }

        .button-arrow {
            transform: translateX(4px);
        }
    }

    &:active {
        transform: translateY(0) scale(0.98);
    }

    &:focus-visible {
        outline: 2px solid #ffffff;
        outline-offset: 4px;
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;

        &::before {
            display: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;

        &::before,
        .button-icon,
        .button-arrow {
            transition: none;
        }

        &:hover {
            transform: none;
        }
    }
`;