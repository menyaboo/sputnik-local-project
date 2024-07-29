import {cloneElement, FC, SVGProps} from "react";
import {IIconName} from "@/shared/interface/icon";
import {icons} from "@/shared/ui/icon/state";

interface IIconProps extends SVGProps<SVGSVGElement> {
    name: IIconName
    rounded?: boolean
    background?: string
}

const Icon: FC<IIconProps> = ({name, rounded, background, ...props}) => (
    <>
        {rounded ? <div className={`${background} flex items-center justify-center rounded-full w-[40px] h-[40px]`}>
            {cloneElement(icons[name], {...props})}
        </div> : cloneElement(icons[name], {...props})}
    </>
)


export default Icon;