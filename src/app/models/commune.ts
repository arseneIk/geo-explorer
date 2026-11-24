// Une commune : certains champs ne sont renvoyés que si on les demande (paramètre fields)
export interface Commune {
  code: string;
  nom: string;
  codesPostaux: string[];
  population: number;
}
