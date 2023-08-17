import React from "react";
import Image from "next/image";

interface Movie {
  Poster: string;
}

interface MovieListProps {
  movies: Movie[];
  favouriteComponent: React.FC;
  handleFavouritesClick: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={index}
        >
          <Image src={movie.Poster} alt="movie" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
