import { ISocial } from "../../../../shared/ISocial";
import { OdnoklassnikiIcon, VkIcon, YoutubeIcon } from "../../../UI";

export const socials: ISocial[] = [
    {
        id: 1,
        name: "Вконтакте",
        link: "https://vk.com/",
        icon: VkIcon,
    },
    {
        id: 2,
        name: "Youtube",
        link: "https://www.youtube.com/",
        icon: YoutubeIcon,
    },
    {
        id: 3,
        name: "Одноклассники",
        link: "https://ok.ru/",
        icon: OdnoklassnikiIcon,
    },
];
