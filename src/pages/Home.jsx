import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default Home;
