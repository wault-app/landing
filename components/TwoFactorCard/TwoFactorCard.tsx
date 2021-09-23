import { FileCopyRounded as CopyIcon } from "@mui/icons-material";
import { Card, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

export type TwoFactorCardProps = {};

const TwoFactorCard = (props: TwoFactorCardProps) => {
    return (
        <Card>
            <Typography variant={"h4"} align={"center"} sx={{ mt: 4, mb: 4, fontWeight: "bold" }}>
                123 456
            </Typography>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <CopyIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={"Copy one time code"}
                    />
                </ListItem>
            </List>
            <LinearProgress
                variant="determinate" 
                value={80}
            />
        </Card>
    );
};

export default TwoFactorCard;