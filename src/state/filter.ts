import { Faction, Tier } from "../domain";

export type FilterSelection = {
  playersCount: number;
  factions: Faction[];
  minTier: Tier;
  maxTier: Tier;
};

export const DEFAULT_FILTER_SELECTION: FilterSelection = {
  playersCount: 4,
  factions: [
    Faction.Crimea,
    Faction.Nordic,
    Faction.Polania,
    Faction.Rusviet,
    Faction.Saxony,
  ],
  minTier: Tier.F,
  maxTier: Tier.S,
};
