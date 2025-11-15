# Publishing to npm

This project is set up to automatically publish packages to npm when changes are merged to the
`main` branch.

## Setup

### 1. Create an npm Access Token

**For Classic Tokens:**

1. Go to [npmjs.com](https://www.npmjs.com/) and log in
2. Click on your profile picture → **Access Tokens**
3. Click **Generate New Token** → **Automation** (or **Classic Token** with **Automation** type)
4. Copy the token (you won't be able to see it again)

**For Granular Tokens (Recommended):**

**Important:** Scopes must exist on npm before you can grant permissions to them in granular tokens.
If you don't see your scope in the list, you need to create it first (see below).

1. Go to [npmjs.com](https://www.npmjs.com/) and log in
2. Click on your profile picture → **Access Tokens**
3. Click **Generate New Token** → **Granular Access Token**
4. Configure the token:
   - **Token name**: e.g., "GitHub Actions Publish"
   - **Expiration**: Set your preferred expiration (or "No expiration")
   - **Type**: Select **Automation**
   - **Packages**: Select **Restrict to specific packages**
   - **Package access**:
     - If you see `@haroonwaves` in the list, select it
     - If you don't see it, you need to create the scope first (see "Creating a Scope" below)
     - Alternatively, you can select "All packages" temporarily, then restrict it later
   - **Permissions**: Make sure **Publish** is enabled
5. Click **Generate Token** and copy it (you won't be able to see it again)

**Creating a Scope on npm:**

If `@haroonwaves` doesn't exist yet, you have two options:

**Option 1: Create by Publishing (Easiest)**

1. Use a **Classic Automation Token** temporarily
2. Publish a package manually to create the scope:
   ```bash
   npm login
   cd packages/markdown-kit-core
   npm publish --access public
   ```
3. This creates the `@haroonwaves` scope automatically
4. Now you can create a granular token with permissions for that scope

**Option 2: Create an Organization**

1. Go to npm → **Organizations** → **Create Organization**
2. Name it `haroonwaves`
3. The scope `@haroonwaves` will be available
4. Then create your granular token with permissions for that scope

**Important for Granular Tokens:**

- The token **must** have **Publish** permission for the scope `@haroonwaves`
- If you get a "Scope not found" error, the scope doesn't exist yet - create it first using one of
  the methods above

### 2. Add the Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token
6. Click **Add secret**

## How It Works

- The GitHub Actions workflow (`.github/workflows/publish.yml`) automatically runs on:
  - Push to `main` branch
  - Manual trigger via GitHub Actions UI (workflow_dispatch)

- The workflow will:
  1. Checkout the code
  2. Setup Node.js and pnpm
  3. Install dependencies
  4. Build all packages
  5. Publish changed packages to npm

## Manual Publishing

To manually publish packages locally:

```bash
pnpm publish:packages
```

Or publish a specific package:

```bash
cd packages/markdown-kit-core
pnpm publish --access public
```

## Version Management

**Important**: Before merging to main, make sure to update the version numbers in the package.json
files of packages you want to publish:

- `packages/markdown-kit-core/package.json`
- `packages/markdown-kit-react/package.json`

The workflow will publish packages as-is with their current version numbers. If a version already
exists on npm, the publish will fail.

## Notes

- Packages are published with `--access public` flag (required for scoped packages like
  `@yourname/*`)
- The workflow uses `--no-git-checks` to avoid git-related errors during CI
- Make sure your package names in package.json match your npm organization/username

## Troubleshooting

### "Scope not found" Error

If you encounter this error:

```
npm error 404 Not Found - PUT https://registry.npmjs.org/@haroonwaves%2fmarkdown-kit-core - Scope not found
```

**Solutions:**

1. **Check Granular Token Permissions:**
   - Go to npm → Access Tokens
   - Edit your granular token
   - Ensure **Publish** permission is enabled for the `@haroonwaves` scope
   - If the scope doesn't appear, you may need to create it first (see #2)

2. **Create the Scope First (Required!):**
   - Even with "all packages" permission, the scope must exist on npm before you can publish to it
   - Create the scope by publishing a package manually:

     ```bash
     # First, authenticate with npm using your token
     npm login
     # Or set the token directly:
     # npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN_HERE

     # Build the package first
     cd packages/markdown-kit-core
     pnpm build

     # Publish to create the scope
     npm publish --access public
     ```

   - This will create the `@haroonwaves` scope on npm
   - After this, your GitHub Actions workflow with the granular token will work

3. **Use a Classic Token Temporarily:**
   - Classic tokens with Automation type have full access
   - Use one to create the scope, then switch back to granular tokens

4. **Verify Token in GitHub Secrets:**
   - Ensure the `NPM_TOKEN` secret is set correctly
   - The token should start with `npm_` for granular tokens
