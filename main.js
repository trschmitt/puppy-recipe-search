let list = document.querySelector('#list');
let baseUrl = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q=search-term';

let search = document.querySelector("form")
search.addEventListener("submit", function(event){
  event.preventDefault();

  let searchTerm = event.target.querySelector("input").value;

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
        });
      });
    }
  )
})

// TODO: onfocus event listeners onkeypress document.querySelector("input").value
// TODO: add event listener ("focus", function(){})
// TODO: ?q= whatever is in the search bar
// TODO: URLsearchParams document.location.search.slice
