import { useState } from "react";
import "milligram"; 
import MovieForm from "./MovieForm";
import MoviesList from './MoviesList';
import './App.css';


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
