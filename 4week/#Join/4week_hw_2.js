let isUsernameValid = false;
let isPasswordValid = false;

function checkDuplicate() {
    const username = document.getElementById('username').value;
    
    // 실제로 중복 체크를 수행하는 로직을 추가해야 합니다.
    // 이 예제에서는 간단히 아이디가 'admin'일 때 중복으로 처리합니다.
    if (username.toLowerCase() === 'admin') {
        document.getElementById('usernameError').innerText = '이미 사용 중인 아이디입니다.';
        document.getElementById('usernameSuccess').innerText = '';
        isUsernameValid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
        document.getElementById('usernameSuccess').innerText = '사용 가능한 아이디입니다.';
        isUsernameValid = true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    
    // 비밀번호 규칙을 추가하려면 원하는 로직을 여기에 추가하세요.
    // 이 예제에서는 비밀번호가 6자 이상이어야 한다고 가정합니다.
    if (password.length < 6) {
        passwordError.innerText = '비밀번호는 6자 이상이어야 합니다.';
        passwordError.className = 'error';
        document.getElementById('passwordSuccess').innerText = '';
        isPasswordValid = false;
    } else {
        passwordError.innerText = '';
        document.getElementById('passwordSuccess').innerText = '유효한 비밀번호입니다.';
        passwordError.className = 'success';
        isPasswordValid = true;
    }
}

function validateForm(event) {
    event.preventDefault();

    if (isUsernameValid && isPasswordValid) {
        // 여기에 실제로 회원가입을 수행하는 로직을 추가하세요.
        alert('회원가입이 완료되었습니다.');
    } else {
        alert('회원가입에 실패했습니다. 입력 정보를 다시 확인하세요.');
    }
}


