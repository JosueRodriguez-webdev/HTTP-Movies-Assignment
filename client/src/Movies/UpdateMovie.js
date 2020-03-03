import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateMovie(props) {
  console.log(`propsin the update movie section`, props);

  let { id } = useParams();

  const [updateMovie, setUpdateMovie] = useState({
    id: id,
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  const [actors, setActors] = useState({
    actor1: "",
    actor2: "",
    actor3: ""
  });

  const handleChange = (e) => {
    setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value });
  };

  const handleChangeForActors = (e) => {
    setActors({ ...actors, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = Object.values(actors);
    setUpdateMovie({ stars: test });
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
        <label htmlFor="actor1">Actor 1</label>
        <input
          name="actor1"
          onChange={handleChangeForActors}
          value={actors.actor1}
        />
        <br />

        <label htmlFor="actor2">Actor 2</label>
        <input
          name="actor2"
          onChange={handleChangeForActors}
          value={actors.actor2}
        />
        <br />

        <label htmlFor="actor3">Actor 3</label>
        <input
          name="actor3"
          onChange={handleChangeForActors}
          value={actors.actor3}
        />
        <br />

        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
