import {FC, HTMLAttributes} from "react";

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({className = "", ...props}) => (
    <div className={`container max-w-[1290px] mx-auto ${className}`} {...props}/>
);

export {
    Container
};