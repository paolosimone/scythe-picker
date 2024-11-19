"use client";

import { League_Gothic } from "next/font/google";
import { Picker } from "@/components/Picker/Picker";
import classNames from "classnames";

const titleFont = League_Gothic({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-lg px-6 py-3 gap-3">
      {/* Title */}
      <h1
        className={classNames(
          "self-center font-bold text-5xl",
          titleFont.className,
        )}
      >
        Scythe Picker
      </h1>

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
