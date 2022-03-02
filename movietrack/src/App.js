import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((res) => res.json())
      .then((js) => {
        setMovies(js.data.movies);
        setLoading(false);
      });
  }, []);

  console.log(loading, movies);
  return (
    <div>
      <h1>
        Movie {loading ? "loading.." : `list - ${movies.length} movies info`}
      </h1>
      <ul>
        {movies.map((item, index) => (
          <li key={index}>
            Title:{item.title} Year: {item.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
