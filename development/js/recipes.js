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


    let btnAll = document.querySelectorAll(".btn__trash");
    console.log(btnAll);
    let tableList = document.querySelector(".recipes__content");
    console.log(tableList);

    btnAll.forEach(function(element) {

        element.addEventListener("click", function () {

            tableList.removeChild(this.parentElement.parentElement);

        })
    })


    let recipesAmount = document.querySelectorAll('.recipes__box--id');
    console.log(recipesAmount);
    let recipesNumber = (recipesAmount.length-1);
    localStorage.setItem("recipesLocalStorage", recipesNumber);
