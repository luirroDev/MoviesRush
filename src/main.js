const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },  
  params: {
    'api_key': API_KEY
  } 
});

/* Utils */ 

function createMovies(movies, container) {
  container.innerHTML = '';

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
    movieContainer.addEventListener('click', () => {
      location.hash = 'movie=' + movie.id
    });    

    movieContainer.appendChild(movieImage);
    container.appendChild(movieContainer);
  });

}

function createCategories(categories, container) {
  
  container.innerHTML = '';

  categories.forEach(category => {    
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'id' + category.id)
    categoryTitle.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`;
    })
    categoryTitle.innerHTML = category.name;

    categoryContainer.appendChild(categoryTitle);
    container.appendChild(categoryContainer);
  });
}

/* API Request */ 

async function getTrendingMoviesPreview() {

  const { data } = await api('/trending/movie/day');

  const movies = data.results;

  createMovies(movies, trendingMoviesPreview);

}

async function getCategoriesPreview() {
  
  const { data } = await api ('/genre/movie/list');
  
  const categories = data.genres; 
  
  createCategories(categories, categoriesPreview)
}

async function getMoviesByCategory(id) {
  
  const { data } = await api('/discover/movie', {
    params: {
      with_genres: id,
    },
  }); 
    
  const movies = data.results;

  createMovies(movies, genericSection);

}

async function getmoviesBySearch(query) {
  
  const { data } = await api ('/search/movie', {
    params: {
      query,
    },
  });
  
  const movies = data.results; 
  console.log(data.results);
  
  createMovies(movies, genericSection)
}

async function getTrendingMovies() {
  const { data } = await api('/trending/movie/day');
  createMovies(data.results, genericSection);
}

async function getMovieByID(movie_id) {

  const { data } = await api(`/movie/${movie_id}`);

  movieDetailTitle.textContent = data.title;
  moveDetailDescripcion.textContent = data.overview;
  movieDetailScore.textContent = data.vote_average;  
  createCategories(data.genres, movieDetailList);
  headerSection.style.background = `url(https://image.tmdb.org/t/p/w500${data.poster_path})`
  getRecommendationsMovieByID(movie_id);

}

async function getRecommendationsMovieByID(movie_id) {

  const { data } = await api(`/movie/${movie_id}/recommendations`); 

  console.log(data);

  createMovies(data.results, relatedMoviesContainer);

}