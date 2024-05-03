# Phase 1 Project

Using the public drinks API https://www.thecocktaildb.com/api.php, user is able to search for a drink and find its ingredients and recipes.

Core Deliverables:
1. Data is accessed from a public API containing 100+ objects with 51 attributes.
2. The project contains a single HTML file (./index.html)
3. The following 3 Event listeners are used to enable interactivity:
    1. "Submit" to search for a drink --> displays a list of drinks related to the string in the search tool
    2. "Mouse over" --> displays an image of the drink from the displayed list of drinks
    3. "Click" to select the drink of choice --> displays the drink image, recipe, and instructions (in English) for making the drink
4. Array iteration methods are used to display the list of drinks after user hits submit, and to display the list of ingredients & measurements.
5. Functions are abstracted where possible.

Stretch goals:
1. Allow the user to enter the number of servings they would like to make, and update the recipe accordingly
2. Allow the user to "favorite" drink recipes

Potential Challenges: 
- Displaying the list of ingredients & respective measurements; the object contains 15 keys for ingredients, and the majority of them have "null" values.