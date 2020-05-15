# widget-js
Виджет онлайн-тестов testometrika.com для встраивания в веб-сайты.
##### Демо примеры:
[Виджет на всю ширину](https://testometrika.com/w/demo/)

[Встраивание в текст страницы](https://testometrika.com/w/demo/blog.html)

Функции:
- Адаптирован для мобильных.
- Автоматически подстраивается ширина и высота.


1.Установка. Варианты:
-----------------------------------

#### Подключение через CDN
Разместитите единожды скрипт в теге \<head\> 
```html
<script async type="text/javascript" src="https://cdn.jsdelivr.net/npm/@testometrika/widget@1/index.min.js"></script>
```

#### Установка с помощью NPM
```html
npm i @testometrika/widget --save
```

2.Инициализация. Варианты:
-----------------------------------
#### Автоматическая
```html
<div class="testometrika_widget" id="REPLACE_KEY"></div>
```

#### Ручная инициализация
Подключиние с помощью NPM
```html
import testometrika_widget from '@testometrika/widget';
testometrika_widget.Test({key: 'REPLACE_KEY'});

<!--widget-->
<div id="REPLACE_KEY"></div>

```

Подключиние через CDN
```html
<script async type="text/javascript" src="https://cdn.jsdelivr.net/npm/@testometrika/widget@1/index.min.js"></script>

<!--widget-->
<div id="REPLACE_KEY"></div>
<script>
    window.onload = function() {
        testometrika_widget.Test({key: 'REPLACE_KEY'});
    }
</script>
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
