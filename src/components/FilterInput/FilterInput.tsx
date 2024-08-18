import { maximumPlayersCount } from "@/domain";
import { SelectionFilter } from "@/state/filter";
import { Dispatch, FormEvent } from "react";

export type UpdateFilterAction = (
  prevFilter: SelectionFilter,
) => SelectionFilter;

export type FilterInputProps = Props<{
  filter: SelectionFilter;
  updateFilter: Dispatch<UpdateFilterAction>;
}>;

export function FilterInput({
  filter,
  updateFilter,
}: FilterInputProps): JSX.Element {
  const setNumberOfPlayers = (e: FormEvent<HTMLInputElement>) => {
    let playersCount = Number((e.target as HTMLInputElement).value);
    updateFilter((filter) => ({ ...filter, playersCount }));
  };

  const setInvadersFromAfar = (e: FormEvent<HTMLInputElement>) => {
    const invadersFromAfarEnabled = (e.target as HTMLInputElement).checked;
    updateFilter((filter) => ({
      ...filter,
      invadersFromAfarEnabled,
      playersCount: Math.min(
        filter.playersCount,
        maximumPlayersCount(invadersFromAfarEnabled),
      ),
    }));
  };

  return (
    <div>
      <div>
        <label>Number of players</label>
        <input
          type="range"
          min={2}
          max={maximumPlayersCount(filter.invadersFromAfarEnabled)}
          value={filter.playersCount}
          onChange={setNumberOfPlayers}
        />
        <span>{filter.playersCount}</span>
      </div>

      <div>
        <label>Invaders From Afar</label>
        <input
          type="checkbox"
          onChange={setInvadersFromAfar}
          checked={filter.invadersFromAfarEnabled}
        />
      </div>
    </div>
  );
}
