// Weirdest Job Title: Blind Judge Showdown — make.fun entry.
//
// Writes one job title (1-60 characters) to /output/entry.txt:
// the weirdest job title we could think of — a real-sounding corporate
// role with one gloriously odd twist: someone has to apologise on behalf
// of cars that drive themselves.
// Pure Node standard library; deterministic; no network, no input.
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TITLE = "Chief Apology Officer for Self-Driving Cars";

const chars = [...TITLE].length;
if (chars < 1 || chars > 60) {
  throw new Error(`job title must be 1-60 characters, got ${chars}`);
}
if (TITLE.trim().length === 0) {
  throw new Error("job title must not be only whitespace");
}
if (TITLE.includes("\n")) {
  throw new Error("job title must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
// The sandbox collects the outputs as another user than the one this
// program runs as, so leave the file readable by every user.
chmodSync("/output/entry.txt", 0o644);

// Read back what was written: the gate rejects anything that is not
// UTF-8 text of 1-60 characters, so fail loudly here instead.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TITLE) {
  throw new Error("entry.txt does not match the job title");
}
