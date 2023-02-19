import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto";
import "normalize.css";

// import { Counter } from "./components/UI";
import { Layout } from "./layout/Layout";
import "./App.css";
import { Main } from "./pages/Main/Main";
import { Cart } from "./pages/Cart/Cart";
import { Favorite } from "./pages/Favorite/Favorite";
import { Login } from "./pages/Login/Login";
import { Catalog } from "./pages/Catalog/Catalog";
import { Product } from "./pages/Product/Product";

export const App = () => {
    return (
        <>
            <ErrorBoundary
                FallbackComponent={({ error }) => <pre>{error.message}</pre>}
            >
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Main />} />
                        {/* <Route path="/counter" element={<Counter />} /> */}
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/favorite" element={<Favorite />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/product/:typeId" element={<Product />} />
                    </Route>
                </Routes>
            </ErrorBoundary>
        </>
    );
};

// ?Переписать pTag на норм, а то хуйня
// перепроверить, чтобы хелперы лежали там где надо
// написать компонент недавно просмотренных
// Написать анализатор подходящих товаров
// вынести массивы из компонентов, и переместить объекты в файлы
// ревью интересно в файлах Header.tsx, можно реализовать польз.хуки
// импорты хелперов починить
// Попытался задать картинкам width, height 100%, но все равно требует явных размеров (Socials)
// сделать возможность выбора цвета + вставить компонент, а не тупую стрелку. Переместить стили up в компонент (Arrow)
// Добавить всем пропсам тип
// посмотреть как сделана валидация на другом проекте
// Деструкткризировать IProduct на ICart и IFavorite
// советы в заметках от Гриши
// Добавить хлебные крошки, дело хорошее
// ну и прикол, что если выбирать все товары в коризне, а потом снимать галочку - все остается выбранным, нехорошо
// прикол, если добавить товар в корзину и избранное, и удалить из корзины, то и из избранного он пропадет тоже
// дописать новые типы к actions
// обнулить каунт при удалении, или запретить каунтер при покупке

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

// ????
// сложные компоненты, реализацией которых я горжусь: навигация в хедере

// read me
// date fns
// npm install -D eslint prettier
// npx eslint --init
// как типизировать redux?
// вынести swiper в переменную
// может сделать попап каталога
