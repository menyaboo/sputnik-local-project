import {cloneElement, FC, ReactElement, SVGProps} from "react";
import {IIconName} from "@/shared/interface/icon";
import {IconLogo, IconMoon, IconSun} from "@/shared/svg/ui";

interface IIconProps extends SVGProps<SVGSVGElement> {
    name: IIconName
    color?: string
    size?: number
}

const icons: { [key in IIconName]: ReactElement } = {
    logo: <IconLogo/>,
    sun: <IconSun />,
    moon: <IconMoon />
}

const Icon: FC<IIconProps> = ({ name, ...props }) =>
    cloneElement(icons[name],{ ...props })

export default Icon;