import { Combination, Faction, Tier } from "@/domain";
import classNames from "classnames";

export type CombinationCardProps = Props<{
  combination: Combination;
}>;

export function CombinationCard({
  combination,
}: CombinationCardProps): JSX.Element {
  return (
    <div
      className={classNames(
        "py-1 px-8 rounded grid gap-8",
        FACTION_COLORS[combination.faction],
      )}
      style={{ gridTemplateColumns: "8fr 4fr" }}
    >
      <div className="flex flex-col justify-center items-start">
        <span>{combination.faction}</span>
        <span>{combination.playerMat}</span>
      </div>

      <div className="flex flex-col justify-center items-end">
        Tier {Tier[combination.tier]}
      </div>
    </div>
  );
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
