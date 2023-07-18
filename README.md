# МВидео – сайт для продажи электроники

Создание веб-приложения с использованием React, Typescript, Redux, Next.js

## Быстрый старт

#### `npm i` – установить зависимости проекта

#### `npm run dev` – запуск devServer на http://localhost:3000/

## Скрипты

#### `npm run dev` – запуск devServer на http://localhost:3000/

#### `npm run build` – production сборка проекта

## Используемые библиотеки

-   [axios](https://github.com/axios/axios)
-   [classnames](https://github.com/JedWatson/classnames)
-   [jwt-decode](https://github.com/auth0/jwt-decode)
-   [next](https://github.com/vercel/next.js/)
-   [rc-pagination](https://github.com/react-component/pagination)
-   [rc-slider](https://github.com/react-component/slider)
-   [react-countup](https://github.com/glennreyes/react-countup)
-   [react-hyper-modal](https://github.com/alekseymakhankov/hyper-modal)
-   [react-toastify](https://github.com/fkhadra/react-toastify)
-   [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/)
-   [swiper](https://github.com/nolimits4web/swiper)
-   [react-speech-recognition](https://github.com/JamesBrill/react-speech-recognition)
-   [normalize.css](https://github.com/necolas/normalize.css)
-   [fontawesome](https://github.com/FortAwesome/Font-Awesome)
-   [react-router-dom](https://github.com/remix-run/react-router)
-   [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
-   [react-redux](https://github.com/reduxjs/react-redux)
-   [redux](https://github.com/reduxjs/redux)

## Макеты

### Структура проекта

```
├── public/                          # Папка с HTML, определяющим шаблон приложения
├── src/                             # Исходники
│   ├── api/                         # Запросы на сервер
│   ├── components/                  # Папка с используемыми элементами
│   │   ├── modules                  # Модули проекта
│   │   ├── seo                      # SEO-теги
│   │   ├── common                   # Крупные компоненты проекта
│   │   ├── UI/                      # UI-kit для приложения
│   │   └── layout/                  # Шаблон приложения
│   ├── hoc/                         # Функции высшего порядка
│   ├── hooks/                       # Пользовательские хуки
│   ├── pages/                       # Страницы проекта
│   │   ├── .../                     # 
│   │   ├── _document.tsx            # Корневой компонент
│   │   ├── _app.tsx                 # Главный компонент
│   │   └── index.tsx                # Главная страница
│   ├── plug/                        # Заглушки
│   ├── screens/                     # 
│   ├── shared/                      # Интерфейсы и типы
│   ├── store/                       # Файлы, управляющие состояниями приложения
│   ├── styles/                      # Глобальный файл стилей проекта
│   └── utils/                        # Утилиты проекта
├── next.config.js                   # 
├── next-env.d.ts                    # 
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── README.md                        # Документация шаблона
└── tsconfig.json                    # Параметры компилятора TypeScript

```