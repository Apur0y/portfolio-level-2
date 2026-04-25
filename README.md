# Apu Roy — Portfolio (Next.js + Tailwind CSS)

A professional portfolio website built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## Features
- Light mode, Navy & Gold elegant theme
- 3D "Full Stack Developer" text effect on hero photo
- Scroll-triggered reveal animations
- Animated skill bars
- Responsive design (mobile + desktop)
- Sticky navbar with blur effect
- Floating tech pills on hero
- Contact form with success state
- All sections: Hero, About, Skills, Experience, Projects, Education, Contact

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your profile photo
- Add your photo as `/public/profile.jpg`
- Open `components/Hero.tsx`
- Find the comment `REPLACE THIS WITH YOUR ACTUAL PHOTO`
- Remove the placeholder `<div>` block
- Uncomment the `<Image>` block below it

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Customize your data
Update the following files with your real information:

| File | What to update |
|------|---------------|
| `components/Hero.tsx` | Name, title, stats, photo |
| `components/About.tsx` | Bio text, personal quote |
| `components/Skills.tsx` | Skill percentages, tech stack |
| `components/Experience.tsx` | Job roles, companies, dates, descriptions |
| `components/Projects.tsx` | Project names, descriptions, live/github links |
| `components/Education.tsx` | University, certifications |
| `components/Contact.tsx` | Email, LinkedIn, GitHub, phone |
| `components/Footer.tsx` | Year, name |
| `app/layout.tsx` | SEO metadata |

### 5. Build for production
```bash
npm run build
npm start
```

### 6. Deploy
Deploy to **Vercel** (recommended) with one command:
```bash
npx vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com) for automatic deployments.

---

## Project Structure
```
apu-portfolio/
├── app/
│   ├── globals.css       # Global styles + custom CSS (3D text, animations)
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── Navbar.tsx        # Fixed navbar with mobile menu
│   ├── Hero.tsx          # Hero with 3D text + photo
│   ├── About.tsx         # About me + value pillars
│   ├── Skills.tsx        # Skill bars + tech cloud
│   ├── Experience.tsx    # Work experience timeline
│   ├── Projects.tsx      # Project cards grid
│   ├── Education.tsx     # Education + certifications
│   ├── Contact.tsx       # Contact channels + form
│   └── Footer.tsx        # Footer
├── public/
│   └── profile.jpg       # ← Add your photo here
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

Made with ♥ for Apu Roy
