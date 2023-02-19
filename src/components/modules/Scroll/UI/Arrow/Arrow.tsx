import { ArrowProps } from "./Arrow.props";

export const Arrow = ({ children, disabled, onClick, }: ArrowProps): JSX.Element => {

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none",
            }}
        >
            {children}
        </button>
    )
}