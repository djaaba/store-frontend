import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Socials.module.css";
import { SocialsProps } from "./Socials.props";

export const Socials = ({
    apps,
    socials,
    ...props
}: SocialsProps): JSX.Element => {
    return (
        <>
            <div
                {...props}
                className={cn(styles.content, styles.mobileSocials)}
            >
                <div>
                    <p className={cn(styles.title, styles.desk)}>
                        Скачайте мобильное приложение
                    </p>
                    <ul className={styles.apps}>
                        {apps.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.link}
                                    aria-label={`Скачать приложение в ${item.name}`}
                                    className={styles.a}
                                >
                                    <img
                                        className={styles.icon}
                                        src={item.imgUrl}
                                        alt={`Логотип ${item.name}`}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.socialsContainer}>
                    <p
                        className={cn(
                            styles.title,
                            styles.textAlign,
                            styles.desk
                        )}
                    >
                        Электроника в соцсетях
                    </p>
                    <ul className={cn(styles.apps)}>
                        {socials.map((item) => (
                            <li key={item.id}>
                                <a
                                    aria-label={`Открыть сайт ${item.link}`}
                                    href={item.link}
                                >
                                    <FontAwesomeIcon
                                        className={cn(
                                            styles.socials,
                                            styles.icon
                                        )}
                                        icon={item.icon}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
