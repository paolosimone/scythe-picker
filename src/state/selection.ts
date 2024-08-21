import { Combination } from "@/domain";

export type Selection = Combination[];

export function enumerateSelections(
  combinations: Combination[],
  playerCount: number,
): Selection[] {
  let found: Selection[] = [];

  function enumerateRecursive(selection: Selection, available: Combination[]) {
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

export function randomChoice<T>(list: T[]): T {
  return list[randomInt(list.length)];
}

export function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
