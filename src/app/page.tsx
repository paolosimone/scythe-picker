"use client";

import { Picker } from "@/components/Picker/Picker";

export default function Home() {
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

      {/* Content */}
      <Picker className="grow" />

      {/* Footer */}
      <div className="flex justify-center items-end">
        <span className="text-xs">
          Scythe &copy; is a trademark of Stonemaier LLC
        </span>
      </div>
    </main>
  );
}
