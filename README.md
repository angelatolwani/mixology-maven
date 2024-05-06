# Phase 1 Project

Using the public drinks API https://www.thecocktaildb.com/api.php, user is able to search for a drink and find its ingredients and recipes.

Core Deliverables:
1. Data is accessed from a public API containing 100+ objects with 51 attributes.
    Attributes that will be used:
    -drink name
    -instructions in English
    -drink image
    -1+ ingredients
    -1+ measurements
2. The project contains a single HTML file (./index.html)
3. The following 3 Event listeners are used to enable interactivity:
    1. "Submit" to search for a drink --> displays a list of drinks related to the string in the search tool
    2. "Mouse over" --> displays an image of the drink from the displayed list of drinks
    3. "Click" to select the drink of choice --> displays the drink image, recipe, and instructions (in English) for making the drink
4. ForEach methods are used to display the list of drinks after user hits submit, and to display the list of ingredients & measurements.
5. Functions are abstracted where possible.

Stretch goals:
1. Allow the user to enter the number of servings they would like to make, and update the recipe accordingly -- check to see if there's an npm package to read english to math
2. Allow the user to "favorite" drink recipes -- create a db.json that gets updated when a user adds to favorites (use unique object ID)

Potential Challenges: 
- Displaying the list of ingredients & respective measurements; the object contains 15 keys for ingredients, and the majority of them have "null" values.