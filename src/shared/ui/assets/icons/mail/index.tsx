import {FC, ReactNode, SVGProps} from "react"

const MailIcon: FC<SVGProps<SVGSVGElement>> = ({...props}): ReactNode => (
    <svg {...props} width="20" height="16" fill='none' xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 2L8.108 6.612L8.11 6.614C8.788 7.111 9.127 7.36 9.499 7.456C9.82759 7.54102 10.1724 7.54102 10.501 7.456C10.873 7.36 11.213 7.111 11.893 6.612C11.893 6.612 15.81 3.606 18 2M1 11.8V4.2C1 3.08 1 2.52 1.218 2.092C1.41 1.715 1.715 1.41 2.092 1.218C2.52 1 3.08 1 4.2 1H15.8C16.92 1 17.48 1 17.907 1.218C18.284 1.41 18.59 1.715 18.782 2.092C19 2.519 19 3.079 19 4.197V11.804C19 12.922 19 13.48 18.782 13.908C18.5899 14.2844 18.2836 14.5903 17.907 14.782C17.48 15 16.921 15 15.803 15H4.197C3.079 15 2.519 15 2.092 14.782C1.71569 14.5903 1.40974 14.2843 1.218 13.908C1 13.48 1 12.92 1 11.8Z"
            stroke={props.fill ? props.fill : "currentColor"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)
;

export {MailIcon};