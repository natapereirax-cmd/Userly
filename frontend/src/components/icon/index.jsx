import {
    StyledLogo,
    StyledIcon,
    StyledContent,
    StyledName,
    StyledDescription
} from './style';

export default function Icon() {
    return (
        <StyledLogo>
            <StyledIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                >
                    <circle
                        cx="24"
                        cy="15"
                        r="8"
                        fill="currentColor"
                    />

                    <path
                        d="M8 39C8 30.16 15.16 23 24 23
                           C32.84 23 40 30.16 40 39
                           C40 40.1 39.1 41 38 41H10
                           C8.9 41 8 40.1 8 39Z"
                        fill="currentColor"
                    />
                </svg>
            </StyledIcon>

            <StyledContent>
                <StyledName>
                    user<span>ly</span>
                </StyledName>

                <StyledDescription>
                    All users at one place
                </StyledDescription>
            </StyledContent>
        </StyledLogo>
    );
}