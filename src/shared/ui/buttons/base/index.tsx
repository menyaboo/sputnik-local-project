import {FC, HTMLAttributes} from "react";
import {makeClassname} from "@/shared/utils/make-html-classname";
import styles from './style.module.scss';
import Link from "next/link";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    href?: string;
}

const ButtonComponent: FC<Omit<IButtonProps, 'href'>> = ({className = "", ...props}) => (
    <button className={makeClassname(styles.btn, className)} {...props}/>
);

const Button: FC<IButtonProps> = ({href, ...props}) => (
    href ? <Link href={href}><ButtonComponent {...props}/></Link> : <ButtonComponent {...props}/>
)

export {
    Button
};