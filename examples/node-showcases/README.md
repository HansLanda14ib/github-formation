# Node.js Real Cases for Trainer Demo

These files are real backend-style examples you can open in the editor while teaching.
They match the simplified school/inventory use cases used in module practice sections.

## Files

- `module1-support-priority.js`
  - Responsible AI style priority helper for school support tickets.
- `module2-student-class-onboarding.js`
  - Express-style handlers for creating students and classes.
- `module3-inventory-requests.js`
  - Prompt-engineering target: request endpoint with validation and status rules.
- `module4-school-knowledge-checklist.js`
  - Knowledge-space style checklist generator from policy rules.
- `module5-stock-updates.js`
  - Advanced workflow target: stock update endpoint + idempotency.
- `module6-inventory-sync-incident.js`
  - Incident debugging case: reconciliation check and safe backfill plan.

## How to use in class

1. Open each file in VS Code.
2. Ask learners to improve code with Copilot (validation, tests, refactor, docs).
3. Compare baseline code vs improved code from prompts.

## Optional run

These examples are written as plain Node.js files and can be executed directly:

```bash
node examples/node-showcases/module2-student-class-onboarding.js
```

No extra dependencies are required.
