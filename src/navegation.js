window.addEventListener('load', navigator, false);
window.addEventListener('hashchange', navigator, false);
searchFormBtn.addEventListener('click', () => {
  location.hash = '#search=' + searchFormInput.value;
}) 
trendingBtn.addEventListener('click', () => [
  location.hash = '#trends'
])
arrowBtn.addEventListener('click', () => {
  history.back();
})


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

  document.documentElement.scrollTop = 0;
}

function homePage() {
  console.log('On Home!!!');

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.add('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.remove('inactive');
  headerCategorieTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPrewievSection.classList.remove('inactive');
  categoriesPreviewSection.classList.remove('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.add('inactive');

  getTrendingMoviesPreview();
  getCategoriesPreview();  
}
function categoriesPage() {
  console.log('On categories!!!');  

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategorieTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPrewievSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  const [_, categoryData] = location.hash.split('=');
  const [categoryID, categoryName] = categoryData.split('-')
  headerCategorieTitle.innerHTML = categoryName;

  getMoviesByCategory(categoryID); 
}
function moviespage() {  
  console.log('On Movie!!!');

  headerSection.classList.add('header-container--long');
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerSection.style.background = '';  
  headerCategorieTitle.classList.add('inactive');
  searchForm.classList.add('inactive');
  
  trendingPrewievSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');
  

  const [_, movieID] = location.hash.split('=');
  getMovieByID(movieID);
}
function searchPage() {  
  console.log('On Search!!!');

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategorieTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPrewievSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  const [_, query] = location.hash.split('=');
  getmoviesBySearch(query);
}
function trendsPage() {
  console.log('On Trends!!!');  

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategorieTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPrewievSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  headerCategorieTitle.innerHTML = 'Tendencias';
  getTrendingMovies();
}