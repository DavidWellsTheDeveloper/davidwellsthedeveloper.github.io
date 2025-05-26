# David Wells - Portfolio Website

A modern, responsive portfolio website built with Nuxt UI showcasing my skills as a full stack developer.

## 🚀 Features

- **Modern Design**: Built with Nuxt UI components and Tailwind CSS
- **Responsive Layout**: Optimized for all device sizes
- **Static Site Generation**: Fast loading with Nuxt's SSG capabilities
- **Dark Mode Support**: Automatic theme switching
- **Component-Based Architecture**: Reusable Vue components
- **Gradient Navigation**: Eye-catching teal/cyan gradient sidebar

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: Nuxt UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Project Setup

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview
```

## 🎨 Customization

The site uses a teal/cyan color scheme that can be customized in `app/app.config.ts`:

```typescript
ui: {
  colors: {
    primary: 'teal',
    secondary: 'cyan',
    tertiary: 'emerald',
    neutral: 'zinc',
  }
}
```

## 📁 Project Structure

```
app/
├── components/          # Reusable Vue components
│   ├── SkillsList.vue  # Skills display component
│   └── PageHeader.vue  # Page header component
├── layouts/            # Layout templates
│   └── default.vue     # Main layout with navigation
├── pages/              # Route pages
│   ├── index.vue       # Homepage
│   ├── about.vue       # About page
│   └── contact.vue     # Contact page
├── app.config.ts       # App configuration
└── app.vue            # Root component
```

## 🚀 Deployment

This site automatically deploys to GitHub Pages using GitHub Actions when changes are pushed to the master branch.

## 📄 License

GPL-3.0 License - see [LICENSE](LICENSE) file for details.

## 🤝 Contact

- **GitHub**: [@DavidWellsTheDeveloper](https://github.com/DavidWellsTheDeveloper)
- **Website**: [davidwellsthedeveloper.github.io](https://davidwellsthedeveloper.github.io)
