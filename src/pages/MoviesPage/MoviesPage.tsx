import React, { useMemo } from "react";
import { generateBEMClassName } from "bem-classnames-generator/dist";
import useAppStore from "../../store/store.ts";
import DisplayItem from "../../components/DisplayItem/DisplayItem.tsx";

interface IMoviesPage {}

const MoviesPage: React.FC<IMoviesPage> = () => {
  const BEMBlock = "movies-page";

  const { movies, query } = useAppStore();

  const filteredMovies = useMemo(() => {
    return movies?.filter((movie) => {
      return movie?.title?.toLowerCase().includes(query.toLowerCase());
    });
  }, [movies, query]);

  return (
    <div className={generateBEMClassName({ block: BEMBlock })}>
      {filteredMovies?.map((movie) => (
        <DisplayItem key={movie?.id} item={movie} />
      ))}
    </div>
  );
};

export default MoviesPage;
