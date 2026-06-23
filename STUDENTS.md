# Student? Start the Module 2 lab

## Reset from zero (full test)

1. **Delete your old fork** on GitHub (Settings → Danger zone → Delete repository)  
   Or keep it and close old lab issues.

2. **Fork again:** [HansLanda14ib/github-formation](https://github.com/HansLanda14ib/github-formation/fork)  
   Uncheck **“Copy the main branch only”** — you need all `feature/module-2/*` branches.

3. **Clone your fork** (fresh folder recommended):

   ```bash
   git clone git@github.com:YOUR-USERNAME/github-formation.git
   cd github-formation
   ```

4. **One-time fork setup** (Issues + Actions are off by default on forks):

   ```bash
   gh auth switch -u YOUR-USERNAME
   ./labs/module-2/scripts/setup-fork.sh
   ```

   Then open **Actions** on your fork and click **Enable workflows** if GitHub asks.

5. **Create your lab issue** (only works after step 4):

   `https://github.com/YOUR-USERNAME/github-formation/issues/new?template=module-2-lab.md`

6. **Start step 1:**

   ```bash
   git checkout feature/module-2/00-intro
   cd labs/module-2
   npm install
   npm test -- tests/step-00-intro.test.js
   git commit --allow-empty -m "lab: step 00 complete"
   git push origin feature/module-2/00-intro
   ```

7. **Check:** Actions tab → workflow run → issue updates to step 2.

---

## Quick reference (after fork exists)

| Step | Action |
|------|--------|
| Fork setup | `./labs/module-2/scripts/setup-fork.sh` |
| Create issue | Issues → **Module 2 Lab - Student Class Onboarding** |
| Work | Follow **Current step** in your issue only |
| Advance | Push branch when tests pass → issue updates automatically |

Details: [labs/module-2/README.md](labs/module-2/README.md)
