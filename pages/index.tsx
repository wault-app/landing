import EncryptionBlock from "@components/EncryptionBlock/EncryptionBlock";
import FeatureList from "@components/FeatureList/FeatureList";
import MottoComponent from "@components/MottoComponent";
import { Container } from "@mui/material";
import { Fragment } from "react";

const HomePage = () => {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <MottoComponent />
            </Container>
            <Container maxWidth={"md"}>
                <FeatureList />
            </Container>
            <Container maxWidth={"md"}>
                <EncryptionBlock />
            </Container>
        </Fragment>
    );
};

export default HomePage;