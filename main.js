fetch("https://crossorigin.me/http://www.recipepuppy.com/api")
.then(
  function(response) {

    if (response.status !== 200) {
      console.log("The status is "response.status);
    }

    response.json().then(function(recipeData) {
      let results = recipeData.results;
      results.forEach(function(recipe) {
        let template = `
        <ul>
          <li>
            <img src=${recipe.thumbnail}>
            <a href=${recipe.href}><h2>${recipe.title}</h2></a>

          </li>
        </ul>
        `

      })

    })

  }

)
