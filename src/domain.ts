export enum Faction {
  Albion = "Albion",
  Crimea = "Crimea",
  Nordic = "Nordic",
  Polania = "Polania",
  Rusviet = "Rusviet",
  Saxony = "Saxony",
  Togawa = "Togawa",
}

export const VANILLA_FACTIONS = [
  Faction.Crimea,
  Faction.Nordic,
  Faction.Polania,
  Faction.Rusviet,
  Faction.Saxony,
];

export const INVADERS_FROM_AFAR_FACTIONS = [Faction.Albion, Faction.Togawa];

export const ALL_FACTIONS = [
  ...VANILLA_FACTIONS,
  ...INVADERS_FROM_AFAR_FACTIONS,
];

export function maximumPlayersCount(invadersFromAfarEnabled: boolean): number {
  return invadersFromAfarEnabled
    ? ALL_FACTIONS.length
    : VANILLA_FACTIONS.length;
}

export enum PlayerMat {
  Agricultural = "Agricultural",
  Engineering = "Engineering",
  Industrial = "Industrial",
  Innovative = "Innovative",
  Mechanical = "Mechanical",
  Militant = "Militant",
  Patriotic = "Patriotic",
}

export const VANILLA_PLAYER_MATS = [
  PlayerMat.Agricultural,
  PlayerMat.Engineering,
  PlayerMat.Industrial,
  PlayerMat.Mechanical,
  PlayerMat.Patriotic,
];

export const INVADERS_FROM_PLAYER_MATS = [
  PlayerMat.Innovative,
  PlayerMat.Militant,
];

export const ALL_PLAYER_MATS = [
  ...VANILLA_PLAYER_MATS,
  ...INVADERS_FROM_PLAYER_MATS,
];

export enum Tier {
  F,
  D,
  C,
  B,
  A,
  S,
  SS,
}

export const TIERS = Object.values(Tier).filter((x) => typeof x === "number");

export type Combination = {
  faction: Faction;
  playerMat: PlayerMat;
  tier: Tier;
};

export const ALL_COMBINATIONS: Combination[] = [
  // SS
  { faction: Faction.Crimea, playerMat: PlayerMat.Patriotic, tier: Tier.SS },
  { faction: Faction.Crimea, playerMat: PlayerMat.Militant, tier: Tier.SS },
  { faction: Faction.Crimea, playerMat: PlayerMat.Innovative, tier: Tier.SS },
  { faction: Faction.Rusviet, playerMat: PlayerMat.Militant, tier: Tier.SS },
  { faction: Faction.Rusviet, playerMat: PlayerMat.Innovative, tier: Tier.SS },
  // S
  { faction: Faction.Rusviet, playerMat: PlayerMat.Industrial, tier: Tier.S },
  { faction: Faction.Crimea, playerMat: PlayerMat.Engineering, tier: Tier.S },
  { faction: Faction.Rusviet, playerMat: PlayerMat.Patriotic, tier: Tier.S },
  { faction: Faction.Crimea, playerMat: PlayerMat.Mechanical, tier: Tier.S },
  { faction: Faction.Rusviet, playerMat: PlayerMat.Mechanical, tier: Tier.S },
  { faction: Faction.Polania, playerMat: PlayerMat.Innovative, tier: Tier.S },
  // A
  { faction: Faction.Crimea, playerMat: PlayerMat.Industrial, tier: Tier.A },
  { faction: Faction.Saxony, playerMat: PlayerMat.Industrial, tier: Tier.A },
  { faction: Faction.Rusviet, playerMat: PlayerMat.Engineering, tier: Tier.A },
  { faction: Faction.Polania, playerMat: PlayerMat.Mechanical, tier: Tier.A },
  { faction: Faction.Crimea, playerMat: PlayerMat.Agricultural, tier: Tier.A },
  { faction: Faction.Rusviet, playerMat: PlayerMat.Agricultural, tier: Tier.A },
  { faction: Faction.Saxony, playerMat: PlayerMat.Innovative, tier: Tier.A },
  // B
  { faction: Faction.Polania, playerMat: PlayerMat.Industrial, tier: Tier.B },
  { faction: Faction.Nordic, playerMat: PlayerMat.Engineering, tier: Tier.B },
  { faction: Faction.Togawa, playerMat: PlayerMat.Engineering, tier: Tier.B },
  { faction: Faction.Polania, playerMat: PlayerMat.Patriotic, tier: Tier.B },
  { faction: Faction.Saxony, playerMat: PlayerMat.Patriotic, tier: Tier.B },
  { faction: Faction.Nordic, playerMat: PlayerMat.Mechanical, tier: Tier.B },
  { faction: Faction.Saxony, playerMat: PlayerMat.Mechanical, tier: Tier.B },
  { faction: Faction.Polania, playerMat: PlayerMat.Agricultural, tier: Tier.B },
  { faction: Faction.Togawa, playerMat: PlayerMat.Agricultural, tier: Tier.B },
  { faction: Faction.Polania, playerMat: PlayerMat.Militant, tier: Tier.B },
  { faction: Faction.Albion, playerMat: PlayerMat.Militant, tier: Tier.B },
  { faction: Faction.Saxony, playerMat: PlayerMat.Militant, tier: Tier.B },
  { faction: Faction.Nordic, playerMat: PlayerMat.Innovative, tier: Tier.B },
  { faction: Faction.Togawa, playerMat: PlayerMat.Innovative, tier: Tier.B },
  // C
  { faction: Faction.Polania, playerMat: PlayerMat.Engineering, tier: Tier.C },
  { faction: Faction.Albion, playerMat: PlayerMat.Patriotic, tier: Tier.C },
  { faction: Faction.Nordic, playerMat: PlayerMat.Patriotic, tier: Tier.C },
  { faction: Faction.Togawa, playerMat: PlayerMat.Patriotic, tier: Tier.C },
  { faction: Faction.Albion, playerMat: PlayerMat.Agricultural, tier: Tier.C },
  { faction: Faction.Nordic, playerMat: PlayerMat.Agricultural, tier: Tier.C },
  { faction: Faction.Nordic, playerMat: PlayerMat.Militant, tier: Tier.C },
  { faction: Faction.Togawa, playerMat: PlayerMat.Militant, tier: Tier.C },
  { faction: Faction.Albion, playerMat: PlayerMat.Innovative, tier: Tier.C },
  // D
  { faction: Faction.Nordic, playerMat: PlayerMat.Industrial, tier: Tier.D },
  { faction: Faction.Albion, playerMat: PlayerMat.Engineering, tier: Tier.D },
  { faction: Faction.Albion, playerMat: PlayerMat.Mechanical, tier: Tier.D },
  { faction: Faction.Togawa, playerMat: PlayerMat.Mechanical, tier: Tier.D },
  { faction: Faction.Saxony, playerMat: PlayerMat.Agricultural, tier: Tier.D },
  // F
  { faction: Faction.Albion, playerMat: PlayerMat.Industrial, tier: Tier.F },
  { faction: Faction.Togawa, playerMat: PlayerMat.Industrial, tier: Tier.F },
  { faction: Faction.Saxony, playerMat: PlayerMat.Engineering, tier: Tier.F },
];
