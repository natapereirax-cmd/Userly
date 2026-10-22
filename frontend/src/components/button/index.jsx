import { StyledButton } from './style';

export default function Button({
    children,
    icon,
    showArrow = false,
    type = 'button',
    ...props
}) {
    return (
        <StyledButton type={type} {...props}>
            {icon && (
                <span className="button-icon" aria-hidden="true">
                    {icon}
                </span>
            )}

            <span className="button-label">
                {children}
            </span>

            {showArrow && (
                <svg
                    className="button-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            )}
        </StyledButton>
    );
}