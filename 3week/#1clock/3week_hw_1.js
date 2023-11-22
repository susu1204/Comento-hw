let batteryPercentage = 101;
let alarms = [];

function updateBattery() {
    batteryPercentage -= 1;
    document.getElementById("batteryPercentage").innerText = batteryPercentage + "%";

    if (batteryPercentage === 0) {
        document.getElementById("currentTime").style.backgroundColor = "black";
        document.getElementById("currentTime").style.color = "black";
    }

    if (batteryPercentage > 0) {
        setTimeout(updateBattery, 1000);
    }
}

function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    const currentTimeString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    document.getElementById("currentTime").innerText = currentTimeString;

    setTimeout(updateTime, 1000);
}

function addAlarm() {
    const hour = document.getElementById("hour").value;
    const minute = document.getElementById("minute").value;
    const second = document.getElementById("second").value;

    if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
        // 계속해서 새로운 알람을 추가하면 처음에 설정한 알람은 삭제되고 새로 추가한 알람이 업데이트 됨
        if (alarms.length === 3) {
            alarms.shift(); // 최대 3개 알람까지 가능하므로 첫 번째 알람 삭제
        }

        alarms.push({ hour, minute, second });
        updateAlarmDisplay();
    } else {
        alert("시간 값이 잘못되었습니다. 올바른 시, 분, 초를 입력하세요.");
    }
}

function clearAlarms() {
    // 초기화 버튼을 누르면 알람 현황이 모두 삭제됨
    alarms = [];
    updateAlarmDisplay();
}

function updateAlarmDisplay() {
    let alarmString = "";
    if (alarms.length === 0) {
        alarmString = "No alarms set";
    } else {
        alarms.forEach((alarm, index) => {
            alarmString += `${index + 1}. ${alarm.hour}:${alarm.minute}:${alarm.second}<br>`;
        });
    }

    document.getElementById("alarmsContent").innerHTML = alarmString;
}



// 초기화
updateBattery();
updateTime(); // 최초 한 번 호출



// select 옵션 값 추가
for (let i = 0; i <= 23; i++) {
    document.getElementById("hour").innerHTML += `<option value="${String(i).padStart(2, '0')}">${String(i).padStart(2, '0')}</option>`;
}

for (let i = 0; i <= 59; i++) {
    document.getElementById("minute").innerHTML += `<option value="${String(i).padStart(2, '0')}">${String(i).padStart(2, '0')}</option>`;
    document.getElementById("second").innerHTML += `<option value="${String(i).padStart(2, '0')}">${String(i).padStart(2, '0')}</option>`;
}
