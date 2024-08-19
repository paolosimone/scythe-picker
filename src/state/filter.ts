import {
  ALL_FACTIONS,
  ALL_PLAYER_MATS,
  Combination,
  Tier,
  VANILLA_FACTIONS,
  VANILLA_PLAYER_MATS,
} from "@/domain";

export type SelectionFilter = {
  playersCount: number;
  invadersFromAfarEnabled: boolean;
  minTier: Tier;
  maxTier: Tier;
};

export const DEFAULT_SELECTION_FILTER: SelectionFilter = {
  playersCount: 5,
  invadersFromAfarEnabled: false,
  minTier: Tier.F,
  maxTier: Tier.S,
};

export function applyFilter(
  filter: SelectionFilter,
  combinations: Combination[],
): Combination[] {
  const factions = filter.invadersFromAfarEnabled
    ? ALL_FACTIONS
    : VANILLA_FACTIONS;
  const playerMats = filter.invadersFromAfarEnabled
    ? ALL_PLAYER_MATS
    : VANILLA_PLAYER_MATS;

  return combinations
    .filter((c) => factions.includes(c.faction))
    .filter((c) => playerMats.includes(c.playerMat))
    .filter((c) => filter.minTier <= c.tier && c.tier <= filter.maxTier);
}
