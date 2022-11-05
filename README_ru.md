# UVSTM-accordion
## ОСНОВНОЕ
[Documentation also available on English language.](https://github.com/unniiiverse/uvstm-accordion/blob/main/README.md)

ARIA-Доступный модуль аккордеона. Тригер и контент могут работать в разных блоках.

Текущая версия: @1.1.1

<hr>

## ДОКУМЕНТАЦИЯ
### HTML
```html
<!-- Тригер -->
<button class="uvstm-accordion-trigger" aria-expanded="false">
    <p class="uvstm-accordion-trigger_title">Заголовок</p>
    <svg class="uvstm-accordion-trigger_arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_185)">
            <path d="M5.24042 6L12.5 13.4201L19.7596 6L22 8.28995L12.5 18L3 8.28995L5.24042 6Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_1_185">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
</button>

<!-- Контент -->
<div class="uvstm-accordion-content" role="region" aria-hidden="true">
    <p>Контент</p>
</div>

<!-- Аттрибуты -->
data-uvstm-accordion-customID="[TriggerID] [ContentID]" <!-- Свои ID. Указывается в кнопке тригера, указывает какой контент открывает этот тригер.-->
```

### SCSS
```scss
// - - - Переменные
// отсутствует

// - - - Классы
.uvstm-accordion-trigger--open // Тригер активен
.uvstm-accordion-content--open // Контент активен
```

### JS
```js
uvstm_accordion(); // Инициализация модуля
```

<hr>

## ПОЛУЧИТЬ
### CDN

CSS
```
https://unniiiverse.github.io/cdn/module/uvstm/accordion/@1.1.1/style.min.css
```

JS
```
https://unniiiverse.github.io/cdn/module/uvstm/accordion/@1.1.1/app.min.js
```

JS с export (ES6)
```
https://unniiiverse.github.io/cdn/module/uvstm/accordion/@1.1.1/module.min.js
```

### [GITHUB](https://github.com/unniiiverse/uvstm-accordion) [CODEPEN](https://codepen.io/unniiiverse/pen/abGpVoo)

unniiiverse ©️ 2022