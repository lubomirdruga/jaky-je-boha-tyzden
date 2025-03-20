// date for winter semester (ZS)
// const semesterStart = new Date('2021-09-20');

// date for summer semester (LS)
const semesterStart = new Date('2022-02-14');

semesterStart.setHours(0,0,0,0);
let now = new Date();
now.setHours(0,0,0,0);

function week() {
    let currentWeek = Math.round((now - semesterStart) / (7 * 24 * 60 * 60 * 1000));
    currentWeek = [0, 5, 6].includes(now.getDay()) ? currentWeek : currentWeek + 1;
    const element = document.getElementById("week");
    element.innerText = `${currentWeek}`;
    
    console.log(`semesterStart: ${semesterStart}`)
    console.log(`now: ${now}`);
}

function init() {
    if (now >= semesterStart) {
        week();
    } else {
        const element = document.getElementById("week");
        element.innerText = `See ya again on 20.09.2021!`;
        element.style.fontSize = '3em';
    }
}


init();


console.log('🎉');



