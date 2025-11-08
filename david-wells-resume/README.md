# David Wells - Digital Resume

## Development Setup

This project uses modern development tools to ensure code quality and
consistency.

### Prerequisites

- Node.js 20+ (currently using v20.19.5)
- npm 10+

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate static files
npm run generate
```

### Code Quality

#### ESLint

- **Configuration**: `eslint.config.js`
- **Purpose**: Code quality and consistency
- **Rules**: Constitutional compliance, performance, accessibility

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

#### Prettier

- **Configuration**: `.prettierrc`
- **Purpose**: Code formatting and style consistency
- **Settings**: Single quotes, no semicolons, 2-space indentation

```bash
# Check formatting
npm run format:check

# Format all files
npm run format
```

#### Quality Gate

Run all quality checks before committing:

```bash
npm run quality
```

This runs:

- ESLint for code quality
- Prettier for formatting consistency

### VS Code Integration

Recommended extensions (see `.vscode/extensions.json`):

- ESLint
- Prettier
- Vue Language Features (Volar)
- Tailwind CSS IntelliSense
- GitHub Copilot

Settings configured for:

- Format on save
- Auto-fix on save
- Consistent Vue.js formatting

### Tech Stack

- **Framework**: Nuxt.js 3.19.2
- **Styling**: TailwindCSS with Material Design tokens
- **Language**: TypeScript
- **Code Quality**: ESLint + Prettier
- **Development**: Vite (included with Nuxt)
- **Fonts**: Inter & Fira Code (via Google Fonts)

### Constitutional Principles

This project follows strict constitutional guidelines:

1. **Authentic Representation**: Only verified skills/experience
2. **Clean Design**: Minimalist, elegant solutions
3. **User-Centric Experience**: Fast loading, mobile-first
4. **Content-First Structure**: Logical organization
5. **Deployment Ready**: Static generation, cost-effective hosting

### Development Commands

| Command                | Description              |
| ---------------------- | ------------------------ |
| `npm run dev`          | Start development server |
| `npm run build`        | Build for production     |
| `npm run generate`     | Generate static files    |
| `npm run preview`      | Preview production build |
| `npm run lint`         | Check code quality       |
| `npm run lint:fix`     | Fix linting issues       |
| `npm run format`       | Format all files         |
| `npm run format:check` | Check formatting         |
| `npm run quality`      | Run all quality checks   |

### File Structure

```
david-wells-resume/
├── .vscode/           # VS Code settings
├── assets/           # CSS and static assets
├── components/       # Vue components (TBD)
├── content/          # Content files (JSON/MD)
├── layouts/          # Nuxt layouts (TBD)
├── pages/            # Nuxt pages (TBD)
├── public/           # Static public files (TBD)
├── app.vue           # Main app component
├── nuxt.config.ts    # Nuxt configuration
├── tailwind.config.js # TailwindCSS configuration
├── eslint.config.js  # ESLint configuration
├── .prettierrc       # Prettier configuration
└── package.json      # Dependencies and scripts
```

---

Built with ❤️ and GitHub Copilot following constitutional principles.
