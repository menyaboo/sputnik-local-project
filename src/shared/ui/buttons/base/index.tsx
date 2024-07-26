import {FC, HTMLAttributes} from "react";

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({className = "", ...props}) => (
    <button className={`bg-accent rounded-[16px] font-semibold text-primary-dark px-[32px] py-[16px] ${className}`} {...props}/>
);

export {
    Button
};