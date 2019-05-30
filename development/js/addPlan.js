let savePlanBtn = document.querySelector(".btn_save");
let addContainer = document.querySelector(".addplan__container");
let addBtn = document.querySelector(".btn_addPlan");
let mainView = document.querySelector(".mainApp");

addBtn.addEventListener("click", function(){
  let addPlanView = document.querySelector(".addplan__container");

  addPlanView.style.display = "block";
  mainView.style.display = "none";
})

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
    let dishPlan = document.querySelectorAll("select");
    console.log(dishPlan);

    if (titlePlan.length > 0 && descriptionPlan.length > 0 && weekPlan.length > 0) {
        addContainer.style.display = "none";
        mainView.style.display = "block";
        newPlan.title = titlePlan;
        newPlan.description = descriptionPlan;
        newPlan.number = weekPlan;
        dishPlan.forEach(function(element){
          newPlan.dishes.push(element.value);
        })
        saveRecipeToLocalStorage(newPlan);

    } else if (titlePlan.length == 0 || localStorage.getItem("title")!= null &&
               descriptionPlan.length == 0 || localStorage.getItem("description")!= null &&
               weekPlan.length == 0 || localStorage.getItem("week")!= null) {
        alert("Exist or invalid name");
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
  alert("Plan zapisany do localStorage");
}
