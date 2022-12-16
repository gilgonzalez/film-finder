import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Search, SearchType } from "./types";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

function App() {
  //4a1f82e7

  const [films, setFilms] = useState<Search[]>([]);
  const [search, setSearch] = useState<string>('')
  const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const handleClickSearch = ()=>{
    searchMovies(search)
  }

  const movie1 = {
    Title: "The Dark Knight",
    Year: "2008",
    imdbID: "tt0468569",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  };

  const API_URL = "http://www.omdbapi.com?apikey=4a1f82e7";

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data: SearchType = await response.json();
    setFilms(data.Search);
  };
  useEffect(() => {
    searchMovies("Dark Knight");
  }, []);

  return (
    <div className="app">
      <h1>Buscador Peliculas</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={handleSearch}
        />
        <img src={searchIcon} alt="search" onClick={handleClickSearch} />
      </div>

      {films.length > 0 ? (
        <div className="container">
          {films.map((film: Search) => (
            <MovieCard movie={film} key={film.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No se encontraron resultados</h2>
        </div>
      )}
    </div>
  );
}

export default App;
