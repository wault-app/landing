import FeatureList from "@components/FeatureList/FeatureList";
import MottoComponent from "@components/MottoComponent";
import Navbar from "@components/Navbar";
import { Container } from "@mui/material";
import { Fragment } from "react";

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Container sx={{ mt: "64px"}} maxWidth={"sm"}>
                <MottoComponent />
            </Container>
            <Container maxWidth={"md"}>
                <FeatureList />
            </Container>
        </Fragment>
    );
};

export default HomePage;