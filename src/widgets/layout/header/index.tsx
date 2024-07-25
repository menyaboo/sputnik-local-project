import Link from "next/link";
import LogoComponent from "../../../shared/ui/logo";
import SwitcherTheme from "../../../features/theme/swither-theme";
import {headerLinks} from "@/shared/data/links/header";

const HeaderLayout = () => (
    <header className='flex mx-auto max-w-[1290px] justify-between items-center'>
        <LogoComponent/>
        <nav className="flex items-center gap-x-8">
            <ul className='flex gap-x-8'>
                {
                    headerLinks.map(({name, href}, i) => (
                        <li key={i}>
                            <Link href={href}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
            <SwitcherTheme/>
        </nav>
    </header>
);

export {
    HeaderLayout
}