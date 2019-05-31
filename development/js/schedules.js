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

let btnAll = document.querySelectorAll(".btn_trash");
console.log(btnAll);
let tableList = document.querySelector(".ul_schedule_list");
console.log(tableList);

btnAll.forEach(function(element) {

    element.addEventListener("click", function () {

        tableList.removeChild(this.parentElement.parentElement);

    })
})

// edit plan

let editButton = document.querySelectorAll('.btn_edit');
console.log(editButton)

// let ulSchedule = document.getElementsByClassName('description');
let ulSchedule = document.getElementsByClassName('description');
console.log(ulSchedule);

    editButton.forEach(function(element) {
        element.addEventListener('click', function(){
            for (let i = 1 ; i < ulSchedule.length; i +=1 ) {
                let editable = ulSchedule[i].getAttribute('contenteditable');
                if (editable == 'true') {
                    ulSchedule[i].setAttribute('contenteditable', 'false');
                } else {
                    ulSchedule[i].setAttribute('contenteditable', 'true');
                }
            }
        })
    })





