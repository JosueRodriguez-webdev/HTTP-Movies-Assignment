import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Route, Link, useHistory } from "react-router-dom";
import UpdateMovie from "./UpdateMovie";

function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();

  let history = useHistory();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    history.push(`/update-movie/${movie.id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>

      <Link to={`/update-movie/${movie.id}`}>
        <button onClick={handleUpdate}>Update</button>
      </Link>

      <button
        onClick={() => {
          handleDelete(movie.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Movie;
