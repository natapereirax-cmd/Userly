import styled from "styled-components";

export const StyledRegister = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    div, form {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .form-div {
        align-items: start;
        gap: 0.25rem;
    }
    form {
        align-items: center;
        gap: 1rem;
    }

    label {
        color: #ffff;
        font-size: 0.82rem;
        font-weight: 600;
        letter-spacing: 0.1px;
    }

    input {
        width: 100%;
        height: 42px;
        padding: 0 12px;

        box-sizing: border-box;

        background: #111820;
        color: #FFFFFF;

        border: 1px solid #29343E;
        border-radius: 9px;
        outline: none;

        font-family: inherit;
        font-size: 0.85rem;

        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;

        &::placeholder {
            color: #74808C;
            font-size: 0.82rem;
        }

        &:hover {
            border-color: #3C4A55;
        }

        &:focus {
            background: #131D25;
            border-color: #06E182;
            box-shadow: 0 0 0 3px rgba(6, 225, 130, 0.1);
        }

        &:disabled {
            background: #171D23;
            color: #68737D;
            cursor: not-allowed;
        }

        &:read-only {
            background: #171D23;
            cursor: default;
        }

        &::selection {
            background: rgba(6, 225, 130, 0.3);
            color: #FFFFFF;
        }

    }
`