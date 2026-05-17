# bear-cli

api2cli-compatible wrapper and agent skill for Bear's official BearCLI.

This package does not reimplement Bear. It delegates to the `bearcli` binary bundled with Bear for macOS 2.8+ and publishes a skill so agents know how to use Bear safely.

## Install

Install or update Bear for macOS 2.8+:

```bash
open "https://apps.apple.com/app/bear-markdown-notes/id1091189122"
```

Expose BearCLI on PATH:

```bash
mkdir -p ~/.local/bin
printf '%s\n' '#!/bin/sh' 'exec /Applications/Bear.app/Contents/MacOS/bearcli "$@"' > ~/.local/bin/bearcli
chmod 755 ~/.local/bin/bearcli
```

Install through api2cli once published:

```bash
npx api2cli install bear-cli
```

Direct GitHub install once the repo exists:

```bash
npx api2cli install Nardjo/bear-cli
```

## Usage

```bash
bearcli --version
bearcli list --format json --fields id,title,tags,modified
bearcli search "@today @todo" --format json
bearcli create "Inbox" --content "Capture" --tags inbox --format json
bearcli mcp-server
```

`bear-cli` is an api2cli-compatible alias that delegates to `bearcli`:

```bash
bear-cli --help
```

## Resources

- Official announcement: https://blog.bear.app/2026/04/bear-2-8-bearcli-claude-connector-and-mcp-server/
- Official support page: https://bear.app/faq/command-line-interface/
- Skill: `skills/bear-cli/SKILL.md`
