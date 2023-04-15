# Forkify Project

This project is from Jonas Schmedtmann udemy course called `The Complete JavaScript Course 2023: From Zero to Expert!`.

Forkify is a web application that allows users to search for recipes, update the number of servings, bookmark recipes, and create their own recipes.

## Features
The application offers the following features:

- Search for recipes using an API with pagination.
- Update the number of servings to automatically adjust ingredient quantities.
- Bookmark recipes for future reference. The bookmarks are stored in the browser's local storage.
- Create recipes that are automatically bookmarked and only visible to the user.
- Show recipe's calories data using the Spoonacular API. (My own feature)

## Technologies used

- HTML, CSS, and JavaScript for the frontend.
- Parcel
- Sass
- npm

## Getting Started

Type in the search box to find recipes. A loading spinner will appear and recipes will be displayed on the left side bar. If there is no recipes found then a error message will appear.

You can bookmark recipes by clicking on the bookmark icon which will display a fill icon instead. You can then clicked on 'My Bookmarks' to view all your bookmarks. You can also click on these bookmark recipes to navigate to that page.

Clicking on 'Add Recipe' will display form. Enter your new recipe data and make sure to follow the hint display in the text box to ensure format remain the same. Once you have added your recipe you will be shown a success message or a error message if POST was unsuccessful.