import SecurityIcon from "@components/SecurityIcon";
import { Button, Grid, Typography } from "@mui/material";

export type EncryptionBlockProps = {};

const EncryptionBlock = (props: EncryptionBlockProps) => {
    return (
        <Grid container spacing={2} sx={{ mt: 10, mb: 10 }} alignItems={"center"}>
            <Grid item xs={12} md={7}>
                <Typography variant={"h5"} component={"h2"} gutterBottom>
                    State of the art encryption
                </Typography>
                <Typography gutterBottom>
                    We are using well-developed and battle-tested encryption algorithms to ensure maximum security. There has not been any security incidents so far.  
                </Typography>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Button variant={"contained"} size={"large"}>
                            Check documentation
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }} md={5}>
                <SecurityIcon sx={{ width: "100%", height: "100%" }} />
            </Grid>
        </Grid>
    );
};

export default EncryptionBlock;