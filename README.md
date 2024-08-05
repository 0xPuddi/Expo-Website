# Expo-Website

Expo Arredo Website. Front-end with a lightweight backend to add information dynamically to the webside through an admin dashboard.

Technologies used: Sveltekit Tailwind Pocketbase Vite.

Docker
CapRover
https://www.npmjs.com/package/gsap

## Description

The admin section, both API and FrontEnd pages, was thought to be used as a mean to change and update the website's content. For the moment it is depriciated but not removed, since there might be necessary usage in the future.

The website uses italian a default language, but offers multiple laguages, each laguage has its definitions into: `lang.ts`



## Usage

Clone the repo
```sh
git clone https://github.com/Puddi1/Expo-Website.git
```

Add environment variables:

Run a pocketbase server and a

Run locally:
```sh
npm run dev
```

Build:
```sh
git run build
```




## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.