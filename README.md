# Insurance

Built with [LiteShow](https://liteshow.io) - AI-first, Git-powered CMS

## Deploy Your Site

### Netlify Deployment

1. Go to [Netlify](https://app.netlify.com/start)
2. Click **"Import an existing project"**
3. Select **GitHub** and choose this repository
4. Configure build settings:
   - **Build command:** `pnpm install && pnpm build`
   - **Publish directory:** `dist`
5. Add environment variables (see below)
6. Click **Deploy site**

### Vercel Deployment

1. Go to [Vercel](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select this repository from GitHub
4. Configure project:
   - **Build command:** `pnpm install && pnpm build`
   - **Output directory:** `dist`
5. Add environment variables (see below)
6. Click **Deploy**

After deploying, any content you publish in LiteShow will automatically trigger a rebuild via webhook.

## Environment Variables

**Both environment variables are required for deployment:**

- `LITESHOW_PROJECT_SLUG` - Your project slug: `insurance`
- `LITESHOW_API_URL` - LiteShow API endpoint: `https://api.liteshow.io`

The site fetches your published content from the LiteShow API at build time.

## Local Development

```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your configuration
# LITESHOW_PROJECT_SLUG=insurance
# LITESHOW_API_URL=https://api.liteshow.io

# Install and run
pnpm install
pnpm dev
```

Visit http://localhost:4321

## How It Works

This Astro site fetches your published content from the LiteShow API at build time. LiteShow handles all the database infrastructure - you just manage your content!
