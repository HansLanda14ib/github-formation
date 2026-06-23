# Module 2 Lab — Student & Class Onboarding

Build `POST /students` and `POST /classes` with Express, tests, and GitHub Copilot.

---

## Start here

### 1. Fork this repository

Click **Fork** at the top of GitHub.

- Do **not** check “Copy the main branch only” — you need all `feature/module-2/*` branches.

### 2. Open this README on **your fork**

After forking, browse to `labs/module-2/README.md` on **your** copy of the repo.

### 3. Click **Start exercise**

[![Start exercise](https://img.shields.io/badge/Start_exercise-0e7490?style=for-the-badge&logo=github)](../../issues/new?template=module-2-lab.yml)

[![Commencer l'exercice](https://img.shields.io/badge/Commencer_l'exercice-0e7490?style=for-the-badge&logo=github)](../../issues/new?template=module-2-lab.yml)

→ GitHub opens a new issue. Click **Create** — this issue is your **only guide** for the whole lab.

Then follow the **Current step** section in your issue (branch to checkout, Copilot hints, commands).

Each time you push, the issue updates automatically with the next step.

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

Commit, push, then read the updated issue for step 2.

---

<details>
<summary>Start button shows 404?</summary>

On **your fork**, enable these once in [Settings → General → Features](../../settings):

- **Issues**
- **Actions** (Settings → Actions → Allow all actions)

Then open this README again on your fork and click **Start exercise**.

</details>

---

## Commands

```bash
npm test                              # all tests
npm test -- tests/step-00-intro.test.js   # one step only
npm start                             # http://localhost:3002
```

## Trainer note

Run `scripts/bootstrap-branches.sh` from repo root to recreate learner branches.
