let userInfo = document.querySelector(".user-info");
let userInfoname = document.querySelector(".user-info__name");
let userInfoPhoto = document.querySelector(".user-info__photo");
let userInfonameDefault = userInfoname.innerHTML;

//links

let desktopLink = document.querySelector(".desktopLink");
let recipesLink = document.querySelector(".recipesLink");
let plansLink = document.querySelector(".plansLink");

function checkName() {
    // Getting name from local storage if exist and pushing into user info in header
    if (localStorage.getItem("savedName") != null){
        userInfoname.innerHTML = localStorage.savedName;
        userInfoPhoto.setAttribute("title", "Usuwa imię");
        return userInfoname.innerHTML;
    }else{
        userInfoname.innerHTML = userInfonameDefault;

        location.href= "./app.html";
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


//Usuwanie (task 9.1) i edycja przepisu (10.1)


let btnTrash = document.querySelectorAll(".btn__trash");
console.log(btnTrash);
let tableList = document.querySelector(".recipes__content");
console.log(tableList);

btnTrash.forEach(function(element) {

        element.addEventListener("click", function () {

            tableList.removeChild(this.parentElement.parentElement);

        });
    });

let todo = document.getElementById("todoList");
console.log(todo);

let btnEdit = document.querySelectorAll(".btn__edit");
console.log(btnEdit);

//podłączyć usunięcie do LS



    let recipesAmount = document.querySelectorAll('.recipes__box--id');
    console.log(recipesAmount);
    let recipesNumber = (recipesAmount.length-1);
    localStorage.setItem("recipesLocalStorage", recipesNumber);
