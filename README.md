# Phase 1 Project

Using the public drinks API https://www.thecocktaildb.com/api.php, the user is able to search for a drink and find its ingredients and recipes.

Core Deliverables:
1. Data is accessed from a public API containing 100+ objects with 51 attributes.
    Attributes that are used:
    -drink name
    -drink image
    -instructions in English
    -list of ingredients (each drink contains up to 15 keys for ingredients)
    -list of measurements for each ingredient (each drink contains up to 15 keys for measurements)
2. The project contains a single HTML file (./index.html)
3. The following 3 Event listeners are used to enable interactivity:
    1. "Submit" to search for a drink --> displays a list of drinks related to the string in the search tool
    2. "Mouse over" --> displays an image of the drink from the displayed list of drinks
    3. "Click" to select the drink of choice --> displays the drink image, recipe, and instructions (in English) for making the drink
4. ForEach methods are used to display the list of drinks after user hits submit, and to display the list of ingredients & measurements.
5. Functions are abstracted where possible.

Stretch goals:
1. Allow the user to "favorite" drink recipes -- create a db.json that gets updated when a user adds to favorites (use unique object ID)

Future Directions: 
- Allow the user to enter the number of servings they would like to make, and update the recipe accordingly (measurements are given stored in the cocktail database inconsistent strings)