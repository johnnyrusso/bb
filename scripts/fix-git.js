import { execSync } from 'child_process';

try {
  // Remove node_modules from git tracking (it's a symlink in the sandbox)
  const result = execSync('git rm --cached node_modules 2>&1 || echo "not tracked"', {
    cwd: '/vercel/share/v0-project',
    encoding: 'utf-8'
  });
  console.log('git rm result:', result);
} catch (e) {
  console.log('Error:', e.message);
}

// Verify .gitignore has the right pattern
import { readFileSync } from 'fs';
const gitignore = readFileSync('/vercel/share/v0-project/.gitignore', 'utf-8');
console.log('gitignore contains node_modules (no slash):', gitignore.includes('\nnode_modules\n'));
console.log('Done');
