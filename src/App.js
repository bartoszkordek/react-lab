import './App.css';
import MovieForm from "./MovieForm";
import "milligram";
import {useState} from "react";
import MoviesList from './MoviesList';

function App() {
    const [movies, setMovies] = useState([]);
    return (
        <div className="container">
            <MoviesList movies={movies}/>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
        </div>
    );
}

export default App;
