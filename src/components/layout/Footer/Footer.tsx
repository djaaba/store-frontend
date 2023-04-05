import Link from "next/link";

import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

import { FooterNavigation } from "./modules";
import { Socials } from "@/components/modules";
import { Button } from "@/components/UI";
import { apps, socials } from "@/plug/Footer";
import { MAIN_ROUTE } from "@/utils";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <footer {...props} className={styles.footer}>
            <div className="wrapper">
                <section className={styles.top}>
                    <Link href={MAIN_ROUTE}>
                        <img
                            className={styles.img}
                            alt="Логотип магазина"
                            src="/assets/footer/logo.svg"
                        />
                    </Link>
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
            </div>
        </footer>
    );
};
