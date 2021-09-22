import { AppBar, AppBarProps, Button, Toolbar } from "@mui/material";

export type NavbarProps = AppBarProps;

const Navbar = (props: NavbarProps) => {
    return (
        <AppBar
            {...props}
            sx={{
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
        >
            <Toolbar sx={{ backgroundColor: "transparent" }}>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;