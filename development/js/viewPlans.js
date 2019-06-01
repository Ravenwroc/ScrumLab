// deklaracja zmiennych globalnie
let plansFromLs; //plany z local storage
let weekNumbers; // numery z local storage
let weekNums; // numery z local storage przerobione na tablicę z liczbami
let activePlanData = [];
//
let buttonPrevious = document.querySelector(".buttonPrevious");
let buttonNext = document.querySelector(".buttonNext");


//


let sniadanie = document.querySelectorAll(".sniadanie");
let drugie_sniadanie = document.querySelectorAll(".drugie_sniadanie");
let zupa = document.querySelectorAll(".zupa");
let drugie_danie = document.querySelectorAll(".drugie_danie");
let kolacja = document.querySelectorAll(".kolacja");

sniadanie.forEach(function (element) {
    element.innerHTML = "activePlanData,"
})


// Funkcja która tworzy prototyp pobierania numeru tygodnia
Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);

    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

    var week1 = new Date(date.getFullYear(), 0, 4);

    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
}
let dateWeek = new Date().getWeek(); // obecny numer tygodnia
let activeWeek = 0; // aktualnie wyświetlany numer tygodnia - deklaracja zmiennej
let activeWeekIndex = 0;


if ((localStorage.getItem("savedName") != undefined) && (localStorage.getItem("weeks") != undefined) && (localStorage.getItem("plans") != undefined)) {
    startData();
}

function startData() {
    plansFromLs = JSON.parse(localStorage.getItem("plans"));
    weekNumbers = Array.from(localStorage.getItem("weeks").replace(/["\]\[]/g, '').split(","));
    weekNums = weekNumbers.map(function (item) {
        return parseInt(item, 10);
    })


    checkActualWeek();
    if (checkActualWeek() != true) {
        checkNearestWeek();
    }

    activeWeekIndex = weekNums.indexOf(activeWeek);

    activePlanData = plansFromLs[activeWeekIndex].dishes;

    buttonPrevious.addEventListener("click", function (event) {
        console.log("Klikłeś !");
        event.preventDefault();
            if (activeWeekIndex > 0 && weekNums.length - 1 > 0) {
                activeWeekIndex --;
            }else if (activeWeekIndex == 0){
                activeWeekIndex = weekNums.length - 1;
            }

        activePlanData = plansFromLs[activeWeekIndex].dishes;

    })

    buttonNext.addEventListener("click", function (event) {
        console.log("Klikłeś !");
        event.preventDefault();
        if (activeWeekIndex < (weekNums.length - 1) && weekNums.length > 0) {
            activeWeekIndex ++;
        }else if (activeWeekIndex == weekNums.length - 1){
            activeWeekIndex = 0;
        }
        activePlanData = plansFromLs[activeWeekIndex].dishes;

    })


}


function checkNearestWeek() {
    let temp = 0;
    let temp2 = 0;
    for (let i = 0; weekNums[i] < dateWeek; i++) {
        if (weekNums[i] < dateWeek) {
            temp = weekNums[i];
            activeWeek = temp;
        }

    }
    for (let j = weekNums.length - 1; weekNums[j] > dateWeek; j--) {
        if (weekNums[j] > dateWeek) {
            temp2 = weekNums[j];
            activeWeek = temp2;

        }
    }
    if (temp > 0 && temp2 > 0) {
        if ((dateWeek - temp) < (temp2 - dateWeek)) {
            activeWeek = temp;
        } else if ((dateWeek - temp) > (temp2 - dateWeek)) {
            activeWeek = temp2;
        } else if ((dateWeek - temp) == (temp2 - dateWeek)) {
            activeWeek = temp2;
        }
    }

}

function checkActualWeek() {
    for (let i = 0; i < weekNums.length; i++) {
        if (weekNums[i] == dateWeek) {
            activeWeek = dateWeek;
            return true;
            break;
        }
    }
}


setInterval(function () {
    console.log(activePlanData);
},500);

console.log(activeWeek);
console.log("Aktywny indeks: ", activeWeekIndex);
