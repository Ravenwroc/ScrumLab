document.addEventListener("DOMContentLoaded", function() {


let readyButton = document.querySelector(".readyButton");
let messageAndForm = document.querySelector(".messageAndForm");
let enterName = document.querySelector("#enterName");
let userInfo = document.querySelector(".user-info");
let userInfoname = document.querySelector(".user-info__name");
let userInfoPhoto = document.querySelector(".user-info__photo");
let userInfonameDefault = userInfoname.innerHTML;
let infoBox = document.querySelector(".infoBox");
let extraStuff = document.querySelector(".extraStuff");




//links

let desktopLink = document.querySelector(".desktop");
let recipesLink = document.querySelector(".recipes");
let plansLink = document.querySelector(".plans");




readyButton.addEventListener("click", function storeName() {
    // Storing name in local storage if value length is bigger than 0
    // or removing if length == 0 and name is exist in local storage
    let givedName = document.querySelector(".nameInput").value;
    if (givedName.length > 0) {
        localStorage.setItem("savedName", givedName);
        return localStorage.savedName;

    } else if (givedName.length == 0 && localStorage.getItem("savedName") != null) {
        return "Exist or invalid name"
    }
})





function checkName() {
    // Getting name from local storage if exist and pushing into user info in header
    // and shows extraStuff section and links
    if (localStorage.getItem("savedName") != null){
        userInfoname.innerHTML = localStorage.savedName;
        messageAndForm.style.display = "none";
        extraStuff.style.display = "flex";
        userInfoPhoto.setAttribute("title", "Usuwa imię");

        //Links show
        desktopLink.classList.remove("hidden");
        recipesLink.classList.remove("hidden");
        plansLink.classList.remove("hidden");
        return userInfoname.innerHTML;
    }else{
        userInfoname.innerHTML = userInfonameDefault;
        messageAndForm.style.display = "flex";
        extraStuff.style.display = "none";


        //Links hide
        desktopLink.classList.add("hidden");
        recipesLink.classList.add("hidden");
        plansLink.classList.add("hidden");
        //
        return userInfoname.innerHTML;
    }
}
userInfo.addEventListener("click", function () {
    if (localStorage.getItem("savedName") != null){
        localStorage.removeItem("savedName");
        location.reload();
    }else{
        location.reload();
    }

})
checkName();


    let btnAll = document.querySelectorAll(".btn__trash");
    console.log(btnAll);
    let tableList = document.querySelector(".recipes__content");
    console.log(tableList);

    btnAll.forEach(function(element) {

        element.addEventListener("click", function () {

            tableList.removeChild(this.parentElement.parentElement);

        })
    })

})

//------------------------------------------

let addRecipeButton = document.querySelector('.btn-add-Recipe');
console.log(addRecipeButton);

let elementsInContainer = document.querySelectorAll('.content-container> *:not(.add-recipe-form)');
console.log(elementsInContainer);

let newRecipeForm = document.querySelector('.add-recipe-form');
let addInstructionButton = document.querySelector('.submit-instruction');
let addIngredientsButton = document.querySelector('.submit-ingredients');
let instructionsList = document.querySelector('.recipe-instruction-container__instruction-list');
console.log(instructionsList);
let ingredientsList = document.querySelector('.recipe-ingredients-container__ingredients-list');
console.log(ingredientsList);

addRecipeButton.addEventListener('click' ,function () {
    console.log('hello');

    // ukrywa zawartosc kontenera i pokazuje recipe form

    for (let i = 0; i < elementsInContainer.length; i++) {
        elementsInContainer[i].classList.toggle('no-display');
    }
    newRecipeForm.classList.toggle('no-display');

    // dodanie funkcjonalnosci przyciskowi: nowa instruckja


    addInstructionButton.addEventListener('click', function () {

        let instructionInput = document.querySelector('.recipe-partials-container__instructions-input');
        console.log(instructionInput);

        if(instructionInput.value.length > 0 && instructionsList.children.length < 10){

            let newInstructionElement = document.createElement('li');
            newInstructionElement.innerText = instructionInput.value;
            instructionsList.appendChild(newInstructionElement);
            instructionInput.value = '';

        }

    })

});



console.log(addIngredientsButton, addInstructionButton);


