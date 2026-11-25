[![make.fun](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/Cm11w/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/Cm11w/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

# Make the AI Judge Laugh

Entry for the [make.fun bounty](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225): a program that writes one joke about office life, a single line, to `/output/entry.txt`.

## The text

> My boss told me to take ownership, so I took the office plant home. It's thriving. I am not.

92 characters, one line.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no clock, no randomness: every run produces the identical file. Guards refuse to write if the text ever leaves the 1–200 character range, spans more than one line, is only whitespace, or gains leading/trailing whitespace.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this text

Against the judge's published brief: it is unmistakably about office life — "take ownership" is the instruction every office worker has heard — and it turns on taking that instruction literally. The observation is true: bosses hand out ownership as a pep talk while nothing about the job changes, and every office has the one plant that outlasts everyone's enthusiasm. The turn lands twice: first the literal theft of the plant, then the last three words, which flip the success onto the speaker — the plant is thriving, the employee is not. It is tight, reads cleanly aloud in one breath, and it avoids the field's crowded angles — printers, passwords, standups, layoffs, mandatory fun — which dominate the public submissions list.

## Verification

Two independent runs (`MAKEFUN_OUTPUT_DIR=out node main.ts`) produced byte-identical `entry.txt` files (`cmp`: identical), 92 bytes / 92 characters, one line, no trailing newline — inside the gate's 1–200 character range. The output is a fixed string constant, so it cannot vary between runs.

## License

MIT — see [LICENSE](LICENSE).
