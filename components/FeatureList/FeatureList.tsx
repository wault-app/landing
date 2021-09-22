import { ButtonBase, Card, CardContent, Grid, Skeleton, SvgIconTypeMap, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { PersonRounded as UserIcon, CreditCardRounded as CreditCardIcon } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import AccountCard from "@components/AccountCard";
import EthereumCard from "@components/EthereumCard";

export type FeatureListProps = {};

const features: { [key: string]: FeatureType } = {
    "account": {
        title: "Account",
        description: "Save your username, password and a note for you.",
        Icon: UserIcon,
    },
    "credit-card": {
        title: "Credit/Debit card",
        description: "Store your card informations such as card number, cardholder's name or CVC code.",
        Icon: CreditCardIcon,
    },
    "totp": {
        title: "Two factor authentication",
        description: "Store your 2FA key and you won't ever need your phone to log into somewhere again!",
        Icon: CreditCardIcon,
    },
    "ethereum": {
        title: "Ethereum wallet",
        description: "Store your Ethereum wallet and check it conviniently!",
        Icon: CreditCardIcon,
    }
};

type FeatureType = {
    title: string;
    description: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
};
type FeatureKeyType = keyof typeof features;

const FeatureList = (props: FeatureListProps) => {
    const theme = useTheme();
    const [selected, setSelected] = useState<FeatureKeyType>("account");

    return (
        <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={12} md={6}>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        flexWrap: {
                            xs: "nowrap",
                            md: "wrap",
                        },
                        overflow: {
                            xs: "auto",
                            md: "none",
                        },
                        pb: 2,
                    }}
                >
                    {Object.keys(features).map((key) => ({ ...features[key], key })).map(({ Icon, key, title, description }) => (
                        <Grid item xs={12} key={key} sx={{
                            minWidth: {
                                xs: 300,
                                md: undefined,
                            },
                            maxWidth: {
                                xs: 400,
                                md: undefined,
                            },
                        }}>
                            <ButtonBase
                                onClick={() => setSelected(key)}
                                sx={{
                                    width: "100%",
                                    padding: 2,
                                    borderRadius: `${theme.shape.borderRadius}px`,
                                    borderWidth: 1,
                                    borderStyle: "solid",
                                    borderColor: selected === key ? theme.palette.primary.main : "transparent",
                                }}
                            >
                                <Grid container spacing={1} alignItems={"center"}>
                                    <Grid item>
                                        <Icon
                                            fontSize={"large"}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"h6"} align={"left"} sx={{ lineHeight: 1, fontWeight: 600 }} gutterBottom>
                                            {title}
                                        </Typography>
                                        <Typography variant={"body2"} align={"left"} sx={{ fontSize: "14px" }}>
                                            {description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ButtonBase>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                {selected === "account" ? (
                    <AccountCard />
                ) : selected === "ethereum" && (
                    <EthereumCard />
                )}
            </Grid>
        </Grid>
    );
};

export default FeatureList;