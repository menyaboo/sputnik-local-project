import {createElement, FC, HTMLAttributes} from "react";

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
    tag?: HeadingTag;
}

const Title: FC<ITitleProps> = ({tag = "h1", ...props}) => (
    createElement(tag, {...props})
);

export default Title;