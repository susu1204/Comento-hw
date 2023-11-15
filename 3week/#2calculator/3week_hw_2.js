const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

const evaluate = expression => {
    return Function('"use strict";return (' + expression + ')')();
};

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;
        if (buttonText === 'C') {
            display.textContent = '0';
        } else if (buttonText === '=') {
            try {
                const expression = display.textContent
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/');
                display.textContent = evaluate(expression);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent === '0') {
                display.textContent = buttonText;
            } else {
                const newContent = display.textContent + buttonText;
                if (newContent.length > 15) {
                    display.style.fontSize = '18px';
                    display.style.whiteSpace = 'pre-line';
                }
                display.textContent = newContent;
                // 줄바꾸면서 글자 크기가 한번 작아지고 난 뒤 또 반복해서 작아지지는 않음.
                // 한번 글씨가 작아지고 나면 c를 눌렀을때 원래 크기로 돌아오지 않음.
            }
        }
    });
});
