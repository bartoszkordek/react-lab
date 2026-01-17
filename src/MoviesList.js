export default function MovieList(props) {

    return (
        <div >
            <h1>My favourite movies to watch</h1>
            {props.movies.length > 0 ? <h2>Titles</h2> : <p>Brakuje ulubionych filmów</p>}
            <ul>
                {props.movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
            </ul>
        </div>
    );
}
