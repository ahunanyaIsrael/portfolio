# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcase your projects, skills, and experience with a sleek, professional design powered by Tailwind CSS.

## Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Skills Showcase** - Display your technical skills with visual cards
- **Project Gallery** - Present your projects with detailed information
- **Modern UI** - Clean and professional user interface using Tailwind CSS
- **Fast Performance** - Built with Vite for optimized development and production builds
- **React 19** - Uses the latest React features and improvements

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.1.18
- **Development Server**: Vite Dev Server
- **Linting**: ESLint

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── MainSkillCard.jsx
│   │   ├── NavBar.jsx
│   │   ├── OutLineButton.jsx
│   │   ├── Project.jsx
│   │   └── Skill.jsx
│   ├── page/                # Page components
│   │   └── Home.jsx
│   ├── utils/               # Utility functions
│   │   ├── img.js
│   │   └── skills.jsx
│   ├── assets/              # Static assets
│   │   └── images/
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another available port).

### Build

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Lint

Check code quality and formatting:
```bash
npm run lint
```

## Customization

### Adding Projects

Edit the projects data in your components to add new projects to the portfolio gallery.

### Updating Skills

Modify the skills data in `src/utils/skills.jsx` to add or update your technical skills.

### Styling

Customize the design by:
- Modifying Tailwind CSS classes in components
- Adjusting the primary color in `index.css`
- Editing component styles in individual JSX files

## Performance

Built with Vite for:
- ⚡ Lightning-fast development server with HMR (Hot Module Replacement)
- 📦 Optimized production builds with code splitting
- 🚀 Near-instant page loads

## Browser Support

This portfolio supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue in the repository.

---

Built with ❤️ using React and Vite
