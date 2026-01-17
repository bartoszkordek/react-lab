import { useState } from "react";
import "milligram"; 
import MovieForm from "./MovieForm";
import MoviesList from './MoviesList';
import './App.css';


function App() {
    const [movies, setMovies] = useState([]);
    const [addingMovie, setAddingMovie] = useState(false);

    return (
        <div className="container">
            <MoviesList movies={movies} onMoviesDelete={setMovies}/>
            {addingMovie ? (
            <MovieForm onMovieSubmit={(movie) => {
                setMovies([...movies, movie]);
                setAddingMovie(false);
            }}/>
        ) : (
            <button onClick={() => setAddingMovie(true)}>Add movie</button>
        )}
        </div>
    );
}

export default App;
