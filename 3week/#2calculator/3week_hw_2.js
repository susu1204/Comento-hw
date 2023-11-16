const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

const evaluate = expression => {
    return Function('"use strict";return (' + expression + ')')();
};

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;
        if (buttonText === 'C') {
            resetDisplayStyle();
        } else if (buttonText === '=') {
            try {
                const expression = display.textContent
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/');
                display.textContent = evaluate(expression);
                // JavaScript에서는 정확한 20자리 이상의 연산을 지원하지 않으므로 결과값이 지수표기법으로 나오도록 유지..ㅠ
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent === '0') {
                display.textContent = buttonText;
            } else {
                const newContent = display.textContent + buttonText;
                
                display.textContent = newContent;
                updateFontSize();
            }
        }
    });
});

function updateFontSize() {
    const currentFontSize = parseInt(window.getComputedStyle(display).fontSize);
    const maxCharacters = Math.floor((display.offsetWidth - 10) / (currentFontSize * 0.6)); 
    if (display.textContent.length > maxCharacters) {
        display.style.fontSize = `${currentFontSize * 0.9}px`;
    }
}

function resetDisplayStyle() {
    display.textContent = '0';
    display.style.fontSize = '28px';
}

