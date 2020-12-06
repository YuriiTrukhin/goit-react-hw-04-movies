import React from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ poster_path, id, title, release_date, genres, overview, popularity }) => {
  const img = "https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg";
  // eslint-disable-next-line no-lone-blocks
  {
    poster_path === null ? (poster_path = img) : (poster_path = `https://image.tmdb.org/t/p/w300${poster_path}`);
  }
  return (
    <div key={id} className={styles.card}>
      <img src={poster_path} className={styles.cardImg} />
      <h1 className={styles.title}>
        {title}(<span>{(release_date = new Date(release_date).getFullYear())}</span>)
      </h1>
      <h2>Popularity: {popularity}</h2>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres &&
          genres.map((e) => (
            <li key={e.id}>
              <p>{e.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

Card.propTypes = {
  poster_path: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Card;
