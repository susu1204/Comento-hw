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
                const result = evaluate(expression);
                displayResult(result);
                updateFontSize();
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

// function displayResult(result) {
//     const resultString = result.toLocaleString('fullwide', {useGrouping: false});
//     display.textContent = resultString;
// }
function displayResult(result) {
    display.textContent = formatNumber(result);
}

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

function formatNumber(number) {
    // 숫자를 지수 표기법으로 변환하지 않고 포맷
    const formatter = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 20
    });
    return formatter.format(number);
}
