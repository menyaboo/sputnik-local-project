'use client'

import {FC, HTMLAttributes} from "react";
import Icon from "@/shared/svg";
import {useResolvedTheme} from "@/shared/hooks/theme";

const SwitcherTheme: FC<HTMLAttributes<HTMLButtonElement>> = ({...props}) => {
    const {resolvedTheme, handleTheme} = useResolvedTheme()

    return (
        <button className="w-[40px] h-[40px] flex items-center justify-center" onClick={handleTheme} {...props}>
            {resolvedTheme === "light" ?
                <Icon fill="#ccc" name='sun'/> :
                <Icon fill="#ccc" name='moon'/>}
        </button>
    );
}

export default SwitcherTheme;