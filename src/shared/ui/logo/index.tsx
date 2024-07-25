'use client'

import Icon from "@/shared/svg";
import Link from "next/link";
import {useResolvedTheme} from "@/shared/hooks/theme";
import {ERouterLinks} from "@/shared/enum/router";

const LogoComponent = () => {
    const {resolvedTheme} = useResolvedTheme()

    return (
        <Link href={ERouterLinks.HOME}>
            {resolvedTheme === "light" ?
                <Icon fill="#000" name='logo'/> :
                <Icon fill="#fff" name='logo'/>}
        </Link>
    );
}

export default LogoComponent;