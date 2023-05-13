import cn from "classnames";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import styles from "./Profile.module.css";
// import { ProfileProps } from "./Profile.props";

import { ADMIN_ROUTE, CART_ROUTE, FAVORITE_ROUTE, LOGIN_ROUTE, success } from "@/utils";
import { Button, CartShoppingIcon, FontAwesomeIcon, Htag, RewriteIcon, SolidHeartIcon, WhiteWrapper } from "@/components/UI";
import { selectUser } from "@/store/user/selector";
import { selectFavorite } from "@/store/favorite/selector";
import { selectCart, sumCountCart } from "@/store/cart/selector";
import { logout } from "@/store/user/actions";
import { Meta } from "@/components/seo/Meta";
import { UserModal } from "@/components/modules";
import HyperModal from "react-hyper-modal";

const Profile = ({ className, ...props }: ProfileProps): JSX.Element => {
    const userInfo = useSelector(selectUser);
    const favorite = useSelector(selectFavorite);
    const sumCount = useSelector(sumCountCart);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const router = useRouter();

    const [isOpen, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (!userInfo.isAuth) router.push(LOGIN_ROUTE)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        toast.success('Вы вышли из аккаунта!', success);
    }

    return (
        <React.Fragment {...props}>
            <Meta title={`Личный кабинет`} description="Информация об аккаунте" />
            <main className={cn(styles.main, "wrapper")}>
                <Htag tag="h1">
                    Личный кабинет
                </Htag>
                <WhiteWrapper className={cn(styles.options, styles.padding)}>
                    <p className={styles.title}>
                        Здравствуйте, <strong>{userInfo?._user?.name} </strong>, добро пожаловать в ваш личный кабинет.
                    </p>
                    <div className={styles.grid}>
                        {
                            userInfo._user?.role === "ADMIN" ?
                                <Link href={ADMIN_ROUTE}>
                                    <Button className={styles.btn} size="big" color="red">
                                        Администрирование
                                    </Button>
                                </Link>
                                :
                                ''
                        }
                        <Link href={LOGIN_ROUTE}>
                            <Button onClick={handleLogout} className={styles.btn} size="big" color="red">
                                Выйти из аккаунта
                            </Button>
                        </Link>
                        <Button onClick={() => setOpen(true)} className={styles.btn} size="big" color="red">
                            <FontAwesomeIcon icon={RewriteIcon} />
                        </Button>
                        <HyperModal requestClose={() => setOpen(false)} isOpen={isOpen}>
                            <UserModal setOpen={setOpen} data={userInfo} />
                        </HyperModal>
                    </div>
                </WhiteWrapper>
                <div className={cn(styles.wrapper, styles.padding)}>
                    <WhiteWrapper className={styles.container}>
                        <div className={styles.content}>
                            <FontAwesomeIcon className={styles.icon} icon={SolidHeartIcon} />
                            <Htag tag="h3">Избранное</Htag>
                            <p className={styles.count}>
                                {favorite.length}
                            </p>
                        </div>
                        <Link href={FAVORITE_ROUTE}>
                            <Button className={styles.btn} color="dark" size="big">
                                Изменить
                            </Button>
                        </Link>
                    </WhiteWrapper>
                    <WhiteWrapper className={styles.container}>
                        <div className={styles.content}>
                            <FontAwesomeIcon className={styles.icon} icon={CartShoppingIcon} />
                            <Htag tag="h3">Корзина</Htag>
                            <p className={styles.count}>
                                {sumCount}
                            </p>
                        </div>
                        <Link href={CART_ROUTE}>
                            <Button className={styles.btn} color="dark" size="big">
                                Изменить
                            </Button>
                        </Link>
                    </WhiteWrapper>
                </div>

            </main>
        </React.Fragment>
    );
};

export default Profile;

interface ProfileProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }