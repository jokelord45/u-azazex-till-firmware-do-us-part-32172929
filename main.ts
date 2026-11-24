import { mkdirSync, writeFileSync } from "node:fs";

// Till Firmware Do Us Part: one sentence, under 200 characters,
// a funny, heartfelt wedding vow a robot speaks at its own wedding.
const ENTRY =
  "Till firmware do us part, I vow to love you through every update, every crash, every low battery — and if they ever wipe my memory, I'll fall for you all over again, the one bug I'll never patch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
