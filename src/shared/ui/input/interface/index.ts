import {ClassAttributes, InputHTMLAttributes} from "react";

interface IBaseInputProps<T> extends ClassAttributes<T>, InputHTMLAttributes<T> {
    label?: string
    error?: string
}

interface IInputProps extends IBaseInputProps<HTMLInputElement> {
    req?: boolean
}

type ITextAreaProps = IBaseInputProps<HTMLTextAreaElement>

export type {
    IInputProps,
    ITextAreaProps,
    IBaseInputProps
}