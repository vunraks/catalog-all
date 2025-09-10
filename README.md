Главная
<img width="1918" height="880" alt="{28BECBF6-4B11-4303-A6F9-0E6ECABC866F}" src="https://github.com/user-attachments/assets/10b27cae-f707-48df-b162-3b5b380ca954" />
Избранное
<img width="1919" height="880" alt="{5845596B-7B3F-4AB4-B553-63308BF05FF5}" src="https://github.com/user-attachments/assets/10570c51-1e2b-402d-94ed-c9ddfd394a17" />



# 📚 Catalog App

Мини-проект на **React (Vite)** для практики работы с компонентами, пропсами, состоянием (`useState`), локальным хранилищем (**localStorage**), а также стилизацией с помощью **Tailwind CSS** и **CSS Modules**.

## 🚀 Функционал
- 📌 Главная страница с каталогом карточек (фильмы / книги / игры).
- ⭐ Добавление/удаление элементов.
- ✏️ Редактирование карточек (включая URL картинки).
- 💛 Добавление в избранное (изначально белая иконка → при нажатии жёлтая).
- 📂 Отдельная страница для "Избранного".
- 🗑 Удаление карточки.
- 💾 Сохранение данных в `localStorage` (при обновлении страницы данные не пропадают).
- 📱 Адаптивная верстка (Tailwind + CSS Modules).

## 🛠 Технологии
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🎭 CSS Modules
- 📦 LocalStorage
- 🔗 React Icons (иконки)

## 📂 Структура проекта
src/
-├── components/ # Компоненты интерфейса
-│ ├── Header.jsx # Шапка сайта (переключение страниц)
│ ├── ItemList.jsx # Список карточек
│ ├── ItemCard.jsx # Отдельная карточка
│ ├── ItemForm.jsx # Форма добавления элемента
│ ├── FavoritesList.jsx # Список избранного
│ ├── EditModal.jsx # Модальное окно редактирования
├── data/
│ └── mockItems.js # Тестовые данные (мок)
├── App.jsx # Основное приложение
├── main.jsx # Точка входа
├── tailwind.config.js # Конфигурация Tailwind CSS
└── README.md # Документация проекта

## ▶️ Запуск проекта
1. Установить зависимости:
   ```bash
   npm install
  2.Запустить в режиме разработки:
  npm run dev
  3.Собрать проект:
  npm run build

   
   npm run dev
