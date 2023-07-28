export type SubGenreType = {
  titleAr: string;
  titleEn: string;
};
export type ActionSubGenresType = {
  id: ActionSubGenreEnum;
} & SubGenreType;
export type CrimeSubGenreType = {
  id: CrimeSubGenreEnum;
} & SubGenreType;
export type DramaSubGenreType = {
  id: DramaSubGenreEnum;
} & SubGenreType;
export type FantasySubGenreType = {
  id: FantasySubGenreEnum;
} & SubGenreType;
export type HistoricalSubGenreType = {
  id: HistoricalSubGenreEnum;
} & SubGenreType;
export type RomanceSubGenreType = {
  id: RomanceSubGenreEnum;
} & SubGenreType;
export type ScienceFictionSubGenreType = {
  id: ScienceFictionSubGenreEnum;
} & SubGenreType;
export type ThrillerSubGenreType = {
  id: ThrillerSubGenreEnum;
} & SubGenreType;
export type WesternSubGenreType = {
  id: WesternSubGenreEnum;
} & SubGenreType;
export type ComedySubGenreType = {
  id: ComedySubGenreEnum;
} & SubGenreType;
export type HorrorSubGenreType = {
  id: HorrorSubGenreEnum;
} & SubGenreType;

export type SubGenreTypes =
  | ActionSubGenresType
  | CrimeSubGenreType
  | DramaSubGenreType
  | FantasySubGenreType
  | HistoricalSubGenreType
  | RomanceSubGenreType
  | ScienceFictionSubGenreType
  | ThrillerSubGenreType
  | WesternSubGenreType
  | ComedySubGenreType
  | HorrorSubGenreType;

// Enums represent an ID
export enum ActionSubGenreEnum {
  HeroicBloodshed,
  MilitaryAction,
  Espionage,
  WuxiaAction,
  Disaster,
  Adventure,
  Superhero,
}
export enum CrimeSubGenreEnum {
  Caper,
  Heist,
  Gangster,
  CopPolice,
  Detective,
  Courtroom,
  Procedural,
}
export enum DramaSubGenreEnum {
  Melodrama,
  TeenDrama,
  PhilosophicalDrama,
  MedicalDrama,
  LegalDrama,
  PoliticalDrama,
  AnthropologicalDrama,
  ReligiousDrama,
  Docudrama,
}
export enum FantasySubGenreEnum {
  ContemporaryFantasy,
  UrbanFantasy,
  DarkFantasy,
  HighFantasy,
  Myth,
}
export enum HistoricalSubGenreEnum {
  HistoricalEvent,
  Biography,
  HistoricalEpic,
  HistoricalFiction,
  PeriodPiece,
  AlternateHistory,
}
export enum HorrorSubGenreEnum {
  Ghost,
  Monster,
  Werewolf,
  Vampire,
  Occult,
  Slasher,
  Splatter,
  FoundFootage,
  Zombie,
}
export enum RomanceSubGenreEnum {
  RomanceDrama,
  RomanceThriller,
  PeriodRomance,
}
export enum ScienceFictionSubGenreEnum {
  PostApocalyptic,
  Utopian,
  Dystopian,
  Cyberpunk,
  Steampunk,
  TechNoir,
  SpaceOpera,
  Contemporary,
  Military,
}
export enum ThrillerSubGenreEnum {
  Psychological,
  Mystery,
  Techno,
  FilmNoir,
}
export enum WesternSubGenreEnum {
  EpicWestern,
  EmpireWestern,
  MarshalWestern,
  OutlawWestern,
  RevengeWestern,
  RevisionistWestern,
  SpaghettiWestern,
}
export enum ComedySubGenreEnum {
  ActionComedy,
  DarkComedyBlackComedy,
  RomanticComedy,
  BuddyComedy,
  RoadComedy,
  SlapstickComedy,
  Parody,
  Spoof,
  Satire,
  Sitcom,
  SketchComedy,
  Mockumentary,
  Prank,
}

// Constants
export const ActionSubGenres: ActionSubGenresType[] = [
  {
    id: ActionSubGenreEnum.HeroicBloodshed,
    titleAr: "دماء شجاعة",
    titleEn: "Heroic Bloodshed",
  },
  {
    id: ActionSubGenreEnum.MilitaryAction,
    titleAr: "عمل عسكري",
    titleEn: "Military Action",
  },
  {
    id: ActionSubGenreEnum.Espionage,
    titleAr: "تجسس",
    titleEn: "Espionage",
  },
  {
    id: ActionSubGenreEnum.WuxiaAction,
    titleAr: "عمل ووشيا",
    titleEn: "Wuxia Action",
  },
  {
    id: ActionSubGenreEnum.Disaster,
    titleAr: "كارثة",
    titleEn: "Disaster",
  },
  {
    id: ActionSubGenreEnum.Adventure,
    titleAr: "مغامرة",
    titleEn: "Adventure",
  },
  {
    id: ActionSubGenreEnum.Superhero,
    titleAr: "بطل خارق",
    titleEn: "Superhero",
  },
];

export const CrimeSubGenre: CrimeSubGenreType[] = [
  {
    id: CrimeSubGenreEnum.Caper,
    titleAr: "سرقة محكمة",
    titleEn: "Caper",
  },
  {
    id: CrimeSubGenreEnum.Heist,
    titleAr: "سرقة",
    titleEn: "Heist",
  },
  {
    id: CrimeSubGenreEnum.Gangster,
    titleAr: "عصابات",
    titleEn: "Gangster",
  },
  {
    id: CrimeSubGenreEnum.CopPolice,
    titleAr: "شرطة",
    titleEn: "Cop/Police",
  },
  {
    id: CrimeSubGenreEnum.Detective,
    titleAr: "تحقيقات",
    titleEn: "Detective",
  },
  {
    id: CrimeSubGenreEnum.Courtroom,
    titleAr: "قاعة المحكمة",
    titleEn: "Courtroom",
  },
  {
    id: CrimeSubGenreEnum.Procedural,
    titleAr: "إجراءات",
    titleEn: "Procedural",
  },
];

export const DramaSubGenre: DramaSubGenreType[] = [
  {
    id: DramaSubGenreEnum.Melodrama,
    titleAr: "ميلودراما",
    titleEn: "Melodrama",
  },
  {
    id: DramaSubGenreEnum.TeenDrama,
    titleAr: "دراما المراهقين",
    titleEn: "Teen Drama",
  },
  {
    id: DramaSubGenreEnum.PhilosophicalDrama,
    titleAr: "دراما فلسفية",
    titleEn: "Philosophical Drama",
  },
  {
    id: DramaSubGenreEnum.MedicalDrama,
    titleAr: "دراما طبية",
    titleEn: "Medical Drama",
  },
  {
    id: DramaSubGenreEnum.LegalDrama,
    titleAr: "دراما قانونية",
    titleEn: "Legal Drama",
  },
  {
    id: DramaSubGenreEnum.PoliticalDrama,
    titleAr: "دراما سياسية",
    titleEn: "Political Drama",
  },
  {
    id: DramaSubGenreEnum.AnthropologicalDrama,
    titleAr: "دراما أنثروبولوجية",
    titleEn: "Anthropological Drama",
  },
  {
    id: DramaSubGenreEnum.ReligiousDrama,
    titleAr: "دراما دينية",
    titleEn: "Religious Drama",
  },
  {
    id: DramaSubGenreEnum.Docudrama,
    titleAr: "دراما وثائقية",
    titleEn: "Docudrama",
  },
];

export const FantasySubGenre: FantasySubGenreType[] = [
  {
    id: FantasySubGenreEnum.ContemporaryFantasy,
    titleAr: "خيال معاصر",
    titleEn: "Contemporary Fantasy",
  },
  {
    id: FantasySubGenreEnum.UrbanFantasy,
    titleAr: "خيال حضري",
    titleEn: "Urban Fantasy",
  },
  {
    id: FantasySubGenreEnum.DarkFantasy,
    titleAr: "خيال مظلم",
    titleEn: "Dark Fantasy",
  },
  {
    id: FantasySubGenreEnum.HighFantasy,
    titleAr: "خيال عالي",
    titleEn: "High Fantasy",
  },
  {
    id: FantasySubGenreEnum.Myth,
    titleAr: "أسطورة",
    titleEn: "Myth",
  },
];

export const HistoricalSubGenre: HistoricalSubGenreType[] = [
  {
    id: HistoricalSubGenreEnum.HistoricalEvent,
    titleAr: "حدث تاريخي",
    titleEn: "Historical Event",
  },
  {
    id: HistoricalSubGenreEnum.Biography,
    titleAr: "سيرة ذاتية",
    titleEn: "Biography",
  },
  {
    id: HistoricalSubGenreEnum.HistoricalEpic,
    titleAr: "ملحمة تاريخية",
    titleEn: "Historical Epic",
  },
  {
    id: HistoricalSubGenreEnum.HistoricalFiction,
    titleAr: "خيال تاريخي",
    titleEn: "Historical Fiction",
  },
  {
    id: HistoricalSubGenreEnum.PeriodPiece,
    titleAr: "فترة تاريخية",
    titleEn: "Period Piece",
  },
  {
    id: HistoricalSubGenreEnum.AlternateHistory,
    titleAr: "تاريخ بديل",
    titleEn: "Alternate History",
  },
];

export const HorrorSubGenre: HorrorSubGenreType[] = [
  {
    id: HorrorSubGenreEnum.Ghost,
    titleAr: "شبح",
    titleEn: "Ghost",
  },
  {
    id: HorrorSubGenreEnum.Monster,
    titleAr: "وحش",
    titleEn: "Monster",
  },
  {
    id: HorrorSubGenreEnum.Werewolf,
    titleAr: "مستذئب",
    titleEn: "Werewolf",
  },
  {
    id: HorrorSubGenreEnum.Vampire,
    titleAr: "مصاص دماء",
    titleEn: "Vampire",
  },
  {
    id: HorrorSubGenreEnum.Occult,
    titleAr: "خوارق",
    titleEn: "Occult",
  },
  {
    id: HorrorSubGenreEnum.Slasher,
    titleAr: "القاتل الوحش",
    titleEn: "Slasher",
  },
  {
    id: HorrorSubGenreEnum.Splatter,
    titleAr: "الانتشار الدموي",
    titleEn: "Splatter",
  },
  {
    id: HorrorSubGenreEnum.FoundFootage,
    titleAr: "لقطات مصورة",
    titleEn: "Found Footage",
  },
  {
    id: HorrorSubGenreEnum.Zombie,
    titleAr: "زومبي",
    titleEn: "Zombie",
  },
];

export const RomanceSubGenre: RomanceSubGenreType[] = [
  {
    id: RomanceSubGenreEnum.RomanceDrama,
    titleAr: "دراما رومانسية",
    titleEn: "Romance Drama",
  },
  {
    id: RomanceSubGenreEnum.RomanceThriller,
    titleAr: "رومانسية إثارة",
    titleEn: "Romance Thriller",
  },
  {
    id: RomanceSubGenreEnum.PeriodRomance,
    titleAr: "رومانسية تاريخية",
    titleEn: "Period Romance",
  },
];

export const ScienceFictionSubGenre: ScienceFictionSubGenreType[] = [
  {
    id: ScienceFictionSubGenreEnum.PostApocalyptic,
    titleAr: "ما بعد الكارثة",
    titleEn: "Post-Apocalyptic",
  },
  {
    id: ScienceFictionSubGenreEnum.Utopian,
    titleAr: "مثالية",
    titleEn: "Utopian",
  },
  {
    id: ScienceFictionSubGenreEnum.Dystopian,
    titleAr: "ديستوبيا",
    titleEn: "Dystopian",
  },
  {
    id: ScienceFictionSubGenreEnum.Cyberpunk,
    titleAr: "سايبربانك",
    titleEn: "Cyberpunk",
  },
  {
    id: ScienceFictionSubGenreEnum.Steampunk,
    titleAr: "ستيمبانك",
    titleEn: "Steampunk",
  },
  {
    id: ScienceFictionSubGenreEnum.TechNoir,
    titleAr: "تك نوار",
    titleEn: "Tech Noir",
  },
  {
    id: ScienceFictionSubGenreEnum.SpaceOpera,
    titleAr: "أوبرا الفضاء",
    titleEn: "Space Opera",
  },
  {
    id: ScienceFictionSubGenreEnum.Contemporary,
    titleAr: "عصري",
    titleEn: "Contemporary",
  },
  {
    id: ScienceFictionSubGenreEnum.Military,
    titleAr: "عسكري",
    titleEn: "Military",
  },
];

export const ThrillerSubGenre: ThrillerSubGenreType[] = [
  {
    id: ThrillerSubGenreEnum.Psychological,
    titleAr: "نفسي",
    titleEn: "Psychological",
  },
  {
    id: ThrillerSubGenreEnum.Mystery,
    titleAr: "غموض",
    titleEn: "Mystery",
  },
  {
    id: ThrillerSubGenreEnum.Techno,
    titleAr: "تكنو",
    titleEn: "Techno",
  },
  {
    id: ThrillerSubGenreEnum.FilmNoir,
    titleAr: "فيلم نوار",
    titleEn: "Film Noir",
  },
];

export const WesternSubGenre: WesternSubGenreType[] = [
  {
    id: WesternSubGenreEnum.EpicWestern,
    titleAr: "غربي ملحمي",
    titleEn: "Epic Western",
  },
  {
    id: WesternSubGenreEnum.EmpireWestern,
    titleAr: "غربي إمبراطوري",
    titleEn: "Empire Western",
  },
  {
    id: WesternSubGenreEnum.MarshalWestern,
    titleAr: "غربي مارشال",
    titleEn: "Marshal Western",
  },
  {
    id: WesternSubGenreEnum.OutlawWestern,
    titleAr: "غربي مجرم",
    titleEn: "Outlaw Western",
  },
  {
    id: WesternSubGenreEnum.RevengeWestern,
    titleAr: "غربي انتقامي",
    titleEn: "Revenge Western",
  },
  {
    id: WesternSubGenreEnum.RevisionistWestern,
    titleAr: "غربي مراجع",
    titleEn: "Revisionist Western",
  },
  {
    id: WesternSubGenreEnum.SpaghettiWestern,
    titleAr: "غربي السباغيتي",
    titleEn: "Spaghetti Western",
  },
];

export const ComedySubGenre: ComedySubGenreType[] = [
  {
    id: ComedySubGenreEnum.ActionComedy,
    titleAr: "كوميديا الحركة",
    titleEn: "Action Comedy",
  },
  {
    id: ComedySubGenreEnum.DarkComedyBlackComedy,
    titleAr: "كوميديا سوداء",
    titleEn: "Dark Comedy / Black Comedy",
  },
  {
    id: ComedySubGenreEnum.RomanticComedy,
    titleAr: "كوميديا رومانسية",
    titleEn: "Romantic Comedy",
  },
  {
    id: ComedySubGenreEnum.BuddyComedy,
    titleAr: "كوميديا الأصدقاء",
    titleEn: "Buddy Comedy",
  },
  {
    id: ComedySubGenreEnum.RoadComedy,
    titleAr: "كوميديا الطريق",
    titleEn: "Road Comedy",
  },
  {
    id: ComedySubGenreEnum.SlapstickComedy,
    titleAr: "كوميديا سلاپ‌ستيك",
    titleEn: "Slapstick Comedy",
  },
  {
    id: ComedySubGenreEnum.Parody,
    titleAr: "كوميديا ساخرة",
    titleEn: "Parody",
  },
  {
    id: ComedySubGenreEnum.Spoof,
    titleAr: "سخرية كوميدية",
    titleEn: "Spoof",
  },
  {
    id: ComedySubGenreEnum.Satire,
    titleAr: "كوميديا ساخرة",
    titleEn: "Satire",
  },
  {
    id: ComedySubGenreEnum.Sitcom,
    titleAr: "مسلسل كوميدي",
    titleEn: "Sitcom",
  },
  {
    id: ComedySubGenreEnum.SketchComedy,
    titleAr: "كوميديا السكتش",
    titleEn: "Sketch Comedy",
  },
  {
    id: ComedySubGenreEnum.Mockumentary,
    titleAr: "موكيومنتري (وثائقي مزحة)",
    titleEn: "Mockumentary",
  },
  {
    id: ComedySubGenreEnum.Prank,
    titleAr: "كوميديا المقالب",
    titleEn: "Prank",
  },
];
