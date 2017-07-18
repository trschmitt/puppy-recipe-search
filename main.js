let list = document.querySelector('#list');
let baseUrl = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q=beef';

document.querySelector("button").addEventListener("click", function(event){
  event.preventDefault();
  fetch(baseUrl)
  .then(
    function(response) {

      if (response.status !== 200) {
        console.log("The status is " + response.status);
      }

      response.json().then(function(recipeData) {
        let results = recipeData.results;
        results.forEach(function(recipe) {
          let imageSrc = "http://via.placeholder.com/150x150"
          if (recipe.thumbnail !== "") {
            imageSrc = recipe.thumbnail;
          }
          let li = document.createElement("li");
          let template = `
            <img src="${imageSrc}" alt="recipe-picture-not-found">
            <a href="${recipe.href}"><h4>${recipe.title}</h4></a>
          `
          li.innerHTML = template;
          list.appendChild(li);
          // debugger
        });
      });
    }
  )
})
