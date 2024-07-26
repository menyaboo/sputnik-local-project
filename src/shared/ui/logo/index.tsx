import Icon from "@/shared/svg";
import Link from "next/link";
import {ERouterLinks} from "@/shared/enum/router";
import {AnchorHTMLAttributes, FC} from "react";

const LogoComponent: FC<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">> = ({...props}) => (
  <Link href={ERouterLinks.HOME} {...props}>
    <Icon className="fill-[#000] dark:fill-[#fff]" name='logo'/>
  </Link>
);

export default LogoComponent;