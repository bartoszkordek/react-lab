import './App.css';
import "milligram";
import {useState} from "react";

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState();
    const [movies, setMovies] = useState([]);

    let message;
    if (title.length < 5) {
        message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    } else if (title.length < 15) {
        message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    } else {
        message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    }

    function addMovie() {
        const newMovie = {title: title, year: year};
        setMovies([...movies, newMovie]);
        setTitle('');
        setYear('');
    }
    
    let messsage = '';
    if (title.length === 0) {
        messsage = '';
    } else if(title.length < 5) {
        messsage = <div>Tytuł jest za krótki. Nagrywają takie filmy?</div>;
    } else   if(title.length >=5 && title.length <=20) {
        messsage = <div>Tytuł jest w sam raz, w sam raz na plakat przed kinem.</div>;
    } else if(title.length > 20) {
        messsage = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    } else {
        messsage = '';
    }

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
            </ul>
            <h2>Add movie</h2>
            <h3>Tytuł</h3>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            {title.length > 0 && <div>{message}</div>}
            <h3>Rok nagrania</h3>
            <input type="number" value={year} onChange={(event) => setYear(event.target.value)}/>
            <button onClick={(addMovie)}>Dodaj film</button>
        </div>
    );
}

export default App;
