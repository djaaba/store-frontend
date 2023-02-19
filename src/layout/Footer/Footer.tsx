import cn from "classnames";

import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

import { FooterNavigation } from "./modules/FooterNavigation/FooterNavigation";
import { apps, socials } from "../../components/modules/Socials/helpers";
import { Socials } from "../../components/modules/Socials/Socials";
import { Button } from "../../components/UI";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <>
            <footer className={styles.footer}>
                <main className="wrapper">
                    <section className={styles.top}>
                        <img
                            className={styles.img}
                            alt="Логотип магазина"
                            src="/assets/footer/logo.svg"
                        />
                        <Button className={styles.btn} color="dark" size="big">
                            Карта магазинов
                        </Button>
                    </section>
                    <section>
                        <FooterNavigation />
                        <Socials apps={apps} socials={socials} />
                    </section>
                    <section className={styles.bottom}>
                        <p>© «М.Видео», 2023</p>
                    </section>
                </main>
            </footer>
        </>
    );
};
