# {{CLIENT_NAME}} - Website Project

This is a client website project powered by [Free Beer Studio](https://freebeer.ai).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Deployment Environments

| Environment | URL | Deploy Method |
|-------------|-----|---------------|
| **Development** | https://{{CLIENT_SLUG}}.dev.freebeer.ai | Auto-deploy on push to `main` |
| **Staging** | https://{{CLIENT_SLUG}}.staging.freebeer.ai | Manual workflow dispatch |
| **Production** | https://{{PROD_DOMAIN}} | Tag-based (v*.*.*)  |

## Development Setup

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/freebeerstudio/{{REPO_NAME}}.git
   cd {{REPO_NAME}}
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   - Navigate to: http://localhost:3000

## Project Structure

```
.
├── app/                    # Next.js app directory (routes, layouts, pages)
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets (images, fonts, etc.)
├── .github/workflows/      # CI/CD workflows
│   ├── dev-deploy.yml      # Auto-deploy to dev
│   ├── staging-deploy.yml  # Manual deploy to staging
│   └── production-deploy.yml # Tag-based deploy to production
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm test             # Run tests
```

## Deployment Workflow

### Development (Auto-Deploy)

Every push to `main` branch automatically deploys to development environment:

```bash
git add .
git commit -m "Your commit message"
git push origin main
# Deploys to: https://{{CLIENT_SLUG}}.dev.freebeer.ai
```

### Staging (Manual Deploy)

Deploy to staging for user acceptance testing:

1. Go to: https://github.com/freebeerstudio/{{REPO_NAME}}/actions
2. Click: "Deploy to Staging"
3. Click: "Run workflow"
4. Optionally enter deployment reason
5. Click: "Run workflow"

### Production (Tag-Based Deploy)

Deploy to production with versioned releases:

```bash
# Create and push a version tag
git tag -a v1.0.0 -m "Initial production release"
git push origin v1.0.0
# Deploys to: https://{{PROD_DOMAIN}}
```

This automatically:
- Runs full test suite
- Runs security audit
- Builds application
- Deploys to production domain
- Creates GitHub Release with changelog

## Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your local configuration values.

**Note**: Never commit `.env.local` to the repository (it's in `.gitignore`).

## Support

For technical support or questions:
- **Developer**: Free Beer Studio
- **Contact**: wayne@freebeer.ai
- **GitHub Issues**: https://github.com/freebeerstudio/{{REPO_NAME}}/issues

## License

Proprietary - All rights reserved by {{CLIENT_NAME}}

---

**Built with care by [Free Beer Studio](https://freebeer.ai)**
