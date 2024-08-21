"use client";

import { SelectionView, ShuffleButton } from "@/components";
import { FilterInput, UpdateFilterAction } from "@/components/FilterInput";
import { ALL_COMBINATIONS } from "@/domain";
import { useLocalStorage } from "@/hooks";
import { applyFilter, DEFAULT_SELECTION_FILTER } from "@/state/filter";
import { enumerateSelections, Selection } from "@/state/selection";
import { useMemo, useState } from "react";

// TODO
// GH Pages
// PWA

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center text-lg px-6 py-3 gap-3">
      {/* Title */}
      <h1 className="self-center font-bold text-4xl">Scythe Picker</h1>

      {/* Github */}
      <iframe
        className="h-10 w-20 absolute right-0 top-2 z-10"
        src="https://ghbtns.com/github-btn.html?user=paolosimone&repo=scythe-picker&type=star&size=small"
        title="GitHub"
      />

      {/* Filters */}
      <FilterInput filter={filter} updateFilter={updateFilter} />

      {/* Shuffle */}
      <div className="flex flex-col items-center">
        <div>Combinations: {filteredSelections.length}</div>
        <ShuffleButton
          selections={filteredSelections}
          setSelection={setSelection}
        />
      </div>

      {/* View */}
      <div className="flex grow self-center">
        {selection && <SelectionView selection={selection} />}
      </div>

      {/* Footer */}
      <div className="flex justify-center items-end">
        <span className="text-xs">
          Scythe &copy; is a trademark of Stonemaier LLC
        </span>
      </div>
    </main>
  );
}
