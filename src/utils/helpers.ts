import {
  GeneralGenres,
  type GenresEnum,
  type GenreType,
} from "./constants/genres";
import { type SubGenreTypes } from "./constants/subGenres";

export const convertGenreToOptions = (
  genres: GenreType[] | SubGenreTypes[]
) => {
  const options = genres.map((genre) => ({
    name: genre.titleAr + " | " + genre.titleEn,
    value: genre.id,
  }));
  return options;
};

export const getSubGenres = (id: GenresEnum) => {
  const subGenre = GeneralGenres.find((i) => i.id === id)?.subGenres;
  if (subGenre) return convertGenreToOptions(subGenre);
  return [];
};
