# МВидео – сайт для продажи электроники

Создание веб-приложения с использованием React, Typescript, redux

**Цель:**

-   React, Typescript, Redux
-   Использовать React Routing
-   Использовать React lazy loading
-   Использовать react-query

## Быстрый старт

#### `npm i` – установить зависимости проекта

#### `npm run dev` – запуск devServer на http://localhost:3000/

## Скрипты

#### `npm run dev` – запуск devServer на http://localhost:3000/

#### `npm run build` – production сборка проекта

## Используемые библиотеки

-   [classnames](https://github.com/JedWatson/classnames)
-   [normalize.css](https://github.com/necolas/normalize.css)
-   [fontawesome](https://github.com/FortAwesome/Font-Awesome)
-   [react-router-dom](https://github.com/remix-run/react-router)
-   [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
-   [react-redux](https://github.com/reduxjs/react-redux)
-   [redux](https://github.com/reduxjs/redux)
-   [swiper](https://github.com/nolimits4web/swiper)
-   [react-speech-recognition](https://github.com/JamesBrill/react-speech-recognition)
-   [react-countup](https://github.com/glennreyes/react-countup)
-   [axios](https://github.com/axios/axios)
-   [react-toastify]
-   [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)

## Макеты

## Изученный статьи

https://rahuulmiishra.medium.com/react-worst-practices-bdf924efe470

### Структура проекта

```
├── public/                          # Папка с HTML, определяющим шаблон приложения
├── src/                             # Исходники
│   ├── components/                  # Папка с используемыми элементами
│   │   ├── ...                      # UI-kit для приложения
│   │   └── index.ts                 # Файл экспорта всех компонентов UI-kit
│   ├── store/                       # Папка с js файлом, позволяющим управлять состоянием
│   │   └── store.js                 # Файл, управляющий состоянием приложения
│   ├── layout/                      #
│   │   ├── .../                     # Папки с компонентами
│   │   ├── Layout.module.css        # Стили для макета
│   │   ├── Layout.props.ts          # Входные данные для макета
│   │   └── Layout.tsx               # Компонент макета
│   ├── App.css                      # Файл глобальных стилей
│   ├── App.tsx                      # Главный компонент
│   ├── index.css                    # Файл стилей
│   ├── index.tsx                    # Корневой компонент
│   └── react-app-env.d.ts           # Файл добавляющий поддержку импортов
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── README.md                        # Документация шаблона
├── tsconfig.json                    # Параметры компилятора TypeScript

```
