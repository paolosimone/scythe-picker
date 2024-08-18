"use client";

import { SelectionView } from "@/components";
import { FilterInput, UpdateFilterAction } from "@/components/FilterInput";
import { ALL_COMBINATIONS } from "@/domain";
import { applyFilter, DEFAULT_SELECTION_FILTER } from "@/state/filter";
import {
  enumerateSelections,
  randomChoice,
  Selection,
} from "@/state/selection";
import { useMemo, useState } from "react";

// TODO
// tier range
// Bid
// Responsive UI
// GH Pages
// PWA

export default function Home() {
  const [filter, setFilter] = useState(DEFAULT_SELECTION_FILTER);
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

  const shuffle = () =>
    setSelection(
      filteredSelections.length ? randomChoice(filteredSelections) : null,
    );

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="py-3 font-bold text-3xl">Scythe Picker</h1>
      <FilterInput filter={filter} updateFilter={updateFilter} />
      <span>Combinations found: {filteredSelections.length}</span>
      <button onClick={shuffle}>Shuffle</button>
      {selection && <SelectionView selection={selection} />}
    </main>
  );
}
