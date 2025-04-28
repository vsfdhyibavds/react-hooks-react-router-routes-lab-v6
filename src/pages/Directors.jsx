import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/directors")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch directors");
        }
        return r.json();
      })
      .then((data) => {
        setDirectors(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading directors...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <MovieList movies={director.movies.map((title, index) => ({ id: index, title }))} />
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
