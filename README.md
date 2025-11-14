# AI-Themed Professional Portfolio Website

A stunning, highly modern AI-themed portfolio website built with Next.js, WebGL (Three.js), and advanced animation libraries. Features an animated neural network background, glassmorphism UI, holographic effects, and smooth animations that create an immersive AI experience.

## 🚀 Features

- **Neural Network Background**: Interactive 3D neural network with animated nodes and connections using Three.js
- **AI-Themed Design**: Modern glassmorphism UI with holographic glows and data stream effects
- **Advanced Animations**: Powered by Framer Motion with neural pulses, data flows, and holographic shimmers
- **Responsive Design**: Fully responsive and works beautifully on all devices
- **Easy Content Management**: All content is managed through a single configuration file
- **Professional Sections**:
  - Hero section with holographic avatar and orbiting particles
  - Professional experience timeline with neural network indicators
  - Interactive skills showcase with 3D card effects
  - Featured projects with holographic cards
  - Contact section with AI-themed social links

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Three.js** - WebGL graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## ✏️ Customizing Your Portfolio

All content is managed through the `data/content.ts` file. Simply edit this file to update:

### Personal Information
- Name, title, location
- Bio and social media links
- Email address

### Professional Experience
- Add, remove, or modify work experience entries
- Each entry includes:
  - Company name and role
  - Employment period and location
  - Description and achievements
  - Technologies used

### Skills
- Organize skills by category (Frontend, Backend, Tools)
- Easy to add or remove skills

### Projects
- Showcase your best work
- Include project descriptions, technologies, and links

## 🎨 Styling

The portfolio uses Tailwind CSS with custom configurations. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles in individual component files

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── WebGLBackground.tsx # WebGL particle system
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Experience.tsx     # Experience timeline
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects grid
│   └── Contact.tsx        # Contact section
├── data/
│   └── content.ts         # Content configuration
└── public/                # Static assets (images, etc.)
```

## 🚢 Deployment

### Quick Deploy Options

#### Option 1: Vercel (Recommended - Easiest) ⭐

**Via Web Interface:**
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
3. Click "New Project" → Import your repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy" - Your site is live in ~2 minutes! 🎉

**Via CLI:**
```bash
npm i -g vercel
vercel login
vercel
```

#### Option 2: Netlify
1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

#### Option 3: Other Platforms
Build the project:
```bash
npm run build
npm start
```

For detailed hosting instructions, see [HOSTING.md](./HOSTING.md)

### Pre-Deployment Checklist
- [ ] Test locally: `npm run build && npm start`
- [ ] Check all links work
- [ ] Verify images load correctly
- [ ] Test on mobile devices
- [ ] Check browser console for errors

## 📝 Notes

- Add your avatar image to the `public` folder and update the path in `data/content.ts`
- Add project images to the `public` folder and reference them in the projects array
- The WebGL background is optimized for performance but may impact older devices

## 🎯 Next Steps

1. Update `data/content.ts` with your personal information
2. Add your project images to the `public` folder
3. Customize colors and styling to match your brand
4. Deploy and share your portfolio!

## 📄 License

This project is open source and available for personal and commercial use.

