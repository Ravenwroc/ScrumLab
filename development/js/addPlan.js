let savePlanBtn = document.querySelector(".btn_save");
let addContainer = document.querySelector(".addplan__container");

savePlanBtn.addEventListener("click", function storeName() {

    let titlePlan = document.querySelector(".plan_title").value;
    let descriptionPlan = document.querySelector(".plan_description").value;
    let weekPlan = document.querySelector(".inp_week").value;

    if (titlePlan.length > 0 && descriptionPlan.length > 0 && weekPlan.length > 0) {
        addContainer.style.display = "none";
        localStorage.setItem("title", titlePlan);
        localStorage.setItem("description", descriptionPlan);
        localStorage.setItem("week", weekPlan);

        return localStorage.title;
               localStorage.description;
               localStorage.week;

    } else if (titlePlan.length == 0 && localStorage.getItem("title") &&
               titlePlan.length == 0 && localStorage.getItem("description") &&
               titlePlan.length == 0 && localStorage.getItem("week")!= null) {
        return "Exist or invalid name"
    }
})
