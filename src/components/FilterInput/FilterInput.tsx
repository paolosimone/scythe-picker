import { maximumPlayersCount } from "@/domain";
import { SelectionFilter } from "@/state/filter";
import { Dispatch, FormEvent } from "react";
import { PlayerCountSlider } from "./PlayerCountSlider";
import { TierRangeSlider, TierRange } from "./TierRangeSlider";
import classNames from "classnames";

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
  className,
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
    <div className={classNames(className, "flex flex-col items-stretch")}>
      <div className="flex items-center self-center">
        <label className="mr-2">Invaders From Afar</label>
        <input
          type="checkbox"
          onChange={setInvadersFromAfar}
          checked={filter.invadersFromAfarEnabled}
        />
      </div>

      <div
        className="grid gap-x-1 mt-2"
        style={{ gridTemplateColumns: "1fr 11fr" }}
      >
        <label className="justify-self-center">Players</label>
        <PlayerCountSlider
          value={filter.playersCount}
          maxValue={maximumPlayersCount(filter.invadersFromAfarEnabled)}
          onChange={setNumberOfPlayers}
        />

        <div className="justify-self-center flex flex-col items-center">
          <label>Tiers</label>
          <a
            className="text-blue-800 underline"
            href="https://i.imgur.com/8jCQYnt.jpeg"
            target="_blank"
            rel="noreferrer"
          >
            [?]
          </a>
        </div>
        <TierRangeSlider
          range={{ from: filter.minTier, to: filter.maxTier }}
          onChange={setTierRange}
        />
      </div>
    </div>
  );
}
