# МВидео – сайт для продажи электроники 

Создание веб-приложения с использованием React, Typescript, mobX

**Цель:**
- Попробовать самостоятельно использовать React, Typescript, mobX
- Научиться использовать React Routing
- Научиться использовать React lazy loading
- Научиться использовать react-query
- Научиться использовать MobX Developer Tools
- Научиться компонентной верстке
- Создать package.json конфиг для SPA
- Понять в чем удобство barrel exports
- Попробовать nanoid
- Попробовать использовать абсолютные пути к файлам
- Медиа запросы React

## Быстрый старт

#### `npm i express` – установить зависимости проекта

#### `npm run start` – запуск devServer на http://localhost:3000/

## Скрипты

#### `npm run start` – запуск devServer на http://localhost:3000/

#### `npm run build` – production сборка проекта

## Используемые библиотеки
- [classnames](https://github.com/JedWatson/classnames)
- [normalize.css](https://github.com/necolas/normalize.css)
- [fontawesome](https://github.com/FortAwesome/Font-Awesome)
- [mobx](https://github.com/mobxjs/mobx)
- [mobx-react-lite](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react-lite)
- [react-slick](https://github.com/akiran/react-slick)
//- [react-responsive](https://github.com/yocontra/react-responsive)
//- [slick-carousel](https://github.com/akiran/react-slick)
- [react-router-dom](https://github.com/remix-run/react-router)
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary)

date fns
npm install -D eslint prettier
npx eslint --init

placeholder comments

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