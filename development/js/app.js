document.addEventListener("DOMContentLoaded", function() {

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

