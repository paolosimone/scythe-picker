import { Combination, Faction } from "@/domain";
import classNames from "classnames";

export type SelectionProps = Props<{
  combinations: Combination[];
}>;

export function Selection({ combinations }: SelectionProps): JSX.Element {
  return (
    <ul>
      {combinations.map((combination) => (
        <li key={combinationKey(combination)}>
          {CombinationCard({ combination })}
        </li>
      ))}
    </ul>
  );
}

export type CombinationCardProps = Props<{
  combination: Combination;
}>;

export function CombinationCard({
  combination,
}: CombinationCardProps): JSX.Element {
  return (
    <span className={classNames(FACTION_COLORS[combination.faction])}>
      {combinationKey(combination)} ({combination.tier})
    </span>
  );
}

function combinationKey(combination: Combination): string {
  return `${combination.faction}-${combination.playerMat}`;
}

const FACTION_COLORS: Record<Faction, Color> = {
  [Faction.Albion]: "bg-albion-500/40",
  [Faction.Crimea]: "bg-crimea-500/40",
  [Faction.Nordic]: "bg-nordic-500/40",
  [Faction.Polania]: "bg-polania-200/40",
  [Faction.Rusviet]: "bg-rusviet-500/40",
  [Faction.Saxony]: "bg-saxony-500/40",
  [Faction.Togawa]: "bg-togawa-500/40",
};
