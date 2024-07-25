import {FC, HTMLAttributes} from "react";

const MainWrapper: FC<HTMLAttributes<HTMLDivElement>> = ({className = "", ...props}) => (
    <div className={`max-w-[1386px] rounded-[32px] bg-bg-secondary-light dark:bg-bg-secondary-dark py-[80px] px-[48px] mx-auto bg ${className}`} {...props}/>
);

export default MainWrapper;