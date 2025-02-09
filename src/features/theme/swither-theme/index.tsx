'use client'

import {FC, HTMLAttributes} from "react";
import {useResolvedTheme} from "@/shared/hook/theme";
import Icon from "@/shared/ui/icon";

const SwitcherTheme: FC<HTMLAttributes<HTMLButtonElement>> = ({...props}) => {
    const {resolvedTheme, mounted, handleSwitch} = useResolvedTheme()

    return (
      <button className="w-[40px] h-[40px] flex items-center justify-center" onClick={handleSwitch}  {...props}>
          {mounted && resolvedTheme === "light" ?
            <Icon fill="#ccc" name='sun'/> :
            <Icon fill="#ccc" name='moon'/>}
      </button>
    );
}

export default SwitcherTheme;