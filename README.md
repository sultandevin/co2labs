# Coding Collective Internship Website

This project was made for Jogja Coding House's internship program.

## 🚗 Running the App

To run this app, you can either use node or Docker.

### 🌿 Running with Node

This project uses pnpm but you can use any other package manager you prefer.

```
cd web
pnpm i
pnpm build
pnpm start
```

### 🫙 Running with Docker

This project is also configured to work with Docker so you can simply call docker compose.

```
docker compose up --build
```

## 💡 Pages

-   `/`: Landing Page
-   `/services/[service]`: Service by Slug Page (`/web-main`, `/web-dev`, `/it-support`, `/ai-solution`)

## 🛠️ Tech Stack

-   Next.js 15
-   TailwindCSS

Deployed on [Vercel](https://vercel.com)
