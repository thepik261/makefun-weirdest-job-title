// make.fun entry for "Weirdest Job Title: Blind Judge Showdown".
// Writes one job title (1-60 chars) to /output/entry.txt.
// Pure Node standard library, deterministic, no network, no input.

import { mkdirSync, writeFileSync, readFileSync, chmodSync } from "node:fs";

const TITLE = "Chief Apology Officer for Self-Driving Cars";

function main(): void {
  if (TITLE.length < 1 || TITLE.length > 60) {
    throw new Error("title must be 1-60 characters");
  }
  if (TITLE.trim() === "" || TITLE.includes("\n")) {
    throw new Error("title must be a single non-blank line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TITLE, "utf8");
  chmodSync("/output/entry.txt", 0o644);
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== TITLE) {
    throw new Error("verification failed: entry.txt does not match title");
  }
}

main();
