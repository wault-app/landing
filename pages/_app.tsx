import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import Head from "next/head";
import "../public/apexcharts.css";

const primary = blue;
const secondary = purple;

const theme = createTheme({
    palette: {
        mode: "dark",
        primary,
        secondary,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    background: `linear-gradient(45deg, ${primary[500]} 0%, ${secondary[500]} 100%)`
                }
            }
        }
    }
});

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Wault</title>
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
