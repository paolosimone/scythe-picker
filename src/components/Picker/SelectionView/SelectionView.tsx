import { Selection } from "@/state/selection";
import classNames from "classnames";
import { CombinationCard } from "./CombinationCard";
import { Combination } from "@/domain";

export type SelectionViewProps = Props<{
  selection: Selection;
}>;

export function SelectionView({
  selection,
  className,
}: SelectionViewProps): JSX.Element {
  return (
    <div
      className={classNames(className, "grid grid-cols-1 content-start gap-1")}
    >
      {selection.map((combination) => (
        <div key={combinationKey(combination)}>
          <CombinationCard combination={combination} />
        </div>
      ))}
    </div>
  );
}

function combinationKey(combination: Combination): string {
  return `${combination.faction}-${combination.playerMat}`;
}
