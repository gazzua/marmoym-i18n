interface Labels {
  '@ko': string;
  '@en': string;
}

export interface Root {
  [locale: string]: Labels
}