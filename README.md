# Coding Collective Internship Website

This project was made for Jogja Coding House's internship program.

## 🚗 Running the App

To run this app, you can either use node or Docker. But first, you need to clone the repository.

```
git clone https://github.com/dikkaaaw/co2labs-clone.git .
```

### 🌿 Running with Node

This project uses `pnpm` but you can use any other package manager you prefer. The app will be running at [localhost:3000](http://localhost:3000).

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

-   Node.js
-   Next.js 15
-   TailwindCSS
-   Motion

Deployed on [Vercel](https://vercel.com)
