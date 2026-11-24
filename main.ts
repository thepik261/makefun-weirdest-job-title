// Weirdest Job Title: Blind Judge Showdown — entry generator.
// Writes the job title to /output/entry.txt for the judge.

import { mkdirSync, writeFileSync, readFileSync, chmodSync } from "node:fs";

const TITLE = "Chief Apology Officer for Self-Driving Cars";

function main(): void {
  const title = TITLE;
  if (typeof title !== "string" || title.trim().length === 0) {
    throw new Error("Title must be a non-empty string.");
  }
  // The title fits the brief: a real-sounding executive role (Chief ... Officer)
  // plus one specific absurd twist — apologising on behalf of cars that
  // drive themselves — so it reads instantly as a genuine job gone weird.
  if (title !== title.trim()) {
    throw new Error("Title must not have leading or trailing whitespace.");
  }
  if (title.includes("\n") || title.includes("\r")) {
    throw new Error("Title must be a single line.");
  }
  if (title.length < 1 || title.length > 60) {
    throw new Error("Title must be between 1 and 60 characters.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", title, "utf8");
  chmodSync("/output/entry.txt", 0o644);
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== title) {
    throw new Error("Read-back mismatch.");
  }
}

main();
