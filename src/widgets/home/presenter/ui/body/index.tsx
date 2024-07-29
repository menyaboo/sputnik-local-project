import {FC} from "react";
import {Button} from "@/shared/ui/buttons";
import {ERouterLinks} from "@/shared/enum/router";
import {tagsList} from "@/widgets/home/presenter/state";
import styles from "./style.module.scss"

const BodyPresenter: FC = () => (
    <>
        <div className={styles.content}>
            <h1>Эффективная разработка для ваших целей</h1>

            <div>
                <Button href={ERouterLinks.TEST}>Связаться с нами</Button>
                <span> — заполните форму и мы предложим оптимальное решение.</span>
            </div>
        </div>
        <ul className={styles.tagList}>
            {tagsList.map((tag, i) => <li key={i}>{tag}</li>)}
        </ul>
    </>
);

export default BodyPresenter;