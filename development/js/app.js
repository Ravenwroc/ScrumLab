document.addEventListener("DOMContentLoaded", function() {


let readyButton = document.querySelector(".readyButton");
let messageAndForm = document.querySelector(".messageAndForm");
let enterName = document.querySelector("#enterName");
let userInfo = document.querySelector(".user-info");
let userInfoname = document.querySelector(".user-info__name");
let userInfoPhoto = document.querySelector(".user-info__photo");
let userInfonameDefault = userInfoname.innerHTML;
let infoBox = document.querySelector(".infoBox");
let dashboard = document.querySelector(".dashboard");



//links

let desktopLink = document.querySelector(".desktopLink");
let recipesLink = document.querySelector(".recipesLink");
let plansLink = document.querySelector(".plansLink");




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
    // and shows dashboard section and links
    if (localStorage.getItem("savedName") != null){
        userInfoname.innerHTML = localStorage.savedName;
        messageAndForm.style.display = "none";
        dashboard.style.display = "flex";
        userInfoPhoto.setAttribute("title", "Usuwa imię");

        //Links show
        desktopLink.classList.remove("hidden");
        recipesLink.classList.remove("hidden");
        plansLink.classList.remove("hidden");
        return userInfoname.innerHTML;
    }else{
        userInfoname.innerHTML = userInfonameDefault;
        messageAndForm.style.display = "flex";
        dashboard.style.display = "none";


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

//Task #9.1 - remove recipes (Agata)


    let btnAll = document.querySelectorAll(".btn__trash");
    //console.log(btnAll);
    let tableList = document.querySelector(".recipes__content");
    //console.log(tableList);

    btnAll.forEach(function(element) {

        element.addEventListener("click", function () {

            tableList.removeChild(this.parentElement.parentElement);

        })
    })

// notifications

let exitButton1 = document.querySelectorAll('.exit_notification')[0];
let exitButton2 = document.querySelectorAll('.exit_notification')[1];
let exitButton3 = document.querySelectorAll('.exit_notification')[2];
// console.log(exitButton1);
let notificationContainer = document.querySelector('.notifications-container');
//console.log(notificationContainer);
let notificationElement = document.querySelectorAll('.notifications-container_element');


exitButton1.addEventListener('click', function(){
    notificationContainer.removeChild(notificationElement[0]);
})

exitButton2.addEventListener('click', function(){
    notificationContainer.removeChild(notificationElement[1]);
})

exitButton3.addEventListener('click', function(){
    notificationContainer.removeChild(notificationElement[2]);
})

//Notification counter
let notificationCounter = document.querySelector('#notification_counter');
//console.log(notificationCounter);
let recipesLS = localStorage.getItem('recipesLocalStorage');
let recipes = recipesLS;
notificationCounter.innerText = recipes;
//

let notificationText = document.querySelectorAll('.notification_text');
console.log(notificationText[0]);

function notification(type,text) {
    if (type == 'warning') {
        notificationText[1].innerText = text;
    } else if (type == 'success') {
        notificationText[2].innerText = text;
    }
}



})
