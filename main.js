let list = document.querySelector('#list');
let baseUrl = 'https://crossorigin.me/http://www.recipepuppy.com/api/';

let search = document.querySelector("form")
search.addEventListener("submit", function(event){
  event.preventDefault();

  let searchTerm = event.target.querySelector("input").value;
  let userReq = `${baseUrl}?q=${searchTerm}`;

  fetch(userReq)
  .then(
    function(response) {

      if (response.status !== 200) {
        console.log("The status is " + response.status);
      }

      response.json().then(function(recipeData) {
        let results = recipeData.results;
        let templateContainer = "";
        let template = "";
        results.forEach(function(recipe) {
          let imageSrc = "http://via.placeholder.com/150x150"
          if (recipe.thumbnail !== "") {
            imageSrc = recipe.thumbnail;
          }
          template = `
            <li>
              <img src="${imageSrc}" alt="recipe-picture-not-found">
              <a href="${recipe.href}"><h4>${recipe.title}</h4></a>
            </li>
          `
          templateContainer += template;
        });
        searchTerm = "";
        list.innerHTML = templateContainer;
      });
    }
  )
})

// TODO: onfocus event listeners onkeypress document.querySelector("input").value
// TODO: add event listener ("focus", function(){})
// TODO: ?q= whatever is in the search bar
// TODO: URLsearchParams document.location.search.slice
