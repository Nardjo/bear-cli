#!/usr/bin/env bun

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const home = process.env.HOME || process.env.USERPROFILE || "";

const candidates = [
  process.env.BEARCLI_PATH,
  "/Applications/Bear.app/Contents/MacOS/bearcli",
  home ? join(home, ".local", "bin", "bearcli") : undefined,
  "bearcli",
].filter(Boolean) as string[];

const binary =
  candidates.find((candidate) => candidate.includes("/") && existsSync(candidate)) ||
  candidates[candidates.length - 1];

const result = spawnSync(binary, process.argv.slice(2), {
  stdio: "inherit",
  env: process.env,
});

if (result.error) {
  console.error(`Failed to execute ${binary}: ${result.error.message}`);
  console.error("Install Bear 2.8+ for macOS or set BEARCLI_PATH to the bearcli binary.");
  process.exit(127);
}

process.exit(result.status ?? 1);
