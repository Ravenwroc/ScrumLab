let savePlanBtn = document.querySelector(".btn_save");
let addContainer = document.querySelector(".addplan__container");

let newPlan = {
  title: "",
  description: "",
  number: "",
  dishes: []
};

savePlanBtn.addEventListener("click", function storeName() {

    let titlePlan = document.querySelector(".plan_title").value;
    let descriptionPlan = document.querySelector(".plan_description").value;
    let weekPlan = document.querySelector(".inp_week").value;
    let dishPlan = document.querySelector("select").value;

    if (titlePlan.length > 0 && descriptionPlan.length > 0 && weekPlan.length > 0) {
        addContainer.style.display = "none";
        newPlan.title = titlePlan;
        newPlan.description = descriptionPlan;
        newPlan.number = weekPlan;
        newPlan.dishes = dishPlan;
        saveRecipeToLocalStorage(newPlan);

    } else if (titlePlan.length == 0 && localStorage.getItem("title") &&
               titlePlan.length == 0 && localStorage.getItem("description") &&
               titlePlan.length == 0 && localStorage.getItem("week")!= null) {
        return "Exist or invalid name"
    }
})

function saveRecipeToLocalStorage(newObject) {
  var dataFromLocalStorage = [];
  if (localStorage.getItem("plans") != null) {
    dataFromLocalStorage = JSON.parse(localStorage.getItem("plans"));
    dataFromLocalStorage.push(newObject);
    localStorage.setItem("plans", JSON.stringify(dataFromLocalStorage));
  } else {
    dataFromLocalStorage.push(newObject);
    localStorage.setItem("plans", JSON.stringify(dataFromLocalStorage));
  }
  alert("Przepis zapisany do localStorage");
}
