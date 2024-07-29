import {FC} from "react";
import Icon from "@/shared/ui/icon";
import styles from "./style.module.scss"

const BottomPresenter: FC = () => (
    <div className={styles.bottomPresenter}>
        <div className="bg-light-background dark:bg-dark-background *:fill-light-background *:dark:fill-dark-background">
            {[...Array(2)].map(el => <Icon key={el} name="triangle-rounded"/>)}
        </div>
        <div>
            <span>Выбор на нас</span>
            <p>
                Мы команда профессионалов, которая уже 12 лет успешно реализует проекты любой сложности.
                Наш приоритет – результат, и наша команда готова обеспечить его достижение.
            </p>
        </div>
    </div>
);

export {BottomPresenter};