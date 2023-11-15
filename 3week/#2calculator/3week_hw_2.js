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
                display.textContent += buttonText;
            }
        }
    });
});
