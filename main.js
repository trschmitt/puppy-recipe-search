let list = document.querySelector('#list');
const baseUrl = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q=search-term';

let button = document.querySelector("button").addEventListener("click", function(){
  console.log();
})

fetch(baseUrl)
.then(
  function(response) {

    if (response.status !== 200) {
      console.log("The status is " + response.status);
    }

    response.json().then(function(recipeData) {
      let results = recipeData.results;
      results.forEach(function(recipe) {
        let template = `
        <li>
          <img src=${recipe.thumbnail} alt="recipe-picture-not-found">
          <a href=${recipe.href}><h4>${recipe.title}</h4></a>
        </li>
        `
        list.innerHTML = template;
      });
    });
  }
)
function searchRecipes() {

}
