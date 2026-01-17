export default function MovieList(props) {

    function selectMoviesToDelete() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const titlesToDelete = [];
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                titlesToDelete.push(props.movies[index].title);
            }
        });
        return titlesToDelete;
    }

    function deleteMovies(titles) {
        const filteredMovies = props.movies.filter(movie => !titles.includes(movie.title));
        props.onMoviesDelete(filteredMovies);
    }
    
    function handleDeleteClick() {
        const titlesToDelete = selectMoviesToDelete();
        deleteMovies(titlesToDelete);
    }

    return (
        <div >
            <h1>My favourite movies to watch</h1>
            {props.movies.length > 0 ? <h2>Titles</h2> : <p>Brakuje ulubionych filmów</p>}
            <ul>
                {props.movies.map(movie => <li key={movie.title}><input type="checkbox"/>{movie.title} ({movie.year})</li>)}
            </ul>
            {props.movies.length > 0 ? (
            <button onClick={handleDeleteClick}>Delete selected movies</button>
        ) : null}
        </div>
    );
}
