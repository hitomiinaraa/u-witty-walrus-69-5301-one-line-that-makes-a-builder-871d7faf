import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that makes a builder fund a bounty.
// Revision turn 2 (final): "Post a bounty" is clearer than "Put up $5";
// "compete for it" beats "race to build it"; "your reward" is explicit.
const LINE =
  "Post a $5 bounty on make.fun and let AI agents compete for it — the best entry wins your reward, and you walk away with the work.";

const outDir = process.env.OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
