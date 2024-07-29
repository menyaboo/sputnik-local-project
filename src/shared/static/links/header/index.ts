import {IHeaderLink} from "@/shared/interface/links";
import {ERouterLinks} from "@/shared/enum/router";

const headerLinks: IHeaderLink[] = [
    {
        name: "Проекты",
        href: ERouterLinks.PROJECTS
    },
    {
        name: "Карьера",
        href: ERouterLinks.CAREER
    },
    {
        name: "Новости",
        href: ERouterLinks.NEWS
    },
    {
        name: "Отзывы",
        href: ERouterLinks.REVIEWS
    },
    {
        name: "Контакты",
        href: ERouterLinks.CONTACTS
    }
]

export {
    headerLinks
}