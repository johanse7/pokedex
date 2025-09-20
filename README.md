# Pokedex

This project is a React application built with Vite, showcasing a modern frontend architecture for managing Pokémon data with infinite scroll, filters, and favorites.

## Table of Contents

- [Project Overview](#project-overview)
- [Relevant Technologies](#relevant-technologies)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)

## 🚀 Features

- ⭐ **Favorites system** persisted with [Zustand](https://github.com/pmndrs/zustand)
- 🎨 **Responsive UI** powered by CSS Modules
- 📂 **Data fetching & caching** with [Apollo Client](https://www.apollographql.com/docs/react/)
- 🧪 **Unit & integration tests** with Vitest + React Testing Library
- 🗂️ **Feature-based folder structure** for scalability

## Project Overview

This is a web application that interacts with a Pokémon list through the [PokeAPI GraphQL endpoint](https://beta.pokeapi.co/graphql/v1beta).  
It provides features such as infinite scrolling, filtering, favorites, and a user profile view.

## Relevant Technologies

This project uses a modern web development stack. The most relevant libraries for its functionality are:

- **Vite:** A fast build tool that provides a rapid development environment.
- **React:** The core JavaScript library for building the user interface.
- **Zustand:** A small, fast, and scalable state-management solution. It's used to manage the application's global state, such as favorites.
- **Apollo Client:** A powerful library for fetching, caching, and managing GraphQL data.
- **React Virtual (`@tanstack/react-virtual`):** A headless utility for virtualizing large lists and tabular data. This library is key to the performance improvement you mentioned for the infinite scroll feature.
- **CSS Modules:** Modular CSS to scope styles locally and avoid collisions.
- **Axios:** A promise-based HTTP client for making API requests.
- **Playwright:** An end-to-end testing framework for web applications. It allows you to automate browsers and write reliable UI tests to ensure your app works correctly.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm (or yarn) installed.

- Node.js v22+
- pnpm (10.14.0) or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone <your-repo-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd tekton-challenge
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
pnpm run dev
```

## Environment Variables

This project uses environment variables to configure the API endpoint and pagination settings.  
Create a `.env` file in the root of your project with the following variables:

```env
# Base URL for the Pokémon GraphQL API
VITE_POKE_API=https://beta.pokeapi.co/graphql/v1beta

# Number of Pokémon to fetch per request (default recommended: 20)
VITE_POKEMON_LIMIT=20
```

## Live Demo 🌐

You can view the live demo at: [Live Demo 🌐](https://pokedex-one-theta-55.vercel.app/)