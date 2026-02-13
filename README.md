<div align="center">


## <a name="quick-start">⚡ Quick Start</a>

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Installation Steps**

1. **Clone the repository**
```bash
cd Portfolio-Template
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

### **Build for Production**
```bash
npm run build
npm start
```

---

## <a name="structure">📂 Project Structure</a>

```
📦 Portfolio-Template
├── 📁 app/                    # Next.js App Router
│   ├── 📄 layout.tsx         # Root layout
│   ├── 📄 page.tsx           # Home page
│   ├── 📄 globals.css        # Global styles
│   └── 📄 provider.tsx       # Theme provider
├── 📁 components/             # React components
│   ├── 📁 ui/                # UI components
│   │   ├── 📄 BentoGrid.tsx  # Grid layout
│   │   ├── 📄 FloatingNavbar.tsx
│   │   └── 📄 ...
│   ├── 📄 Hero.tsx           # Hero section
│   ├── 📄 Projects.tsx       # Projects showcase
│   ├── 📄 Footer.tsx         # Footer component
│   └── 📄 ...
├── 📁 data/                  # Data and configurations
│   └── 📄 index.ts          # Site data
├── 📁 public/               # Static assets
│   ├── 📁 assets/           # Images and icons
│   └── 📄 ...
├── 📄 constants.ts          # Project constants
├── 📄 tailwind.config.ts    # Tailwind configuration
└── 📄 next.config.mjs       # Next.js configuration
```

---

## <a name="components">🎨 UI Components</a>

### **Key Components**

#### 🏠 Hero Section
```typescript
// Dynamic hero with animations and CTA buttons
<Hero />
```

#### 🧩 Bento Grid
```typescript
// Modern grid layout with interactive cards
<BentoGrid />
```

#### 🚀 Projects Display
```typescript
// Project showcase with GitHub integration
<Projects />
```

#### 💬 Testimonials
```typescript
// Animated testimonial carousel
<Testimonials />
```

#### 🔗 Navigation
```typescript
// Floating navigation with smooth scroll
<FloatingNavbar />
```

---

## <a name="configuration">🔧 Configuration</a>

### **Environment Setup**
Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_USERNAME=BoyWonder64
```

### **Customization**
- **Colors**: Modify `tailwind.config.ts` for custom themes
- **Content**: Update `data/index.ts` for personal information  
- **Projects**: Edit `constants.ts` for project data
- **Styling**: Customize `app/globals.css` for global styles


---

## <a name="connect">🤝 Connect with BoyWonder</a>

<div align="center">


I'm always excited to work on innovative projects and collaborate with fellow developers.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BoyWonder64)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/maitland-a)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maitland.andrus@gmail.com)


**📄 Resume**: [Download Resume]("https://drive.google.com/file/d/19BJUcxj8TWNJtZW0AaeBm51NQh7XAxYX/view?usp=sharing")

---



</div>
