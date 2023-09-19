import React from 'react';
import useGenre from '../hooks/use-genres';

const GenreList = () => {
  const { genre, error, isLoading } = useGenre();
  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
