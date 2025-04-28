import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/actors")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch actors");
        }
        return r.json();
      })
      .then((data) => {
        setActors(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading actors...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <MovieList movies={actor.movies.map((title, index) => ({ id: index, title }))} />
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
