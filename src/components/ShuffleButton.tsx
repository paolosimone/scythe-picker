import { randomChoice, Selection } from "@/state/selection";
import classNames from "classnames";
import { Dispatch } from "react";

export type ShuffleButtonProps = Props<{
  selections: Selection[];
  setSelection: Dispatch<Selection>;
}>;

export function ShuffleButton({
  selections,
  setSelection,
  className,
}: ShuffleButtonProps): JSX.Element {
  const canShuffle = selections.length > 0;

  const shuffle = () => {
    if (canShuffle) {
      setSelection(randomChoice(selections));
    }
  };

  return (
    <button
      disabled={!canShuffle}
      className={classNames(className, "border rounded-lg py-0.5 px-5", {
        "bg-teal-500/60": canShuffle,
        "bg-gray-400/60": !canShuffle,
        "line-through": !canShuffle,
      })}
      onClick={shuffle}
    >
      Shuffle
    </button>
  );
}
