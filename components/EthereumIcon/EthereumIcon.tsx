import { SvgIconComponent } from "@mui/icons-material";
import { SvgIcon, SvgIconProps } from "@mui/material";

export type EthereumIconProps = SvgIconProps;

const EthereumIcon: SvgIconComponent  = (props: EthereumIconProps) => {
    return (
        <SvgIcon {...props}>
            <path d="M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z" />
        </SvgIcon>
    );
};

EthereumIcon.muiName = "EthereumIcon"; 

export default EthereumIcon;