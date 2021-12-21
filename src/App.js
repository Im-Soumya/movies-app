import React from "react"
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import "./App.css"
import AddFav from "./components/AddFav";
import RemoveFav from "./components/RemoveFav";

function App() {
  const [movies, setMovies] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [favourites, setFavourites] = React.useState([])
  
  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ef03579a`
    const res = await fetch(url)
    const data = await res.json()
    if(data.Search) {
      setMovies(data.Search)
    }
  }

  React.useEffect(() => {
    getMovies(searchValue)
  }, [searchValue])

  React.useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('favourite-movies'))
    setFavourites(movieFavourites)
  }, [])
  
  const saveToStorage = (items) => {
    localStorage.setItem('favourite-movies', JSON.stringify(items))
  }

  function handleChange(event) {
    setSearchValue(event.target.value)
  }

  function addFavourite(movie) {
    const newList = [...favourites, movie]
    setFavourites(newList)
    saveToStorage(newList)
  }

  function removeFavourite(movie) {
    const newList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID)
    setFavourites(newList)
    saveToStorage(newList)
  }

  return (
    <div className="container-fluid movieApp">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies'/>
        <SearchBox Change={handleChange}/>
      </div>
      <div className="row">
        <MovieList 
          movies={movies}
          favcomponent={AddFav}
          favourites={addFavourite}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Favourites'/>
      </div>
      <div className="row">
        <MovieList 
          movies={favourites}
          favcomponent={RemoveFav}
          favourites={removeFavourite}
        />
      </div>
    </div>
  );
}

export default App;
