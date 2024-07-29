import {IIconName} from "@/shared/interface/icon";
import {ReactElement} from "react";
import {BehanceIcon, LinkedInIcon, TelegramIcon, VKIcon, WhatsAppIcon} from "@/shared/ui/assets/social-icons";
import {MailIcon, MoonIcon, PhoneIcon, StarIcon, SunIcon, TriangleRoundedIcon} from "@/shared/ui/assets/icons";
import {LogoIcon} from "@/shared/ui/assets/icons/logo";
import {UploadFileIcon} from "@/shared/ui/assets/icons/upload-file";

export const icons: { [key in IIconName]: ReactElement } = {
    telegram: <TelegramIcon/>,
    whatsApp: <WhatsAppIcon/>,
    linkedIn: <LinkedInIcon/>,
    vk: <VKIcon/>,
    behance: <BehanceIcon/>,
    moon: <MoonIcon/>,
    sun: <SunIcon/>,
    star: <StarIcon/>,
    logo: <LogoIcon/>,
    phone: <PhoneIcon/>,
    mail: <MailIcon/>,
    "triangle-rounded": <TriangleRoundedIcon/>,
    "upload-file": <UploadFileIcon/>
}