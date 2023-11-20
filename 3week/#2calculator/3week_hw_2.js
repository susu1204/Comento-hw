const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const negateButton = document.getElementById('negateBtn');

// 수식 평가 함수
const evaluate = expression => {
    return Function('"use strict"; return (' + expression + ')')();
};

// 버튼 클릭 이벤트 핸들러 등록
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;
        handleButtonClick(buttonText);
    });
});

// '±' 버튼 클릭 이벤트 핸들러 등록
negateButton.addEventListener('click', function() {
    handleNegateButton();
});

// 버튼 클릭 처리 함수
function handleButtonClick(buttonText) {
    if (buttonText === 'C') {
        handleClearButton();
    } else if (buttonText === '=') {
        handleEqualsButton();
    } else {
        handleNumberOrOperatorButton(buttonText);
    }
}

// 숫자 또는 연산자 버튼 클릭 처리
function handleNumberOrOperatorButton(buttonText) {
    if (display.textContent === '0') {
        display.textContent = buttonText;
    } else {
        const newContent = display.textContent + buttonText;
        display.textContent = newContent;
        updateFontSize();
    }
}

// 등호(=) 버튼 클릭 처리
function handleEqualsButton() {
    try {
        const expression = display.textContent.replace(/×/g, '*').replace(/÷/g, '/');
        display.textContent = evaluate(expression);
    } catch (error) {
        display.textContent = 'Error';
    }
}

// 클리어(C) 버튼 클릭 처리
function handleClearButton() {
    resetDisplayStyle();
}

// '±' 버튼 클릭 처리 함수
function handleNegateButton() {
    const currentValue = parseFloat(display.textContent);

    if (!isNaN(currentValue)) {
        // 현재 값이 숫자인 경우에만 양/음수를 전환
        const newValue = -currentValue;
        display.textContent = newValue.toString();
        updateFontSize();
    }
}

// 디스플레이 폰트 크기 업데이트
function updateFontSize() {
    const currentFontSize = parseInt(window.getComputedStyle(display).fontSize);
    const maxCharacters = Math.floor((display.offsetWidth - 10) / (currentFontSize * 0.6)); 
    if (display.textContent.length > maxCharacters) {
        display.style.fontSize = `${currentFontSize * 0.9}px`;
    }
}

// 디스플레이 초기화
function resetDisplayStyle() {
    display.textContent = '0';
    display.style.fontSize = '28px';
}
