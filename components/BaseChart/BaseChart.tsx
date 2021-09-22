import ReactApexChart, { Props } from "react-apexcharts";

export type BaseChartProps = Props;

const BaseChart = (props: BaseChartProps) => {
    return (
        <ReactApexChart
            {...props}
            options={{
                ...props?.options,
                grid: {
                    show: false,
                    ...props?.options?.grid,
                    padding: {
                        left: 0,
                        right: 0,
                        ...props?.options?.grid?.padding,
                    },
                },
                stroke: {
                    curve: "smooth",
                    width: 2,
                    ...props?.options?.stroke,
                },
                legend: {
                    show: false,
                    ...props?.options?.legend,
                },
                dataLabels: {
                    enabled: false,
                    ...props?.options?.dataLabels,
                },
                chart: {
                    ...props?.options?.chart,
                    toolbar: {
                        show: false,
                        ...props?.options?.chart?.toolbar,
                        tools: {
                            zoom: false,
                            ...props?.options?.chart?.toolbar?.tools,
                        },
                    },
                },
                xaxis: {
                    ...props?.options?.xaxis,
                    labels: {
                        show: false,
                        ...props?.options?.xaxis?.labels,
                    },
                    axisTicks: {
                        show: false,
                        ...props?.options?.xaxis?.axisTicks,
                    },
                    axisBorder: {
                        show: false,
                        ...props?.options?.xaxis?.axisBorder,
                    },
                    tooltip: {
                        enabled: false,
                        ...props?.options?.xaxis?.tooltip,
                    },
                },
                yaxis: {
                    show: false,
                    ...props?.options?.yaxis,
                },
                tooltip: {
                    ...props?.options?.tooltip,
                    marker: {
                        show: false,
                        ...props?.options?.tooltip,
                    },
                }
            }}
        />
    );
};

export default BaseChart;