# Insurance

Built with [LiteShow](https://liteshow.io) - AI-First, Git-Powered CMS

## Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env and add:
# LITESHOW_PROJECT_SLUG=insurance
# LITESHOW_API_URL=https://api.liteshow.io

# Run locally
pnpm dev
```

Visit http://localhost:4321

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=YOUR_REPO_URL)

### Environment Variables

Set these in your deployment platform:

- `LITESHOW_PROJECT_SLUG`: `insurance`
- `LITESHOW_API_URL`: `https://api.liteshow.io`

## How It Works

This Astro site fetches your published content from the LiteShow API at build time. LiteShow handles all the database infrastructure - you just manage your content!
