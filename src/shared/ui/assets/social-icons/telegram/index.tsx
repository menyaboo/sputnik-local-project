import {FC, ReactNode, SVGProps} from "react";

const TelegramIcon: FC<SVGProps<SVGSVGElement>> = ({...props}): ReactNode => (
    <svg {...props} width="19" height="17" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19 0.602225L15.9946 16.2923C15.9946 16.2923 15.5741 17.3801 14.4189 16.8584L7.48458 11.3526L7.45242 11.3364C8.38909 10.4654 15.6524 3.70266 15.9698 3.39612C16.4613 2.92136 16.1562 2.63873 15.5856 2.99736L4.85679 10.053L0.717638 8.61077C0.717638 8.61077 0.0662573 8.37083 0.00359284 7.84911C-0.0598962 7.32653 0.739076 7.0439 0.739076 7.0439L17.6131 0.188948C17.6131 0.188948 19 -0.44207 19 0.602225Z"
            fill={props.fill ? props.fill : 'currentColor'}/>
    </svg>
)

export {TelegramIcon};