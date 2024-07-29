import {forwardRef} from "react";
import styles from './style.module.scss';
import {makeClassname} from "@/shared/utils/make-html-classname";
import {IInputProps} from "@/shared/ui/input/interface";
import Icon from "@/shared/ui/icon";

// ESLint: Component definition is missing display name(react/display-name) - forwardRef
// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, IInputProps>((
    {type, label, error, className, req, id = crypto.randomUUID(), ...props}, ref
) => (
    <div className={makeClassname(styles.inp, error && styles.error, req && styles.req)}>
        <label htmlFor={id}>
            {label && <span>{label}</span>}
            {type === "file" ?
                <>
                    <input
                        ref={ref}
                        id={id}
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        {...props}
                    />
                    <div className="p-[16px] border border-dashed border-light-outline dark:border-dark-outline">
                        <div className="flex mx-auto w-[194px] text-center flex-col items-center justify-center">
                            <Icon name="upload-file" className="fill-accent" />
                            <span>Перетащите файл или нажмите сюда для загрузки</span>
                        </div>
                    </div>
                </> :
                <input ref={ref} id={id} {...props} className={makeClassname("outline-light-outline",
                    "dark:outline-dark-outline", className)}/>
            }
        </label>
        {error && <span>{error}</span>}
    </div>
));

export default Input;