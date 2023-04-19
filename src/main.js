const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },  
  params: {
    'api_key': API_KEY
  } 
});

async function getTrendingMoviesPreview() {
  
  const { data } = await api('/trending/movie/day'); 
    
  const movies = data.results;
  const trendingPreview = document.querySelector('.trendingPreview-movieList');

  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImage = document.createElement('img');
    movieImage.classList.add('movie-img');
    movieImage.setAttribute('alt', movie.title);
    movieImage.setAttribute(
      'src', 
      'https://image.tmdb.org/t/p/w300' + movie.poster_path
    );

    movieContainer.appendChild(movieImage);
    trendingPreview.appendChild(movieContainer);
  });
}

async function getCategoriesPreview() {
  
  const { data } = await api ('/genre/movie/list');
  
  const categories = data.genres;  
  const categoriesPreview = document.querySelector('.categoriesPreview-list');
  
  categories.forEach(category => {
    
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');

    categoryTitle.setAttribute('id', 'id' + category.id)
    categoryTitle.innerHTML = category.name;

    categoryContainer.appendChild(categoryTitle);
    categoriesPreview.appendChild(categoryContainer);
  });
}

getTrendingMoviesPreview();
getCategoriesPreview();