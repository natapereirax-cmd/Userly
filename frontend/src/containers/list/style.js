
import styled from 'styled-components';

export const StyledList = styled.section`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 24px 0;

    background: transparent;
    color: #FFFFFF;

    h2 {
        margin: 0 0 28px;
        color: #FFFFFF;
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: -0.5px;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 18px;

        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: flex;
        flex-direction: column;
        gap: 12px;

        min-width: 0;
        padding: 22px;

        background: rgba(255, 255, 255, 0.025);
        border: 1px solid #252D35;
        border-radius: 12px;

        transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;

        &:hover {
            transform: translateY(-3px);
            background: rgba(6, 225, 130, 0.035);
            border-color: rgba(6, 225, 130, 0.5);
        }

        p {
            margin: 0;
            color: #C5CDD5;
            font-size: 0.9rem;
            line-height: 1.6;
            overflow-wrap: anywhere;
        }

        strong {
            display: inline-block;
            min-width: 85px;
            color: #06E182;
            font-weight: 600;
        }

        button {
            align-self: flex-start;
            margin-top: 8px;
            padding: 8px 15px;

            background: transparent;
            color: #FF7777;

            border: 1px solid rgba(255, 95, 95, 0.3);
            border-radius: 7px;

            font-family: inherit;
            font-size: 0.82rem;
            font-weight: 600;

            cursor: pointer;

            transition:
                background 0.2s ease,
                color 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                background: #E5484D;
                color: #FFFFFF;
                border-color: #E5484D;
            }

            &:active {
                transform: scale(0.97);
            }

            &:focus-visible {
                outline: 2px solid #06E182;
                outline-offset: 3px;
            }
        }
    }

    @media (max-width: 600px) {
        padding: 20px 0;

        h2 {
            font-size: 1.35rem;
            margin-bottom: 22px;
        }

        ul {
            grid-template-columns: 1fr;
            gap: 14px;
        }

        li {
            padding: 18px;
        }
    }
`;
