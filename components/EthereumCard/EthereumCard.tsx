import { Card, CardContent, CardProps, Grid, ListItem, ListItemIcon, ListItemText, Skeleton, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import CoinGecko from "coingecko-api";
import { Fragment, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { renderToString } from "react-dom/server";
import { Box } from "@mui/system";
import { QrCodeRounded as QRCodeIcon, TrendingDownRounded, TrendingUpRounded, VpnKeyRounded as KeyIcon } from "@mui/icons-material";

const BaseChart = dynamic(() => import("@components/BaseChart"), { ssr: false });

const intervals = {
    "day": {
        label: "1D",
        days: 1,
    },
    "week": {
        label: "1W",
        days: 7,
    },
    "month": {
        label: "1M",
        days: 31,
    },
    "year": {
        label: "1Y",
        days: 365,
    },
    "max": {
        label: "MAX",
        days: "max",
    },
};

export type EthereumCardProps = CardProps;

const EthereumCard = (props: EthereumCardProps) => {
    const [price, setPrice] = useState<number>();
    const [prices, setPrices] = useState<{ date: Date, value: number }[]>();
    const [error, setError] = useState<Error>();
    const [interval, setInterval] = useState<keyof typeof intervals>("week");
    const gecko = useMemo(() => new CoinGecko(), []);
    const theme = useTheme();

    useEffect(() => {
        gecko.simple.price({
            ids: ["ethereum"],
            vs_currencies: ["EUR"],
        }).then((resp) => {
            setPrice(resp.data.ethereum.eur);
        });
    }, []);

    useEffect(() => {
        setPrices(null);

        // @ts-ignore
        const { success, data } = gecko.coins.fetchMarketChart("ethereum", {
            vs_currency: "EUR",
            days: intervals[interval].days,
        }).then(({ success, data }) => {
            if (!success) setError(new Error("Could not load data!"));
            const unformatted: ([number, number])[] = data.prices;

            const newPrices = [];
            const n = 100;

            unformatted.map((el) => ({
                date: new Date(el[0]),
                value: el[1],
            })).forEach((el, index) => {
                // this algorithm filters to only have 100 data shown at any given time
                newPrices[Math.floor(index / unformatted.length * n)] = el;
            });

            setPrices(
                newPrices
            );
        });
    }, [interval]);

    const balance = 3;
    const stats = prices ? {
        positive: prices[0].value < prices[prices.length - 1].value,
        percentage: Math.floor(Math.abs(prices[prices.length - 1].value / prices[0].value - 1) * 10000) / 100,
        color: prices[0].value < prices[prices.length - 1].value ? theme.palette.primary.main : theme.palette.error.main
    } : null;

    return (
        <Card {...props} sx={{ pb: 1 }}>
            <CardContent>
                <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
                    {price ? (
                        `${balance * price} €`
                    ) : (
                        <Skeleton />
                    )}
                </Typography>
                <Grid container alignItems={"center"}>
                    <Grid item>
                        <Typography variant={"body2"} component={"span"}>
                            {`${balance} ETH `}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ height: 24, ml: 1 }}>
                        {
                            prices ? (
                                stats.positive ? (
                                    <TrendingUpRounded sx={{ fill: stats.color }} />
                                ) : (
                                    <TrendingDownRounded sx={{ fill: stats.color }} />
                                )
                            ) : (
                                <Skeleton width={24} height={24} />
                            )
                        }
                    </Grid>
                    <Grid item sx={{ height: 24, minWidth: 96, pl: 1, color: stats?.positive ? theme.palette.primary.main : theme.palette.error.main }}>
                        {prices ? (
                            <Typography variant={"body2"} component={"span"}>
                                {stats.percentage}%
                            </Typography>
                        ) : (
                            <Skeleton sx={{ width: 96, height: 24 }} />
                        )}
                    </Grid>
                </Grid>
            </CardContent>
            {prices && BaseChart ? (
                <BaseChart
                    height={200}
                    options={{
                        chart: {
                            animations: {
                                enabled: false,
                            },
                        },
                        stroke: {
                            dashArray: [0, 4],
                            colors: [prices[0].value > prices[prices.length - 1].value ? theme.palette.error.main : theme.palette.primary.main, theme.palette.mode === "dark" ? theme.palette.primary.contrastText : theme.palette.grey[500]]
                        },
                        tooltip: {
                            custom: ({ dataPointIndex }: { dataPointIndex: number }) => {
                                return renderToString(
                                    <Box sx={{ p: 1, backgroundColor: "#121212", color: "#ffffff" }}>
                                        <Typography>
                                            {`${prices[dataPointIndex].value} €`}
                                        </Typography>
                                        <Typography variant={"body2"}>
                                            {prices[dataPointIndex].date.toLocaleString()}
                                        </Typography>
                                    </Box>
                                );
                            },
                        }
                    }}
                    series={[
                        {
                            data: prices.map((el) => el.value),
                        },
                        {
                            data: prices.map(() => prices[0].value),
                        },
                    ]}
                    type="line"
                />
            ) : (
                <Skeleton height={215} variant={"rectangular"} />
            )}
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <ToggleButtonGroup size={"small"} sx={{ pt: 2, pb: 2 }}>
                        {Object.keys(intervals).map((key) => ({ ...intervals[key], key })).map(({ key, label }) => (
                            <ToggleButton
                                key={key}
                                value={key}
                                selected={key === interval}
                                onClick={() => setInterval(key)}
                            >
                                {label}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
            <ListItem
                button
            >
                <ListItemIcon>
                    <QRCodeIcon />
                </ListItemIcon>
                <ListItemText
                    primary={"Show donation QR code"}
                />
            </ListItem>
            <ListItem
                button
            >
                <ListItemIcon>
                    <KeyIcon />
                </ListItemIcon>
                <ListItemText
                    primary={"Copy private key"}
                />
            </ListItem>
        </Card>
    );
};

export default EthereumCard;