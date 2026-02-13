#!/bin/bash
# Remove node_modules from git tracking (it's a symlink in the sandbox)
cd /vercel/share/v0-project
git rm --cached node_modules 2>/dev/null || echo "node_modules not tracked"
echo "Done - node_modules removed from git index"
