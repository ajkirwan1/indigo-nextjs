// scripts/vercel-build.js
import { execSync } from 'child_process';

const branch = process.env.VERCEL_GIT_BRANCH;
const env = process.env.VERCEL_ENV;

console.log(`🔧 Running vercel-build for branch: ${branch} (env: ${env})`);

try {
  execSync('npm run setup:db', { stdio: 'inherit' });
  execSync('next build', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Build failed:', err.message);
  process.exit(1);
}
