import cn from "classnames";
import Head from "next/head";

import styles from "@/styles/Main.module.css";

import {
    Banner,
    Bestsellers,
    Brands,
    Categories,
    TopProduct,
} from "@/components/modules";
import { WhiteWrapper } from "@/components/UI";
import {
    banners,
    // bestsellers,
    brands,
    productCategories,
    // topProduct,
} from "@/plug";
import { getAllDevices } from "../api/requests";

export default function Main({ data }: any) {
    console.log(data.rows);
    
    const topProduct = data.rows;
    const bestsellers = data.rows;

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <>
                <section className={cn(styles.sliders, "wrapper")}>
                    <Banner banners={banners} />
                    <TopProduct items={topProduct} />
                </section>
                <WhiteWrapper className={cn(styles.container, "wrapper")}>
                    <Bestsellers items={bestsellers} />
                    <Categories categories={productCategories} />
                    <Brands brands={brands} />
                </WhiteWrapper>
            </>
        </>
    );
}


export async function getServerSideProps() {
    const data = await getAllDevices();

    return {
        props: {
            data,
        },
    };
}

// next time use formik
// next time use - cookie httponly secure token

// Дальнейшие планы:
// переименовать роуты в новые переменные
// локал сторэйдж
// форму создать, валидацию
// стейт для каунтера? посмотрим
// переписать компонент Input(на onChange), и доработать Button(на disabled)
// any


// Ptag заменить на p?
// cardItem, cartItem, favoriteItem, productItem
// any 
// ?Переписать pTag на норм, а то хуйня
// написать компонент недавно просмотренных
// Написать анализатор подходящих товаров
// вынести массивы из компонентов, и переместить объекты в файлы
// Попытался задать картинкам width, height 100%, но все равно требует явных размеров (Socials)
// сделать возможность выбора цвета + вставить компонент, а не тупую стрелку. Переместить стили up в компонент (Arrow)
// посмотреть как сделана валидация на другом проекте
// Деструкткризировать IProduct на ICart и IFavorite
// советы в заметках от Гриши
// Добавить хлебные крошки, дело хорошее
// обнулить каунт при удалении, или запретить каунтер при покупке
// обернуть брейкпоинт в usecallback
// Страница сравнение
// В следующий раз называть пропсы для компонентов variant
// сделать стейт для селектед, дописать бэкенд для корзины и отзывы?
// админка
// сделать, чтобы происходила выборка по просмотрам.
// как сделать, чтобы при нажатии на кнопку "купить", увеличивался счетчик покупки. А если массив?
// в бестселлерах прикрутить фикс высоту, чтобы кнопка красиво смотрелась внизу.
// может сделать прикол с красивой карточкой оплаты?


// ФИКСТЬ
// ptag фикс
// фиксим хлебные крошки
// деструктуризировать все массивы на переменные
// a теги заменить на Link
// HTMLProps заменить на detailed

// ГОТОВО:
// добавить aria-label для всех ссылок и Atag, то же самое что-то с ннопками
// h1, h2, h3, h4 заменить на htag
// пофиксить все стили ${} на cn()
// Убрать Camera Slider, зарефакторить, ИИ фича, голосовой поиск
// перенести футер хедер и т.д в папку к хедеру в лайауте
// проверить импорт интерфейсов из баррель файла
// Дописать установленные библиотеки
// доделать адаптив
// доделать каталог
// переписать кнопки
// h1, h2, h3, h4 теги нормально прописать, по человечески
// добавить корзина пуста, счетчик настоящий, товар
// удалить каунтер
// перепроверить, чтобы хелперы лежали там где надо
// ревью интересно в файлах Header.tsx, можно реализовать польз.хуки
// дописать новые типы к actions
// прикол, если добавить товар в корзину и избранное, и удалить из корзины, то и из избранного он пропадет тоже
// ну и прикол, что если выбирать все товары в коризне, а потом снимать галочку - все остается выбранным, нехорошо
// импорты хелперов починить
// Добавить всем пропсам тип

// read me
// date fns
// npm install -D eslint prettier
// npx eslint --init
// как типизировать redux?
// вынести swiper в переменную
// может сделать попап каталога
