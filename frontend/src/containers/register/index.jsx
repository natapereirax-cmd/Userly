import { StyledRegister } from "./style";
import Button from "../../components/button";
import { StyledContainer } from "../../components/main-div/style";
import Icon from "../../components/icon";

export default function Register () {
    return (<StyledRegister>
        <StyledContainer>
            <Icon />
            <Button
            type="submit"
            showArrow
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path d="M19 8v6" />
                    <path d="M22 11h-6" />
                </svg>
                    }
                >
                    Register
                </Button>
        </StyledContainer>
    </StyledRegister>)
}