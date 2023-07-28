import {
  ActionSubGenres,
  ComedySubGenre,
  CrimeSubGenre,
  DramaSubGenre,
  FantasySubGenre,
  HistoricalSubGenre,
  HorrorSubGenre,
  RomanceSubGenre,
  ScienceFictionSubGenre,
  type SubGenreTypes,
  ThrillerSubGenre,
  WesternSubGenre,
} from "./subGenres";

export type GenreType = {
  id: GenresEnum;
  titleAr: string;
  titleEn: string;
  subGenres: SubGenreTypes[];
};

export enum GenresEnum {
  ACTION,
  ANIMATION,
  COMEDY,
  CRIME,
  DRAMA,
  FANTASY,
  HISTORICAL,
  HORROR,
  ROMANCE,
  SCIENCE_FICTION,
  THRILLER,
  WESTERN,
  OTHER,
}
export const GenresEnumArray = [
  GenresEnum.ACTION,
  GenresEnum.ANIMATION,
  GenresEnum.COMEDY,
  GenresEnum.CRIME,
  GenresEnum.DRAMA,
  GenresEnum.FANTASY,
  GenresEnum.HISTORICAL,
  GenresEnum.HORROR,
  GenresEnum.ROMANCE,
  GenresEnum.SCIENCE_FICTION,
  GenresEnum.THRILLER,
  GenresEnum.WESTERN,
  GenresEnum.OTHER,
];
export const GeneralGenres: GenreType[] = [
  {
    id: GenresEnum.ACTION,
    titleAr: "أكشن",
    titleEn: "Action",
    subGenres: ActionSubGenres,
  },
  {
    id: GenresEnum.ANIMATION,
    titleAr: "الرسوم المتحركة",
    titleEn: "Animation",
    subGenres: ActionSubGenres,
  },
  {
    id: GenresEnum.COMEDY,
    titleAr: "كوميديا",
    titleEn: "Comedy",
    subGenres: ComedySubGenre,
  },
  {
    id: GenresEnum.CRIME,
    titleAr: "جريمة",
    titleEn: "Crime",
    subGenres: CrimeSubGenre,
  },
  {
    id: GenresEnum.DRAMA,
    titleAr: "دراما",
    titleEn: "Drama",
    subGenres: DramaSubGenre,
  },
  {
    id: GenresEnum.FANTASY,
    titleAr: "خيال",
    titleEn: "Fantasy",
    subGenres: FantasySubGenre,
  },
  {
    id: GenresEnum.HISTORICAL,
    titleAr: "تاريخي",
    titleEn: "Historical",
    subGenres: HistoricalSubGenre,
  },
  {
    id: GenresEnum.HORROR,
    titleAr: "رعب",
    titleEn: "Horror",
    subGenres: HorrorSubGenre,
  },
  {
    id: GenresEnum.ROMANCE,
    titleAr: "رومانسي",
    titleEn: "Romance",
    subGenres: RomanceSubGenre,
  },
  {
    id: GenresEnum.SCIENCE_FICTION,
    titleAr: "خيال علمي",
    titleEn: "Science Fiction",
    subGenres: ScienceFictionSubGenre,
  },
  {
    id: GenresEnum.THRILLER,
    titleAr: "إثارة",
    titleEn: "Thriller",
    subGenres: ThrillerSubGenre,
  },
  {
    id: GenresEnum.WESTERN,
    titleAr: "غربي",
    titleEn: "Western",
    subGenres: WesternSubGenre,
  },
];

export const getGenre = (id: GenresEnum) => {
  const genre = GeneralGenres.find((i) => i.id === id);
  return genre as unknown as GenreType;
};
