# Shaun's Skill Cards Website PRD

## 📌 Overview

**Product Name:** Shaun's Skill Cards  
**Type:** Personal Resume Website  
**Purpose:** To creatively showcase Shaun Crawford's experience, skills, projects, and achievements through an interactive set of visually engaging cards.  
**Primary Audience:** Hiring managers and recruiters for Director of Growth Marketing, Director of Demand Gen, and Growth Product Manager roles.

## 🎯 Goals

Visually communicate:

- Versatility across growth marketing, PLG, experimentation, AI tooling, and analytics
- Measurable impact through specific achievements
- Technical fluency with tools like Copilot, SFMC, Ampscript, GA4, Cursor, etc.
- Be memorable and creative — demonstrate branding and storytelling
- Buildable in 1–2 weekends using Cursor (React, Tailwind, Framer Motion)

## 🧩 Features & Requirements

### 1. Card Grid Interface

| Element | Description |
|---------|-------------|
| Grid Layout | Responsive grid of cards (3-wide on desktop, 2-wide on tablet, 1 on mobile) |
| Filtering/Sorting (Optional) | Toggle filters: "Projects", "Skills", "Tools", "Awards", "Jobs" |
| Hover States | Hovering over a card animates a subtle zoom-in or motion shift using Framer Motion |

### 2. Card Design (Front)

**Visual Style:**
- Rounded corners (e.g. rounded-2xl in Tailwind)
- Soft drop shadows
- Slight glassmorphism or elevated surface

**Color-coding by type:**
- 🔧 Project → Electric Blue
- 🧠 Skill → Purple
- 🏆 Award → Gold
- 🚀 Tool → Gray or Black
- 📍 Role → Dark Green

**Example:**
```
🧪 Top Hat Onboarding Flow
📍 Project
📈 200% increase in feature adoption
🛠 GA4 · Ampscript · Copilot
```

Icons (e.g. emojis or SVG) visually distinguish the type. Keep it playful but clean.

### 3. Card Back / Expand Interaction

**Interaction:**
- Click → modal or card "flips" to reveal more context
- Use Framer Motion flip animation or modal fade

**Back Content Examples:**
```
🎯 Objective:
Help users onboard without needing sales support

💡 Strategy:
Self-serve flow with personalized content blocks (via SFMC + Copilot)

📊 Result:
+200% core feature adoption
+75% student enrollment
```

Include links or embedded media if relevant:
- GitHub snippets
- Loom demo
- Screenshots (optional)

### 4. Featured Cards Section (Optional)

Add a hero row for:
- 🏆 Socrates Award (Animated badge)
- 🚀 Growth Loop Framework
- 🧰 AI Form Builder

These cards could be larger or animated into view.

### 5. Navigation / Site Structure

| Section | Purpose |
|---------|----------|
| Hero / Intro | Quick value prop: "Hi, I'm Shaun. I build growth loops, ship AI tools, and lead high-impact teams." |
| Card Grid | Main experience showcase |
| About | Short bio or philosophy + headshot |
| Contact | CTA: "Let's build something great." Email + resume download |

## 🎨 Design Inspiration

**Fonts:**
- Inter
- Space Grotesk
- DM Sans

**Colors:**
- Minimal base with accent-coded card backgrounds
- Off-white, deep navy, cool gray background

**Interaction:**
- Subtle hover scale
- Card flip or modal reveal
- Animated entrance for cards on scroll

**Tone:** Professional + playful. Confident and clear.

## 🧰 Tech Stack

| Tool | Purpose |
|------|----------|
| Cursor (React) | Main development |
| Tailwind CSS | Layout and styling |
| Framer Motion | Animations (hover, flip, transitions) |
| Optional: Vite | Fast build |
| Optional: Supabase / local JSON | Store card data for scalability |

## 🗓️ Timeline

| Day(s) | Task |
|--------|------|
| Day 1 | Set up project (Cursor, Tailwind, routing) |
| Day 2 | Build card component, populate ~6–10 cards |
| Day 3 | Add card flip or modal interaction |
| Day 4 | Polish hero + contact sections |
| Weekend 2 | Expand card library, add filter/sorting, tweak design |

## 🧪 MVP Scope

At minimum:
- ✅ Responsive grid of 10–12 cards
- ✅ Click-to-expand with Framer Motion
- ✅ Styled card types with icons
- ✅ Hero + Contact sections
- ✅ Resume download button

## 🚀 Future Enhancements

- Filter/sort logic (e.g. by skill or impact area)
- "Build your own deck" — let recruiters select cards and download PDF
- Light/dark mode toggle
- GPT-powered résumé rewriter (fun bonus)
