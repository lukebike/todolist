# Planify - Todo List Application

A modern, responsive todo list application built with React, TypeScript, and Material-UI. Planify allows users to create multiple lists and manage their tasks efficiently with a clean, intuitive interface.

## Features

- Create and manage multiple todo lists
- Add new lists with custom names
- Dark/Light theme toggle
- Responsive design for mobile and desktop
- Local storage persistence
- Fast navigation with React Router
- Clean, simplistic UI with Material-UI

## Tech Stack

- React
- TypeScript
- Material-UI
- React Router DOM

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/lukebike/planify
cd planify
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Adding a New List**:

   - Click the menu button in the navigation bar
   - Select "Add New List"
   - Enter a name for your list and click "Add New List"

2. **Switching Between Lists**:

   - Use the navigation menu to select from your existing lists
   - The app supports up to 3 lists maximum

3. **Theme Toggle**:
   - Use the theme toggle button in the navigation to switch between light and dark modes

## Deployment

This project is configured for deployment on Vercel. A `vercel.json` file is included to handle client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main branch

**Made with ❤️ using React and Material-UI**
