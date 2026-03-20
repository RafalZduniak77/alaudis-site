//
//  types.ts
//  
//
//  Created by Rafal Zduniak on 19/03/2026.
//
export type ConfigTab = "obudowa" | "akustyka" | "mechanizm";

export type SelectedState = {
  obudowa: string;
  akustyka: Record<string, string>;
  mechanizm: Record<string, string>;
};

export type OptionsMap = {
  obudowa: string[];
  akustyka: string[];
  mechanizm: string[];
};
