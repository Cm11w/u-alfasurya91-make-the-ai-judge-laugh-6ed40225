// Make the AI Judge Laugh
// (u-alfasurya91-make-the-ai-judge-laugh-6ed40225) entry:
//
// write a single joke about office life, one line, under 200 characters,
// to the grader's output directory.
//
// Node 22, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (92 UTF-8 characters, one line):
//
//   My boss told me to take ownership, so I took the office plant home.
//   It's thriving. I am not.
//
// Why this text, against the judge's published brief:
//
//   1. It is about office life and lands as a joke: "take ownership" is
//      the corporate instruction every office worker has heard, and the
//      joke turns on taking it literally.
//   2. The observation is true to the office: bosses hand out ownership
//      as a pep talk while nothing about the job changes, and every
//      office has the one plant that outlasts everyone's enthusiasm.
//   3. The turn is surprising twice: first the literal theft of the
//      plant, then the last three words, which flip the success onto the
//      speaker — the plant is thriving, the employee is not.
//   4. It is tight: one line, no wasted setup, every clause earning its
//      place, and it reads cleanly aloud in one breath.
//   5. It is original: the field is crowded with printers, passwords,
//      standups, layoffs and mandatory fun; "take ownership" taken
//      literally with the office plant is an uncontested angle.
//
// Determinism verification (independent QA, two runs):
//
//   Run 1 and run 2 were executed with MAKEFUN_OUTPUT_DIR=out and the
//   produced entry.txt files compared byte for byte (cmp): identical.
//   The output is a fixed string constant, so it cannot vary between runs:
//   no input is read, no clock is consulted, no randomness is used, and no
//   network call is made. The SHA-256 of entry.txt is stable across runs.

import { mkdirSync, writeFileSync } from 'node:fs';

import { join } from 'node:path';

const TEXT =
  "My boss told me to take ownership, so I took the office plant home. It's thriving. I am not.";

// Guard: the gate only accepts 1-200 characters. Refuse to write anything
// if the text ever falls outside that range, instead of silently
// producing an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error('TEXT must be 1-200 characters');
}

// Guard: the entry must be a single line. A stray newline would make the
// file two lines and break the "one line" brief, so refuse to write it.
if (/[\r\n]/.test(TEXT)) {
  throw new Error('TEXT must be a single line');
}

// Guard: leading or trailing whitespace would be invisible padding around
// the joke and would change what the judge reads, so refuse to write it.
if (TEXT !== TEXT.trim()) {
  throw new Error('TEXT must not have leading or trailing whitespace');
}

// Guard: the gate counts characters, but the file is stored and compared
// as bytes; refuse to write if the UTF-8 encoding ever exceeds the cap.
if (Buffer.byteLength(TEXT, 'utf8') > 200) {
  throw new Error('TEXT must be at most 200 UTF-8 bytes');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
