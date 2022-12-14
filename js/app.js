function uvstm_accordion() {
    const triggers = document.querySelectorAll('.uvstm-accordion-trigger');
    const contents = document.querySelectorAll('.uvstm-accordion-content');

    if (triggers && contents) {
        triggers.forEach((el, i) => {
            if (!el.hasAttribute('data-uvstm-accordion-customID')) {
                el.setAttribute('id', `uvstm-accordion-triggerID--${i}`);
                el.setAttribute('aria-controls', `uvstm-accordion-contentID--${i}`);
            } else {
                let params = el.getAttribute('data-uvstm-accordion-customID').split(' ');
                el.setAttribute('id', params[0]);
                el.setAttribute('aria-controls', params[1]);
            }
        })

        contents.forEach((el, i) => {
            if (!el.hasAttribute('data-uvstm-accordion-customID')) {
                el.setAttribute('id', `uvstm-accordion-contentID--${i}`);
                el.setAttribute('aria-labeledby', `uvstm-accordion-triggerID--${i}`);
            } else {
                let params = el.getAttribute('data-uvstm-accordion-customID').split(' ');
                el.setAttribute('id', params[1]);
                el.setAttribute('aria-labeledby', params[0]);
            }
        })

        triggers.forEach(el => {
            el.addEventListener('click', () => {
                let open = el.getAttribute('aria-controls');
                let openEl = document.querySelector(`#${open}`);
                let elTBPaddings = +window.getComputedStyle(openEl, null).paddingTop.replace('px', '') + +window.getComputedStyle(openEl, null).paddingBottom.replace('px', '');

                if (!el.classList.contains('uvstm-accordion-trigger--open')) {
                    el.classList.add('uvstm-accordion-trigger--open');
                    openEl.classList.add('uvstm-accordion-content--open');
                    el.setAttribute('aria-expanded', true);
                    openEl.setAttribute('aria-hidden', false);
                    openEl.style.maxHeight = openEl.scrollHeight + elTBPaddings+ 'px';
                } else {
                    el.classList.remove('uvstm-accordion-trigger--open');
                    openEl.classList.remove('uvstm-accordion-content--open');
                    el.setAttribute('aria-expanded', false);
                    openEl.setAttribute('aria-hidden', true);
                    openEl.style.maxHeight = null;
                }
            })
        })
    }
}

// uvstm_accordion();