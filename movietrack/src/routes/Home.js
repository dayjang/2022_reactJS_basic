import { useEffect, useState } from "react";
import Movie from "./Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const js = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(js.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(loading, movies);
  return (
    <div>
      <h1>
        Movie {loading ? "loading.." : `list - ${movies.length} movies info`}
      </h1>
      <ul>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;