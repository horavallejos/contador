const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24))||"0"

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};
 console.log(getRemainTime('Sep 28 2021 20:10:26 GMT-0300'));

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);
    const clockdays = document.getElementById("days");
    const clockhours = document.getElementById("hours");
    const clockminutes = document.getElementById("minutes");
    const clockseconds = document.getElementById("seconds");


    
console.log (elem)
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        clockdays.innerHTML =  `${t.remainDays}Dias`;
        clockhours.innerHTML =  `${t.remainHours}Horas`;
        clockminutes.innerHTML =  `${t.remainMinutes}Minutos`;
        clockseconds.innerHTML =  `${t.remainSeconds}Segundos`;
        
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage
        }
    }, 1000)
};

countdown('Oct 29 2021 00:00:00 GMT-0300', 'clock', 'ubicacion');
