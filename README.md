# Mixology Maven

Using the public drinks API https://www.thecocktaildb.com/api.php, the user is able to search for a drink and find its ingredients and recipes. The user is also able to "favorite" drink recipes, using fetch requests to store favorite drinks to a local JSON file.

Core Deliverables:
1. Drink data is accessed from a public API containing 100+ objects with 51 attributes.
    Attributes that are used:
    -drink name
    -drink image
    -instructions in English
    -list of ingredients (each drink contains up to 15 keys for ingredients)
    -list of measurements for each ingredient (each drink contains up to 15 keys for measurements)
2. The project contains a single HTML file (./index.html)
3. The following Event listeners are used to enable interactivity:
    1. "Submit" to search for a drink --> displays a list of drinks related to the string in the search tool
    2. "Mouse over" / "Mouse out" --> displays an image of the drink from the displayed list of drinks
    3. "Click" to select the drink of choice --> displays the drink image, recipe, and instructions (in English) for making the drink
    4. "Click" the Favorites button --> adds drink name to local favorites db

Future Directions: 
- Enable the interactivity on the favorites list similar to the interactivity of the menu (mouse over, click)
- Allow the user to delete an item from the favorites list
- Improved styling
