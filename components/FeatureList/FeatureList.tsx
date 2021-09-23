import { ButtonBase, Card, CardContent, Grid, Skeleton, SvgIconTypeMap, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { PersonRounded as UserIcon, CreditCardRounded as CreditCardIcon } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import AccountCard from "@components/AccountCard";
import EthereumCard from "@components/EthereumCard";
import EthereumIcon from "@components/EthereumIcon";
import TwoFactorAuthenticationIcon from "@components/TwoFactorAuthenticationIcon";
import TwoFactorCard from "@components/TwoFactorCard";
import CreditCard from "@components/CreditCard";

export type FeatureListProps = {};

const features: { [key: string]: FeatureType } = {
    "account": {
        title: "Account",
        description: "Save your username, password and a note for you.",
        Icon: UserIcon,
    },
    "credit-card": {
        title: "Credit/Debit card",
        description: "Use your card for faster checkouts.",
        Icon: CreditCardIcon,
    },
    "totp": {
        title: "Two factor authentication",
        description: "You wont ever need again your phone to sign in.",
        Icon: TwoFactorAuthenticationIcon,
    },
    "ethereum": {
        title: "Ethereum wallet",
        description: "Store your Ethereum wallet and check it conviniently!",
        Icon: EthereumIcon,
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
                                    transition: "background-color 0.12s ease-in-out",
                                    backgroundColor: key === selected ? `${theme.palette.primary.light}20` : undefined,
                                    borderColor: selected === key ? theme.palette.primary.main : "transparent",
                                }}
                            >
                                <Grid container spacing={1} alignItems={"center"}>
                                    <Grid item xs={12} sx={{ textAlign: "left" }}>
                                        <Icon
                                            fontSize={"large"}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant={"h6"} align={"left"} sx={{ lineHeight: 1, fontWeight: 600 }} noWrap gutterBottom>
                                            {title}
                                        </Typography>
                                        <Typography variant={"body2"} align={"left"} sx={{ fontSize: "14px" }} noWrap>
                                            {description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ButtonBase>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{ height: 478 }}>
                {selected === "account" ? (
                    <AccountCard />
                ) : selected === "ethereum" ? (
                    <EthereumCard />
                ) : selected === "totp" ? (
                    <TwoFactorCard />
                ) : selected === "credit-card" && (
                    <CreditCard />
                )}
            </Grid>
        </Grid>
    );
};

export default FeatureList;