# widget-js
Виджет онлайн-тестов [testometrika.com](https://testometrika.com) для встраивания в веб-сайты.
##### Демо примеры:
[Виджет на всю ширину](https://testometrika.com/w/demo/)

[Встраивание в текст страницы](https://testometrika.com/w/demo/blog.html)

Функции:
- Адаптирован для мобильных.
- Автоматически подстраивается ширина и высота.


1.Установка
-----------------------------------

#### Подключение через CDN
Разместитите единожды скрипт в теге \<head\> 
```html
<script async type="text/javascript" src="https://cdn.jsdelivr.net/npm/@testometrika/widget@1/index.min.js"></script>
```

2.Инициализация
-----------------------------------
#### Автоматическая
Необходимо заменить REPLACE_KEY на ключ выданный от [testometrika.com](https://testometrika.com)
```html
<div class="testometrika_widget" id="REPLACE_KEY"></div>
```

3.Конфигурирование
-----------------------------------
Появится позже...

4.Пример подключения виджета
-----------------------------------
```html
<!DOCTYPE html>
<html>
<head>
    <script async type="text/javascript" src="https://cdn.jsdelivr.net/npm/@testometrika/widget@1/index.min.js"></script>
</head>
<body>
    <div class="testometrika_widget" id="REPLACE_KEY"></div>
</body>
</html>
```
