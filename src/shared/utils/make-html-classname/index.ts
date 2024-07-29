type Classname = string | undefined | null | boolean

export const makeClassname = (...classnames: Classname[]): string =>
	classnames.filter((item) => typeof item === 'string').join(' ');
