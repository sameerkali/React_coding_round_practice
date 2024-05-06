export interface HomeInterface {
  id?: number;
  name?: string;
  slug?: string;
  powerstats?: Powerstats;
  appearance?: Appearance;
  biography?: Biography;
  work?: Work;
  connections?: Connections;
  images?: Images;
}

export interface Appearance {
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[];
  eyeColor?: string;
  hairColor?: string;
}

export interface Biography {
  fullName?: string;
  alterEgos?: string;
  aliases?: string[];
  placeOfBirth?: string;
  firstAppearance?: string;
  publisher?: string;
  alignment?: string;
}

export interface Connections {
  groupAffiliation?: string;
  relatives?: string;
}

export interface Images {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
}

export interface Powerstats {
  intelligence?: number;
  strength?: number;
  speed?: number;
  durability?: number;
  power?: number;
  combat?: number;
}

export interface Work {
  occupation?: string;
  base?: string;
}
