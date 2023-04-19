// const axios = require('axios').default;
// const api = axios.create({
//   baseURL: `https://api.themoviedb.org/3`,
// })
// api.defaults.headers.common['x-api-key'] = API_KEY;

async function getTrendingMoviesPreview() {
  const trendingPreview = document.querySelector('.trendingPreview-movieList');

  const res = await fetch (
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  const data = await res.json();
  const movies = data.results;

  console.log(movies);

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
  const categoriesPreview = document.querySelector('.categoriesPreview-list');

  const res = await fetch (
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );

  const data = await res.json();
  const categories = data.genres;

  console.log(categories);

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