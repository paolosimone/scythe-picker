import classNames from "classnames";
import { FilterInput, UpdateFilterAction } from "./FilterInput";
import { applyFilter, DEFAULT_SELECTION_FILTER } from "@/state/filter";
import { useMemo, useState } from "react";
import { Selection, enumerateSelections } from "@/state/selection";
import { ALL_COMBINATIONS } from "@/domain";
import { useLocalStorage } from "@/hooks";
import { ShuffleButton } from "./ShuffleButton";
import { SelectionView } from "./SelectionView";

export type PickerProps = Props<{}>;

export function Picker({ className }: PickerProps): JSX.Element {
  const [filter, setFilter] = useLocalStorage(
    `filter-v${DEFAULT_SELECTION_FILTER.version}`,
    DEFAULT_SELECTION_FILTER,
  );

  const [selection, setSelection] = useState<Nullable<Selection>>(null);

  const updateFilter = useMemo(
    () => (update: UpdateFilterAction) => {
      setSelection(null);
      setFilter(update);
    },
    [setFilter, setSelection],
  );

  const filteredSelections = useMemo(() => {
    const combinations = applyFilter(filter, ALL_COMBINATIONS);
    return enumerateSelections(combinations, filter.playersCount);
  }, [filter]);

  return (
    <div className={classNames("flex flex-col items-center", className)}>
      {/* Filters */}
      <FilterInput filter={filter} updateFilter={updateFilter} />

      {/* Shuffle */}
      <div>Combinations: {filteredSelections.length}</div>
      <ShuffleButton
        selections={filteredSelections}
        setSelection={setSelection}
      />

      {/* View */}
      <div className="flex grow self-center mt-4">
        {selection && <SelectionView selection={selection} />}
      </div>
    </div>
  );
}
