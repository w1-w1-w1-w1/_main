const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Обработка POST запроса на сохранение поста
app.post('/savePost', (req, res) => {
    const пост = req.body;
    пост.время = получитьТекущееВремя(); // Добавляем время сохранения поста
    сохранитьПост(пост);
    res.json(пост);
});

// Обработка GET запроса на получение постов
app.get('/getPosts', (req, res) => {
    const сохраненныеПосты = получитьСохраненныеПосты();
    const случайныйИндекс = Math.floor(Math.random() * сохраненныеПосты.length);
    const случайныйПост = сохраненныеПосты[случайныйИндекс];
    res.json(случайныйПост);
});

// Функция для сохранения поста в файл
function сохранитьПост(пост) {
    const сохраненныеПосты = получитьСохраненныеПосты();
    сохраненныеПосты.push(пост);
    fs.writeFileSync(`post/post_${Date.now()}.json`, JSON.stringify(пост), 'utf8');
}

// Функция для получения сохраненных постов
function получитьСохраненныеПосты() {
    const файлы = fs.readdirSync('post');
    let сохраненныеПосты = [];
    for (const файл of файлы) {
        const содержимое = fs.readFileSync(`post/${файл}`, 'utf8');
        сохраненныеПосты.push(JSON.parse(содержимое));
    }
    return сохраненныеПосты;
}

// Функция для получения текущего времени
function получитьТекущееВремя() {
    const текущее_время = new Date();
    const год = текущее_время.getFullYear();
    const неделя = текущее_время.getDay();
    const число = текущее_время.getDate();
    const месяц = текущее_время.getMonth() + 1;
    const часы = текущее_время.getHours();
    const минуты = текущее_время.getMinutes();
    const секунды = текущее_время.getSeconds();
    return `${год}, ${неделя}, ${число}, ${месяц}, ${часы}:${минуты}:${секунды}`;
}

// Обработка GET запроса для корневого маршрута
app.get('/', (req, res) => {
    // Здесь вы можете отправить ваш HTML файл клиенту
    // Например, можно отправить файл index.html
    res.sendFile(__dirname + '/index.html');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});