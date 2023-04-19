window.addEventListener('load', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator() {
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')){
    searchPage();
  } else if (location.hash.startsWith('#movie=')){
    moviespage();
  } else if (location.hash.startsWith('#category')){
    categoriesPage();
  } else {
    homePage();
  }
}

function homePage() {
  console.log('On Home!!!');
  getTrendingMoviesPreview();
  getCategoriesPreview();  
}
function categoriesPage() {
  console.log('On categories!!!');  
}
function moviespage() {  
  console.log('On Movie!!!');
}
function searchPage() {  
  console.log('On Search!!!');
}
function trendsPage() {
  console.log('On Trends!!!');  
}