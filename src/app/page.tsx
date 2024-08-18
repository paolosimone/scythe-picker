import { Selection } from "@/components";
import { Combination, ALL_COMBINATIONS } from "@/domain";
import { useMemo } from "react";

export default function Home() {
  let selections = useMemo(() => enumerateSelections(ALL_COMBINATIONS, 4), []);
  let selected = useMemo(
    () => (selections.length ? randomChoice(selections) : []),
    [selections],
  );
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="py-3 font-bold text-3xl">Scythe Picker</h1>
      <span>Combinations found: {selections.length}</span>
      <Selection combinations={selected} />
    </main>
  );
}

function enumerateSelections(
  combinations: Combination[],
  playerCount: number,
): Combination[][] {
  let found: Combination[][] = [];

  function enumerateRecursive(
    selection: Combination[],
    available: Combination[],
  ) {
    if (selection.length == playerCount) {
      found.push(selection);
      return;
    }

    for (const [i, combination] of available.entries()) {
      const newSelection = [...selection, combination];
      const newAvailable = available
        .slice(i + 1)
        .filter(
          (c) =>
            c.faction != combination.faction &&
            c.playerMat != combination.playerMat,
        );
      enumerateRecursive(newSelection, newAvailable);
    }
  }

  enumerateRecursive([], combinations);
  return found;
}

function randomChoice<T>(list: T[]): T {
  return list[randomInt(list.length)];
}

function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
