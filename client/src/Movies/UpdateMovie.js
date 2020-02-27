import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateMovie(props) {
  console.log(`propsin the update movie section`, props);

  let { id } = useParams();
  const [stars, setStars] = useState([]);
  const [updateMovie, setUpdateMovie] = useState({
    id: id,
    title: "",
    director: "",
    metascore: ""
  });

  console.log(updateMovie);

  const handleChange = (e) => {
    setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, updateMovie)
      .then((res) => {
        // console.log(`in the put console log`, res);
        props.setMovieList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input name="title" onChange={handleChange} value={updateMovie.title} />
        <br />

        <label htmlFor="director">director</label>
        <input
          name="director"
          onChange={handleChange}
          value={updateMovie.director}
        />
        <br />

        <label htmlFor="metascore">metascore</label>
        <input
          name="metascore"
          onChange={handleChange}
          value={updateMovie.metascore}
        />
        <br />

        {/* form for the actors */}
        <label htmlFor="stars">Actor 1</label>
        <input name="stars" onChange={handleChange} value={updateMovie.stars} />
        <br />

        <label htmlFor="stars">Actor 2</label>
        <input name="stars" onChange={handleChange} value={updateMovie.stars} />
        <br />

        <label htmlFor="stars">Actor 3</label>
        <input name="stars" onChange={handleChange} value={updateMovie.stars} />
        <br />

        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
