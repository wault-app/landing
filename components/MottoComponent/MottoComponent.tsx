import { Button, Grid, Link, Typography, useTheme } from "@mui/material";
import { Box, GridProps } from "@mui/system";

export type MottoComponentProps = GridProps;

const MottoComponent = (props: MottoComponentProps) => {
    const theme = useTheme();

    return (
        <Grid spacing={2} sx={{ height: "80vh" }} alignContent={"center"} {...props} container>
            <Grid item xs={12}>
                <Typography
                    align={"center"}
                    variant={"h3"}
                    component={"h1"}
                    sx={{
                        fontWeight: 800,
                        lineHeight: 1,
                    }}
                >
                    {"The future of "}
                    <Box
                        component={"span"}
                        sx={{ 
                            color: "transparent",
                            background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                            WebkitTextFillColor: "transparent",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                        }}
                    >
                        password managers
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align={"center"} variant={"body2"}>
                    Wault is the next generation of password managers with support for account, two factor authentication, credit cards, cryptocurrency wallets and much more! 
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
                <Link href={"https://hub.wault.app"} underline={"none"}>
                    <Button
                        size={"large"}
                        variant={"contained"}
                    >
                        Open the hub
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default MottoComponent;