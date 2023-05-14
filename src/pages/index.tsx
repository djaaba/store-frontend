import React from 'react';
import { useSelector } from 'react-redux';

import { getAllBanners, getAllBrands, getAllTypes, getBestsellers, getMostDiscounted, getMostViewed, getRecommended } from '@/api';
import { selectRecommendation } from '@/store/recommendation/selector';
import { Home } from '@/screens/home/Home';
import { IDevice } from '@/shared';

function Main({ mostViewed, mostDiscounted, bestsellers, types, brands, banners }: any) {
    const [recommendation, setRecommendation] = React.useState<IDevice[]>([])
    const recommended = useSelector(selectRecommendation);

    React.useEffect(() => {
        getRecommended(recommended).then((data) => setRecommendation(data))
    }, [])

    return (
        <>
            <Home
                types={types}
                brands={brands}
                banners={banners}
                mostViewed={mostViewed}
                bestsellers={bestsellers}
                mostDiscounted={mostDiscounted}
                recommended={recommendation}
            />
        </>
    );
}

export default Main;

export async function getServerSideProps() {
    const types = await getAllTypes();
    const brands = await getAllBrands();
    const banners = await getAllBanners();
    const mostViewed = await getMostViewed();
    const mostDiscounted = await getMostDiscounted();
    const bestsellers = await getBestsellers();

    return {
        props: {
            types,
            brands,
            banners,
            mostViewed,
            bestsellers,
            mostDiscounted,
        },
    };
}

// next time use formik
// next time use - cookie httponly secure token
// next time export default
// next time props for components name "variant"
// next time aria-label="Aria Name" for buttons
// next time use Omit, Record and etc
// next time use primary root style
// next time more often use spread operator 

// Дальнейшие планы:
// img => Image
// Есть теги a, надо заменить
// В админке для типов и брендов добавить юзЭффект, чтобы подтягивал данные
// Добавить стейт для количества предметов на странице и номер страницы, чтобы при перезагрузке не потерялось все
// роут для товара по скидке, роут для бестселлеров, роут для самых просматриваемых 
// что насчет отзывов и рейтинга
// стейт для каунтера? посмотрим
// количество товаров в корзине и избранном в хедере

// Ptag заменить на p?
// cardItem, cartItem, favoriteItem, productItem
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
// сделать стейт для селектед
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
// Как избавиться от колхоза в combine reducers? Как объединить стейт 

// ГОТОВО:

// Head во все страницы
// В Скроллбар засунуть реальные ссылки
// сверстать страницу профиля
// добавить логику в бэкенд для роутов с фильтрами
// Нужны характеристики еще
// в products написать пропсы для компонентов, и вообще архитектуру как-то изменить
// переименовать роуты в новые переменные
// Range slider выпендривается
// any
// корзина все еще пытается выдавать ошибки, надо чинить
// чекбоксы для фильтров? че вообще..
// локал сторэйдж
// форму создать, валидацию
// переписать компонент Input(на onChange), и доработать Button(на disabled)
// сделать возможность выхода из аккаунта
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

// date fns
// npm install -D eslint prettier
// npx eslint --init
// вынести swiper в переменную
// может сделать попап каталога