import { maximumPlayersCount } from "@/domain";
import { SelectionFilter } from "@/state/filter";
import { Dispatch, FormEvent } from "react";
import { PlayerCountSlider } from "./PlayerCountSlider";
import { TierRangeSlider, TierRange } from "./TierRangeSlider";

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
  const setNumberOfPlayers = (playersCount: number) => {
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

  const setTierRange = ({ from, to }: TierRange) => {
    updateFilter((filter) => ({
      ...filter,
      minTier: from,
      maxTier: to,
    }));
  };

  return (
    <div>
      <div>
        <label>Number of players</label>
        <PlayerCountSlider
          value={filter.playersCount}
          maxValue={maximumPlayersCount(filter.invadersFromAfarEnabled)}
          onChange={setNumberOfPlayers}
        />
      </div>

      <div>
        <label>Invaders From Afar</label>
        <input
          type="checkbox"
          onChange={setInvadersFromAfar}
          checked={filter.invadersFromAfarEnabled}
        />
      </div>

      <div>
        <label>Tier Range</label>
        <TierRangeSlider
          range={{ from: filter.minTier, to: filter.maxTier }}
          onChange={setTierRange}
        />
      </div>
    </div>
  );
}
