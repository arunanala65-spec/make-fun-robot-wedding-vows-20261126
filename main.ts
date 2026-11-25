// One-Line Robot Wedding Vows — make.fun
// One line: the funniest wedding vow a robot couple could say.
// Entry: make-fun-robot-wedding-vows-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I vow to love you through every update, crash, and low battery, and if I ever leave your side, it will only be to find a charger.";

if (line.length < 1 || line.length > 159) {
  throw new Error(`Line must be 1-159 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
