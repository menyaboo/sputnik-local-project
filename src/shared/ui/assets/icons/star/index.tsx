import {FC, ReactNode, SVGProps} from "react"

const StarIcon: FC<SVGProps<SVGSVGElement>> = ({...props}): ReactNode => (
    <svg {...props} width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L8.9051 7.0949L16 8L8.9051 8.9051L8 16L7.0949 8.9051L0 8L7.0949 7.0949L8 0Z"
              fill={props.fill ? props.fill : "currentColor"}/>
    </svg>
);

export {StarIcon};