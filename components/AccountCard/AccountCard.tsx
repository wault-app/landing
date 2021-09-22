import PlatformIcon from "@components/PlatformIcon";
import { PersonRounded as UserIcon, VpnKeyRounded as PasswordIcon } from "@mui/icons-material";
import { Card, CardContent, CardProps, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Platforms from "@wault/platforms";

export type AccountCardProps = CardProps;

const AccountCard = (props: AccountCardProps) => {
    const exampleAccount = {
        platform: "spotify.com",
        username: "example@wault.app",
        password: "secret123",
        totp: "hashedsecret321",
        description: "The company's personal DJ's account.",
    };

    const platform = Platforms.get(exampleAccount.platform);

    return (
        <Card {...props} sx={{ pb: 1, ...props.sx }}>
            <Box
                sx={{
                    backgroundSize: "cover",
                    width: "100%",
                    height: 64,
                    background: `linear-gradient(${platform.color}, transparent)`
                }}
            />
            <CardContent sx={{ textAlign: "center" }}>
                <PlatformIcon
                    sx={{ mt: "-42px", ml: "auto", mr: "auto", mb: 2, }}
                    hostname={exampleAccount.platform}
                />
                <Typography variant={"h6"} noWrap>
                    <b>
                        {exampleAccount.platform}
                    </b>
                </Typography>
                <Typography noWrap gutterBottom>
                    {exampleAccount.username}
                </Typography>
            </CardContent>
            <ListItem
                button
                onClick={() => { }}
            >
                <ListItemIcon>
                    <UserIcon />
                </ListItemIcon>
                <ListItemText
                    primary={"Copy username"}
                />
            </ListItem>
            <ListItem
                button
                onClick={() => { }}
            >
                <ListItemIcon>
                    <PasswordIcon />
                </ListItemIcon>
                <ListItemText
                    primary={"Copy password"}
                />
            </ListItem>
        </Card>
    );
};

export default AccountCard;