# Pokedex

This project is a React application built with Vite, showcasing a modern frontend architecture for managing Pokémon data with infinite scroll, filters, and favorites.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#-features)
- [Relevant Technologies](#relevant-technologies)
- [Getting Started](#getting-started)
- [Live Demo](#live-demo)

## Project Overview

Pokedex is a web application that interacts with a Pokémon API and provides features such as authentication, infinite scrolling, filtering, favorites, and a user profile view.  
The project is designed to demonstrate modern practices in frontend development with React, Vite, Apollo Client, and Redux Toolkit.

## 🚀 Features

- ⭐ **Favorites system** persisted with [Redux Toolkit](https://redux-toolkit.js.org/)  
- 🎨 **Responsive UI** powered by **CSS Modules**  
- 📂 **Data fetching & caching** with [Apollo Client](https://www.apollographql.com/docs/react/)  
- ⚡ **Infinite scroll with virtualization** using [TanStack Virtual](https://tanstack.com/virtual/latest)  
- 🧪 **Unit & integration tests** with Vitest + React Testing Library  
- 🗂️ **Feature-based folder structure** for scalability  

## Relevant Technologies

This project uses a modern web development stack. The most relevant libraries for its functionality are:

- **Vite:** A fast build tool that provides a rapid development environment.  
- **React:** The core JavaScript library for building the user interface.  
- **Redux Toolkit:** A standardized way to manage global state such as authentication and favorites.  
- **Apollo Client:** A GraphQL client used for querying Pokémon data, caching results, and managing API state.   
- **CSS Modules:** Scoped styling for components to keep styles modular and maintainable.    
- **Playwright:** An end-to-end testing framework for web applications.  

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed.

- Node.js v22+  
- pnpm (10.14.0) or yarn  

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd pokedex
   ```
3. Install the dependencies:
   ```bash
   pnpm install
   ```
4. Run dev:
   ```bash
   pnpm run dev
   ```
5. Run unit tests:
   ```bash
   pnpm run test
   ```
6. Run e2e tests:
   ```bash
   pnpm run test:e2e
   ```

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

## Live Demo 🌐

You can view the live demo at: [Pokedex Demo](https://pokedex.vercel.app)# pokedex
