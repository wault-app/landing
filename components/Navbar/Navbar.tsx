import { AppBar, AppBarProps, Button, createTheme, Grid, ThemeProvider, Toolbar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box, useTheme } from "@mui/system";
import Image from "next/image";

export type NavbarProps = AppBarProps;

const links = [
    {
        label: "Pricing",
        link: "/pricing",
    },
    {
        label: "Documentation",
        link: "/docs",
    },
    {
        label: "About us",
        link: "/about"
    }
];

const customTheme = createTheme({
    palette: {
        primary: {
            ...blue,
            500: "#fff",
        },
    }
});

const Navbar = (props: NavbarProps) => {
    const theme = useTheme();

    return (
        <AppBar
            {...props}
            sx={{
                ...props.sx,
                backdropFilter: "blur(16px)",
                background: "rgba(0, 0, 0, 0.8)"
            }}
        >
            <Toolbar sx={{}}>
                <ThemeProvider theme={customTheme}>
                    <Grid container spacing={1} alignItems={"center"}>
                        {links.map((link) => (
                            <Grid item key={`navbar-link-${link.label}`}>
                                <Button>
                                    {link.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </ThemeProvider>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;