#!/usr/bin/env bash
# Run once after forking github-formation (forks have Issues + Actions disabled by default).
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI first: https://cli.github.com/"
  exit 1
fi

REPO="${1:-$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || true)}"
if [[ -z "$REPO" ]]; then
  echo "Usage: $0 [owner/repo]"
  echo "Run from your fork clone, or pass your fork name (e.g. bibzaznenorsys/github-formation)."
  exit 1
fi

echo "Configuring fork: $REPO"

gh repo edit "$REPO" --enable-issues

gh api -X PUT "repos/$REPO/actions/permissions" \
  -f enabled=true \
  -f allowed_actions=all \
  >/dev/null

gh label create module-2-lab \
  --repo "$REPO" \
  --description "Module 2 hands-on lab tracker" \
  --color "1D76DB" \
  2>/dev/null || true

ISSUE_URL="https://github.com/$REPO/issues/new?template=module-2-lab.md"

echo ""
echo "Done. Issues and Actions are enabled on your fork."
echo ""
echo "Create your lab issue:"
echo "  $ISSUE_URL"
echo ""
echo "Or: Issues tab → New issue → Module 2 Lab - Student Class Onboarding"
