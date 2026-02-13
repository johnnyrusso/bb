import { execSync } from 'child_process';

try {
  // Remove node_modules from git tracking (it's a symlink in v0 sandbox)
  const result = execSync('git rm --cached node_modules 2>&1 || echo "node_modules not tracked"', {
    cwd: '/vercel/share/v0-project',
    encoding: 'utf-8'
  });
  console.log(result);
} catch (e) {
  console.log('node_modules was not tracked by git, no action needed.');
}

console.log('Done. node_modules is now untracked by git.');
