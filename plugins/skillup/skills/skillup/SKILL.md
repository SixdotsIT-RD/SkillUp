---
name: skillup
description: Connect to your SkillUp account to browse, install and keep your Agent Skills up to date. Use when the user asks about their SkillUp skills, wants to log in to SkillUp, list purchased or published skills, or check whether their skills need updating.
---

# SkillUp

Manage the user's Agent Skills through their SkillUp account.

## When to use

Use these tools when the user:

- asks what skills they have, or wants to see their SkillUp library
- wants to log in / connect this device to SkillUp
- asks whether any of their skills have updates
- asks which AI tools on this machine have a given skill installed

## Tools

| Tool | What it does | Writes files? |
| --- | --- | --- |
| `skillup_login` | Opens the browser to connect this device to the user's account | No (stores a credential in the OS keychain) |
| `skillup_whoami` | Confirms the stored credential is still valid | No |
| `skillup_skills` | Lists the skills in the user's account and their status on this device | No |
| `skillup_status` | Shows which AI tools are installed locally and what is installed where | No |
| `skillup_sync` | Downloads and installs pending skills | Yes — not implemented yet |

## How to handle "not linked"

If any tool reports that the device is not linked, call `skillup_login` first.
It opens the system browser; tell the user to approve the request there, then retry.

## Notes

- The credential lives in the operating system's secure store, never in a plain file.
- `skillup_sync` is not implemented yet. If the user asks to install skills from their
  account, say so plainly rather than pretending it worked.
