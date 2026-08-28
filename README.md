# org.canbyrobotics

Website for Canby Robotics

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/canby-robotics/org.canbyrobotics)

The committed [`netlify.toml`](netlify.toml) configures the production build and
publish directory. Netlify automatically provides its maintained OpenNext
adapter for Next.js, so no Netlify-specific runtime dependency is required.

To deploy manually, import this repository in Netlify and deploy it with the
settings detected from `netlify.toml`.

## Local development

Use Node.js 24 (see [`.nvmrc`](.nvmrc)), then install and start the app:

```sh
npm ci
npm run dev
```
