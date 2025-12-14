import './App.css';
import { useState } from 'react';

function App() {
    const [title, setTitle] = useState('');

    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
];

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
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            {
              title.length > 0 && (
                <div>{messsage}</div>
              )
            }
            <input type="text" onChange={(event) => setTitle(event.target.value)} />
            <button onClick={() => alert(title)}>Pokaż tytuł filmu</button>
        </div>
    );
}

export default App;
