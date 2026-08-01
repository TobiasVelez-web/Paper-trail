# PaperTrail

An AI workflow navigator that helps multilingual Montgomery County families
navigate school and government paperwork. Built with vanilla JavaScript and
the Anthropic Claude API.

## How it works
- Ask about a task (renew a license, enroll a child, FAFSA, etc.)
- The app generates only the questions that change your answer
- It searches current official sources and builds a step-by-step checklist
- A document checker reads a photo and says whether it will be accepted
- A form explainer reads a form and explains every field
- Everything works in 20 languages at three reading levels

## Architecture
- `index.html` — the entire front-end (HTML, CSS, JS in one file)
- `api/claude.js` — a serverless function that proxies to the Anthropic API,
  keeping the API key server-side

## AI disclosure
This project uses the Anthropic Claude API (claude-sonnet-4-6) at runtime to
generate questions, checklists, and document analysis. Development was assisted
by Claude.
