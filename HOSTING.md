# 🚀 Portfolio Hosting Guide

This guide covers multiple ways to host your AI-themed Next.js portfolio.

## Option 1: Vercel (Recommended - Easiest) ⭐

Vercel is made by the Next.js team and offers the best experience for Next.js apps.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes! 🎉

3. **Custom Domain (Optional)**
   - In your Vercel project settings
   - Go to "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

**Pros:**
- ✅ Free tier with generous limits
- ✅ Automatic HTTPS
- ✅ Auto-deploys on git push
- ✅ Built-in CDN
- ✅ Perfect Next.js optimization
- ✅ Preview deployments for PRs

---

## Option 2: Netlify

Another great option with similar features.

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

**Pros:**
- ✅ Free tier
- ✅ Auto-deploys
- ✅ Built-in forms (if needed)
- ✅ Good Next.js support

---

## Option 3: GitHub Pages (Static Export)

For GitHub Pages, you need to export as static site.

### Steps:

1. **Update `next.config.js`** to enable static export:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   
   module.exports = nextConfig
   ```

2. **Add export script to `package.json`**:
   ```json
   "scripts": {
     "export": "next build"
   }
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   ```
   This creates an `out` folder

4. **Use GitHub Actions** (recommended):
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions

**Note:** Static export may have limitations with some Next.js features.

---

## Option 4: Other Cloud Providers

### AWS Amplify
- Connect GitHub repository
- Auto-detects Next.js
- Free tier available

### Google Cloud Run
- Container-based deployment
- Pay per use

### DigitalOcean App Platform
- Simple deployment
- $5/month starter plan

### Railway
- Easy deployment
- Free tier available

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Test locally: `npm run build && npm start`
- [ ] Check all links work
- [ ] Verify images load correctly
- [ ] Test on mobile devices
- [ ] Check console for errors
- [ ] Update any hardcoded URLs
- [ ] Add environment variables if needed

---

## Environment Variables

If you need environment variables (e.g., API keys):

**Vercel:**
- Project Settings → Environment Variables

**Netlify:**
- Site Settings → Environment Variables

---

## Performance Tips

1. **Optimize Images**: Use Next.js Image component (already done)
2. **Enable Compression**: Most platforms do this automatically
3. **Use CDN**: Vercel/Netlify provide this automatically
4. **Monitor Performance**: Use Vercel Analytics or similar

---

## Quick Start (Vercel - Recommended)

```bash
# 1. Install Vercel CLI (optional)
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Follow prompts
# 5. Your site is live! 🎉
```

Or just use the web interface at vercel.com - it's even easier!

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Netlify Docs: https://docs.netlify.com

---

**Recommended:** Use **Vercel** for the best Next.js experience! 🚀

