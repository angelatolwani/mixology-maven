document.querySelector("#searchBox").addEventListener("submit", event => {
    event.preventDefault();
    const searchTerm = document.querySelector("#drink").value;
    if (document.querySelectorAll("li.drink").length > 0) {
        removeCurrentDrinkList();
        removeDrinkRecipe();
    };
    getDrinkList(searchTerm);
})

function removeCurrentDrinkList() {
    while (document.querySelectorAll("li.drink").length > 0) {
        document.querySelector("li.drink").remove();
    }
};

function removeDrinkRecipe() {
    document.querySelector("#drinkName").textContent = "";
    document.querySelector("#drinkImage").style.visibility = "hidden";
    document.querySelector("#drinkInstructions").textContent = "";
    removeCurrentIngredientList();
};


function getDrinkList(searchTerm) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(response => response.json())
    .then(drinks => {
        const drinksObj = drinks.drinks;
        // console.log(drinksObj);
        if (drinksObj !== null) {
            document.querySelector("#errorMessage").textContent = "";
            createMenu(drinksObj);
        } else {
            document.querySelector("#errorMessage").textContent = "No drink found";
        }
    })
    .catch(error => document.querySelector("#drinkList").textContent=error);
};

function createMenu(drinksObj) {
    const ul = document.querySelector("#drinkList");
    drinksObj.forEach((drink, index) => {
        const li = document.createElement("li");
        li.textContent = drink.strDrink;
        li.id = drink.idDrink;
        li.classList.add("drink");
        li.addEventListener("mouseover", event => {
            event.preventDefault();
            createThumbnail(event.target, drink);
        });
        li.addEventListener("mouseout", event => {
            event.preventDefault();
            document.querySelector("#thumbnailPic").remove();
        });
        li.addEventListener("click", event => {
            event.preventDefault();
            handleClick(drink);
        });
        ul.append(li);
    })
};

function createThumbnail(li, drink) {
    const img = document.createElement("img");
    img.src = drink.strDrinkThumb;
    img.width = "100";
    img.height = "100";
    img.alt = "no image to display";
    img.style.position = "absolute";
    img.style.zIndex = "1";
    img.id = "thumbnailPic";
    li.append(img);
};

function handleClick(drink) {
    console.log(drink);
    document.querySelector("#drinkName").textContent = drink.strDrink;
    document.querySelector("#drinkImage").src = drink.strDrinkThumb;
    document.querySelector("#drinkImage").style.visibility = "visible";
    document.querySelector("#drinkInstructions").textContent = drink.strInstructions;
    removeCurrentIngredientList();
    createIngredientList(drink);
};

function removeCurrentIngredientList() {
    while (document.querySelectorAll("li.ingredient").length > 0) {
        document.querySelector("li.ingredient").remove();
    }
};

function createIngredientList(drink) {
    const ol = document.querySelector("#drinkIngredients");
    let i = 1;
    while (drink[`strIngredient${i}`] !== null) {
        const li = document.createElement("li");
        const ingredient = drink[`strIngredient${i}`];
        let measurement = "";
        if (drink[`strMeasure${i}`] !== null) {
            measurement = drink[`strMeasure${i}`] + " ";
        } else {
            measurement = "";
        }
        li.textContent = measurement + ingredient;
        li.classList.add("ingredient");
        ol.append(li);
        i++;
    };
};