import { Typography, TypographyProps, useTheme } from "@mui/material";

export type FocusTextProps = TypographyProps; 

const FocusText = (props: FocusTextProps) => {
    const theme = useTheme();
    
    return (
        <Typography
            component={"span"}
            sx={{ 
                color: "transparent",
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                ...props.sx,
            }}
            {...props}
        />
    );
};

export default FocusText;