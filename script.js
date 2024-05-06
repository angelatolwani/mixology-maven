document.querySelector("#searchBox").addEventListener("submit", event => {
    event.preventDefault();
    const searchTerm = document.querySelector("#drink").value;
    getDrinkList(searchTerm);
})


function getDrinkList(searchTerm) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(response => response.json())
    .then(drinks => {
        const drinksObj = drinks.drinks;
        const ul = document.querySelector("#drinkList");
        drinksObj.forEach((drink, index) => {
            const li = document.createElement("li");
            li.textContent = drink.strDrink;
            li.id = drink.idDrink;
            ul.append(li);
        })
    })
    .catch(error => document.querySelector("#drinkList").textContent=error);
};