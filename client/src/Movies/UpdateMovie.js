import React, { useState } from "react";

function UpdateMovie() {
  const [updateMovie, setUpdateMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  console.log(updateMovie);

  const handleChange = (e) => {
    setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value });
  };

  //make handle submit

  return (
    <div>
      <form>
        <label htmlFor="title">title</label>
        <input name="title" onChange={handleChange} value={updateMovie.title} />

        <label htmlFor="director">director</label>
        <input
          name="director"
          onChange={handleChange}
          value={updateMovie.director}
        />

        <label htmlFor="metascore">metascore</label>
        <input
          name="metascore"
          onChange={handleChange}
          value={updateMovie.metascore}
        />

        <label htmlFor="stars">star</label>
        <input name="stars" onChange={handleChange} value={updateMovie.stars} />

        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
