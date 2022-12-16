import { Search } from './types'
import { images } from '../src/constants'


interface Imovie {
    movie : Search
}


const MovieCard = ({movie} : Imovie) => {
  return (

    <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={`${movie.Poster!=='N/A'?movie.Poster:images.placeholderFilm}`} alt="no image" />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
    </div>
    
  )
}

export default MovieCard