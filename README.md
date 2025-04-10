# 🎵 Spotify Clone Frontend

A modern music streaming application frontend built with React, Vite, Tailwind CSS, and shadcn/UI.

![App Screenshot](assets/Musique.png)

## 📋 Overview

This project is a responsive frontend implementation of a Spotify-like music streaming platform. It features user authentication, music browsing, playlist creation, and a sleek, modern UI that closely resembles the original Spotify experience.

## ✨ Features

- **User Authentication** - Login/signup with email, Google, Facebook, Apple, or phone number
- **Music Exploration** - Browse popular artists, top playlists, and indie discoveries
- **Music Playback** - Play, pause, skip, and control music with a custom audio player
- **Playlist Management** - Create, edit, and manage personal playlists
- **Responsive Design** - Fully responsive UI that works on desktop and mobile devices
- **Dark Mode** - Sleek dark interface for comfortable viewing

## 🛠️ Tech Stack

- **React** - Frontend library for building user interfaces
- **Vite** - Next generation frontend tooling for faster development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/UI** - High-quality React components built with Radix UI and Tailwind
- **React Router** - Declarative routing for React applications

## 🚀 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/spotify-clone-frontend.git
   cd spotify-clone-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
spotify-clone-frontend/
├── assets/            # Images and static assets
├── dist/              # Production build files
├── node_modules/      # Dependencies
├── public/            # Public static files
├── src/               # Source code
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Page layouts
│   ├── pages/         # Application pages
│   ├── services/      # API services
│   ├── styles/        # Global styles
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── .eslintrc.js       # ESLint configuration
├── .gitignore         # Git ignore rules
├── components.json    # shadcn/UI configuration
├── index.html         # HTML entry point
├── jsconfig.json      # JavaScript configuration
├── package.json       # Project dependencies and scripts
├── postcss.config.js  # PostCSS configuration
├── README.md          # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```

## 📱 Screenshots

### Authentication Screen
![Auth Screen](assets/auth.png)

### Sign Up Page
![Signup Page](assets/signup.png)

### Music Browse Page
![Music Page](assets/Musique.png)

### Search Functionality
![Search Feature](assets/search.png)

## 🔜 Roadmap

- [ ] Implement user profile customization
- [ ] Add offline mode functionality
- [ ] Integrate a user authentication functionality with Node.js
- [ ] Add social sharing features
- [ ] Implement music recommendations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgements

- Design inspiration from Spotify
- Icons provided by Lucide React
- UI components from shadcn/UI