# Risezonic Academics

Next.js site for [risezonicacademy.com](https://risezonicacademy.com).

## Local

```bash
npm install
npm run dev
```

## VPS (Docker + Nginx)

App on host `127.0.0.1:6600` → container `:3000`. Push to `main` triggers deploy (`git pull` + `docker compose up -d --build`).
