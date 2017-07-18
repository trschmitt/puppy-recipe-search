let list = document.querySelector('#list');

`<button onclick="myFunction()">Search</button>`
function searchFun() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "search");
    document.body.appendChild(x);
}



fetch("https://crossorigin.me/http://www.recipepuppy.com/api")
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
