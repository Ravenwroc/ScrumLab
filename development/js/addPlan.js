let savePlanBtn = document.querySelector(".btn_save");
let addContainer = document.querySelector(".addplan__container");
let addBtn = document.querySelector(".btn_addPlan");
let mainView = document.querySelector(".dashboard");
let weekPlan = document.querySelector(".inp_week").value;

addBtn.addEventListener("click", function () {
    let addPlanView = document.querySelector(".addplan__container");

    addPlanView.style.display = "block";
    mainView.style.display = "none";
})

let newPlan = {
    number: "",
    title: "",
    description: "",
    dishes: []
};

let numberWeek = {
    number: ""
}

savePlanBtn.addEventListener("click", function storeName() {

    let titlePlan = document.querySelector(".plan_title").value;
    let descriptionPlan = document.querySelector(".plan_description").value;
    let weekPlan = document.querySelector(".inp_week").value;
    let number = parseInt(weekPlan);
    var allWeek = JSON.parse(localStorage.getItem("weeks"));
    let dishPlan = document.querySelectorAll("select");

    if (titlePlan.length > 0 && descriptionPlan.length > 0 && weekPlan.length > 0) {

        newPlan.number = number;
        newPlan.title = titlePlan;
        newPlan.description = descriptionPlan;


        dishPlan.forEach(function (element) {
            newPlan.dishes.push(element.value);
        })

        if (number > 0 && number < 53) {
            if (allWeek != null) {
                for (let i = 0; i < allWeek.length; i++) {
                    if (number == allWeek[i]) {
                        return alert("Ten tydzień był już zapisany");
                    } else {
                        numberWeek.number = weekPlan;
                    }
                }
            }
            addContainer.style.display = "none";
            mainView.style.display = "block";

            saveRecipeToLocalStorages(weekPlan);
            saveRecipeToLocalStorage(newPlan);

            // titlePlan = "";
            // descriptionPlan = "";
            // weekPlan = "";
            location.reload();

        } else {
            alert("Numer musi mieścić się w przedziale od 1 do 52");
        }


    } else if (titlePlan.length == 0 || localStorage.getItem("title") != null &&
        descriptionPlan.length == 0 || localStorage.getItem("description") != null &&
        weekPlan.length == 0 || localStorage.getItem("week") != null) {
        alert("Exist or invalid name");
    }
})

function saveRecipeToLocalStorage(newObject) {
    var dataFromLocalStorage = [];
    if (localStorage.getItem("plans") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("plans"));
        dataFromLocalStorage.push(newObject);
        dataFromLocalStorage.sort(function(a, b) {
            return a.number - b.number;
        });
        localStorage.setItem("plans", JSON.stringify(dataFromLocalStorage));

    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("plans", JSON.stringify(dataFromLocalStorage));
    }
}

function saveRecipeToLocalStorages(newObject) {
    var dataFromLocalStorage = [];
    if (localStorage.getItem("weeks") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("weeks"));
        dataFromLocalStorage.push(newObject);
        dataFromLocalStorage.sort(function(a, b) {
            return a - b;
        });
        localStorage.setItem("weeks", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("weeks", JSON.stringify(dataFromLocalStorage));
    }
}
