# UVSTM-accordion
## GENERAL
*Documentation translated to English by me, documentation may contain grammar mistakes, sorry for that.*

[Документация так же доступна на русском языке.](https://github.com/unniiiverse/uvstm-accordion/blob/main/README_ru.md)

ARIA-Accesible accordion module. The trigger and the content can work in different blocks.

Current version: @1.1.1

<hr>

## DOCS
### HTML
```html
<!-- TRIGGER -->
<button class="uvstm-accordion-trigger" aria-expanded="false">
    <p class="uvstm-accordion-trigger_title">Title</p>
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

<!-- CONTENT -->
<div class="uvstm-accordion-content" role="region" aria-hidden="true">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro a repellat corporis iure voluptates
        incidunt.</p>
</div>

<!-- ATTRIBUTES -->
data-uvstm-accordion-customID="[TriggerID] [ContentID]" <!-- Own IDs. Indicated in trigger button, indicates what content needs to open. -->
```

### SCSS
```scss
// - - - Variables
// none

// - - - Classes
.uvstm-accordion-trigger--open // Trigger open
.uvstm-accordion-content--open // Content open
```

### JS
```js
uvstm_accordion(); // init module
```

<hr>

## GET IT ON
### CDN

CSS
```
https://unniiiverse.github.io/cdn/module/uvstm/accordion/@1.1.1/style.min.css
```

JS
```
https://unniiiverse.github.io/cdn/module/uvstm/accordion/@1.1.1/app.min.js
```

JS with export (ES6)
```
https://unniiiverse.github.io/cdn/module/uvstm/accordion/@1.1.1/module.min.js
```

### [GITHUB](https://github.com/unniiiverse/uvstm-accordion) [CODEPEN](https://codepen.io/unniiiverse/pen/abGpVoo)

unniiiverse ©️ 2022