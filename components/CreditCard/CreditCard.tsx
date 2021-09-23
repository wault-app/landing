import { FileCopyRounded as CopyIcon, VisibilityOffRounded as HideIcon, VisibilityRounded as ShowIcon } from "@mui/icons-material";
import { Card, CardContent, CardProps, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import ReactCreditCard from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css";

export type CreditCardProps = CardProps;

const CreditCard = (props: CreditCardProps) => {
    const [show, setShow] = useState(false);

    return (
        <Card {...props}>
            <CardContent sx={{ mt: 2, mb: 2 }}>
                <ReactCreditCard
                    name={"Example User"}
                    expiry={"02/22"}
                    number={"5321••••••••1234"}
                    cvc={123}
                    focused={show ? "cvc" : null}
                />
            </CardContent>
            <List>
                <ListItem button onClick={() => setShow(!show)}>
                    <ListItemIcon>
                        {
                            !show ? (
                                <ShowIcon />
                            ) : (
                                <HideIcon />
                            )
                        }
                    </ListItemIcon>
                    <ListItemText
                        primary={!show ? "Show CVC code" : "Hide CVC code"}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CopyIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={"Copy card number"}
                    />
                </ListItem>
            </List>
        </Card>
    );
};

export default CreditCard;