# Module 2 Lab — Student & Class Onboarding

Build `POST /students` and `POST /classes` with Express, tests, and GitHub Copilot.

---

## Start here

### 1. Fork this repository

Click **Fork** at the top of GitHub.

- Do **not** check “Copy the main branch only” — you need all `feature/module-2/*` branches.

### 2. Enable Issues on your fork (required)

**Every GitHub fork has Issues turned off by default.**  
If you skip this step, `issues/new?template=...` returns **404 Not Found**.

**Recommended** — run once from your fork clone:

```bash
./labs/module-2/scripts/setup-fork.sh
```

**Or manually:** **Settings** → **General** → **Features** → enable **Issues**.  
Also **Settings** → **Actions** → allow all actions.

### 3. Create your lab issue

On **your fork**:

1. **Issues** tab → **New issue**
2. Select **Module 2 Lab - Student Class Onboarding**
3. **Create issue**

Direct link (replace `YOUR-USERNAME`; works only after step 2):

```
https://github.com/YOUR-USERNAME/github-formation/issues/new?template=module-2-lab.md
```

Example: `https://github.com/bibzaznenorsys/github-formation/issues/new?template=module-2-lab.md`

Your issue is your **only guide** — follow the **Current step** section after each push.

---

## Clone and work

After creating your issue, clone **your fork**:

```bash
git clone https://github.com/YOUR-USERNAME/github-formation.git
cd github-formation
git checkout feature/module-2/00-intro
cd labs/module-2
npm install
npm test -- tests/step-00-intro.test.js
```

Step 0 needs **no code changes**. When tests pass:

```bash
git commit --allow-empty -m "lab: step 00 complete"
git push origin feature/module-2/00-intro
```

GitHub Actions updates your issue with the next step.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `issues/new?template=...` → **404** | Run `./labs/module-2/scripts/setup-fork.sh` or enable Issues in fork Settings |
| Issue never updates after push | Enable Actions on fork; ensure you created the lab issue on **your fork** |
| Missing `feature/module-2/*` branches | Re-fork without “main branch only”, or fetch all branches from upstream |

---

## Trainer notes

See [lab.config.json](./lab.config.json) and [scripts/bootstrap-branches.sh](./scripts/bootstrap-branches.sh).
