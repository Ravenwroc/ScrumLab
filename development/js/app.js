document.addEventListener("DOMContentLoaded", function () {


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
    if (localStorage.getItem("savedName") != null) {
      userInfoname.innerHTML = localStorage.savedName;
      messageAndForm.style.display = "none";
      extraStuff.style.display = "flex";
      userInfoPhoto.setAttribute("title", "Usuwa imię");

      //Links show
      desktopLink.classList.remove("hidden");
      recipesLink.classList.remove("hidden");
      plansLink.classList.remove("hidden");
      return userInfoname.innerHTML;
    } else {
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
    if (localStorage.getItem("savedName") != null) {
      localStorage.removeItem("savedName");
      location.reload();
    } else {
      location.reload();
    }

  })
  checkName();


  let btnAll = document.querySelectorAll(".btn__trash");

  let tableList = document.querySelector(".recipes__content");


  btnAll.forEach(function (element) {

    element.addEventListener("click", function () {

      tableList.removeChild(this.parentElement.parentElement);

    })
  })

})

//------------------------------------------
if (localStorage.getItem('counter') === null){
  localStorage.setItem('counter', '0');
}



let addRecipeButton = document.querySelector('.btn-add-Recipe');


let elementsInContainer = document.querySelectorAll('.content-container> *:not(.add-recipe-form)');


let newRecipeForm = document.querySelector('.add-recipe-form');
let addInstructionButton = document.querySelector('.submit-instruction');
let addIngredientsButton = document.querySelector('.submit-ingredients');
let instructionsList = document.querySelector('.recipe-instruction-container__instruction-list');
let ingredientsList = document.querySelector('.recipe-ingredients-container__ingredients-list');

addRecipeButton.addEventListener('click', function () {

  // ukrywa zawartosc kontenera i pokazuje recipe form

  for (let i = 0; i < elementsInContainer.length; i++) {
    elementsInContainer[i].classList.toggle('no-display');
  }
  newRecipeForm.classList.toggle('no-display');

  // dodanie funkcjonalnosci przyciskowi: nowa instruckja


  addInstructionButton.addEventListener('click', function () {

    let instructionInput = document.querySelector('.recipe-partials-container__instructions-input');

    if (instructionInput.value.length > 0 && instructionsList.children.length < 10) {

      let newInstructionElement = document.createElement('li');
      newInstructionElement.innerText = instructionInput.value;
      newInstructionElement.innerHTML = `<span>${instructionInput.value}</span><div>
<i class="recipe-partials-container__edit-icon fas fa-edit" title="edit"></i>
<i class="recipe-partials-container__edit-icon--edit-mode hide fas fa-edit" title="save"></i>
<i class="recipe-partials-container__delete-icon far fa-trash-alt" title="delete"></i></div>`;
      instructionsList.appendChild(newInstructionElement);
      instructionInput.value = '';


      let saveInstructionButton = newInstructionElement.querySelector('.recipe-partials-container__edit-icon--edit-mode');
      let deleteInstructionButton = newInstructionElement.querySelector('.recipe-partials-container__delete-icon');
      let editInstructionButton = newInstructionElement.querySelector('.recipe-partials-container__edit-icon');
      // dodanie funkcjonalnosci przyciskowi edytowania

      editInstructionButton.addEventListener('click', function () {

        // let editSpace = document.createElement()
        let inputArea = this.parentElement.parentElement.querySelector('span');
        let inputValue = inputArea.innerText;
        inputArea.innerHTML = `<input class="recipe-partials-container__instruction-edited" type="text" value="${inputValue}">`;
        this.classList.toggle('hide');
        deleteInstructionButton.classList.toggle('hide');
        saveInstructionButton.classList.toggle('hide');

        // let editModebutton = this.parentElement.querySelector('.recipe-partials-container__edit-icon--edit-mode');

        saveInstructionButton.addEventListener('click', function () {
          let editedInput = inputArea.querySelector('.recipe-partials-container__instruction-edited').value;
          inputArea.innerHTML = null;
          inputArea.innerText = editedInput;
          editInstructionButton.classList.toggle('hide');
          deleteInstructionButton.classList.toggle('hide');
          saveInstructionButton.classList.toggle('hide');
        })
      });


      deleteInstructionButton.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
      })
    }
  });


  
  
  addIngredientsButton.addEventListener('click', function () {

    let ingredientsInput = document.querySelector('.recipe-partials-container__ingredients-input');

    if (ingredientsInput.value.length > 0 && instructionsList.children.length < 20) {

      let newIngredientsElement = document.createElement('li');
      newIngredientsElement.innerText = ingredientsInput.value;
      newIngredientsElement.innerHTML = `<span>${ingredientsInput.value}</span><div>
<i class="recipe-partials-container__edit-icon fas fa-edit" title="edit"></i>
<i class="recipe-partials-container__edit-icon--edit-mode hide fas fa-edit" title="save"></i>
<i class="recipe-partials-container__delete-icon far fa-trash-alt" title="delete"></i></div>`;
      ingredientsList.appendChild(newIngredientsElement);
      ingredientsInput.value = '';

      let saveInstructionButton = newIngredientsElement.querySelector('.recipe-partials-container__edit-icon--edit-mode');
      let deleteInstructionButton = newIngredientsElement.querySelector('.recipe-partials-container__delete-icon');
      let editInstructionButton = newIngredientsElement.querySelector('.recipe-partials-container__edit-icon');


      editInstructionButton.addEventListener('click', function () {

        // let editSpace = document.createElement()
        let inputArea = this.parentElement.parentElement.querySelector('span');
        let inputValue = inputArea.innerText;
        console.log(inputValue, inputArea);
        inputArea.innerHTML = `<input class="recipe-partials-container__instruction-edited" type="text" value="${inputValue}">`;
        this.classList.toggle('hide');
        deleteInstructionButton.classList.toggle('hide');
        saveInstructionButton.classList.toggle('hide');

        // let editModebutton = this.parentElement.querySelector('.recipe-partials-container__edit-icon--edit-mode');

        saveInstructionButton.addEventListener('click', function () {
          let editedInput = inputArea.querySelector('.recipe-partials-container__instruction-edited').value;
          inputArea.innerHTML = null;
          inputArea.innerText = editedInput;
          editInstructionButton.classList.toggle('hide');
          deleteInstructionButton.classList.toggle('hide');
          saveInstructionButton.classList.toggle('hide');
        })
      });

      deleteInstructionButton.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
      })
    }
  });



});



function RecipeTemplate(name, description, instructions, ingredients){
  this.name = name;
  this.description = description;
  this.instructions = instructions;
  this.ingredients = ingredients;}

testArray = [];

function clearAllInputs() {
  let instructionsInput = document.querySelector('.recipe-partials-container__instructions-input');
  let ingredientsInput = document.querySelector('.recipe-partials-container__ingredients-input');
  let recipeNameInput = document.querySelector('.recipe-input-container__input.input-name');
  let recipeDescriptionInput = document.querySelector('.recipe-input-container__input.input-description');
  recipeNameInput.value = '';
  recipeDescriptionInput.value = '';
  instructionsInput.value = '';
  ingredientsInput.value = '';
  instructionsList.innerHTML = null;
  ingredientsList.innerHTML = null;

};

let submitRecipeButton = document.querySelector('.recipe-form-header__submit');
submitRecipeButton.addEventListener('click', function () {
  let recipeNameInput = document.querySelector('.recipe-input-container__input.input-name').value;
  let recipeDescriptionInput = document.querySelector('.recipe-input-container__input.input-description').value;
  let recipeInstructionsContainers = document.querySelectorAll('.recipe-instruction-container__instruction-list >li > span');
  let recipeIngredientsContainers = document.querySelectorAll('.recipe-ingredients-container__ingredients-list >li > span');
  let recipeInstructionsList = [];
  let recipeIngredientsList = [];

  recipeInstructionsContainers.forEach(function (element) {
    recipeInstructionsList.push(element.innerText);
  });
  recipeIngredientsContainers.forEach(function (element) {
    recipeIngredientsList.push(element.innerText);
  });

  let generatedRecipe = new RecipeTemplate(recipeNameInput, recipeDescriptionInput, recipeInstructionsList, recipeIngredientsList);

  counter = parseInt(localStorage.getItem('counter'));
  localStorage.setItem(`recipe_${counter}`, JSON.stringify(generatedRecipe));
  counter++;
  localStorage.setItem('counter', `${counter}`);
  clearAllInputs();
  newRecipeForm.classList.toggle('no-display');
  for (let i = 0; i < elementsInContainer.length; i++) {
    elementsInContainer[i].classList.toggle('no-display');
  }



  
});



