# PUG, Tailwind and Express

A lightweight starter project that uses PUG for the templating, TailwindCSS for the styling, and ExpressJS as the framework.

## The project

📂 [PUG][pug]: This is the language used to generate our HTML templates. This is great as it means you don't have to write tonnes of repetitive markup.

🎨 [TailwindCSS][tailwindcss]: This is the library we use to style our PUG templates (Currently on Version 3). You no longer need to manage multiple stylesheets; just add the required utility classes as needed :D

⚙️ [ExpressJS][expressjs]: This is the framework used to configure our project, holding everything together by making sure the correct files and assets are being served.

💻 [Browsersync][browsersync]: This makes sure your changes are updated in real time. Browsersync also launches the server for you on the correct port, and when changes are made the browser will automatically refresh.

**Note:** I've also added `mode: 'jit'` to the `tailwind.config.js`, although according to [this update][tw-update] that is no longer needed as the Just-in-Time compiler is enabled by default now. Still, I've kept it in anyway and can see that the only classes being generated in the build file are the one's being used in `index.pug`.

## Setting up

- To get set up with this project, you just need to follow the options on GitHub to `Clone` this repo onto your local environment.

- Once you have the project saved locally, you can `cd/into/pug-tw-express` and run `npm install` to create the `node_modules` folder and install the required dependencies.

- For reference, this project was made using NodeJS version `18.15.0`. You can download the [latest version here][nodejs], or use [Node Version Manager][nvm] to grab the latest `lts` version.

- To make sure everything is compiling correctly, you can run `npm run build` in the projects root directory to build out the `HTML` pages, `CSS` and the `/images` folder. The compiled files and assets should then appear in the `public` folder (This is Git ignored already).

- To get started with development, simply run `npm start` to launch the server and watch for changes in the `PUG` and `CSS` files (Browsersync opens the server in a new tab automatically).

That should be all that's needed!

## Deploying to Netlify

We went with Netlify for deployment handling and hosting. It's easy to set up, and has continuous deployment enabled by default. This means that once the repo where your storing your source code is connected, any new changes you push to remote will automatically trigger a new build.

To add this project to Netlify, you just need to create a new site and connect a repo, which in this case was a GitHub account.

Then in Netlify's `Site Settings`, set the build command as `npm run build`, and the output folder as `public`. The UI is a lot easier to use than the CLI, and once your site is deploying it's really easy to manage and preview your live site (As well as get an exact stack trace of the build and deployment process). _Remember, you will need to manually trigger a deploy when you first set this up._

That's it! Here's the live site demo:
[Live site 🚀][live]

[![Netlify Status](https://api.netlify.com/api/v1/badges/b9903c3e-4c65-42ce-9a85-40ef3294e899/deploy-status)](https://app.netlify.com/sites/darling-selkie-f2e34f/deploys)

---

As a designer, I'm always fascinated by the technologies behind what we design! That's why I thought it would be cool to build this. I actually have `ChatGPT`, and a couple of engineering wizards to thank for helping me solve the occassional bugs... The rise in AI Agents though will definitely help bridge the gap between designers and developers even more; as I've seen with this project!

Thanks for looking!

Curt

[pug]: https://pugjs.org/api/getting-started.html
[tailwindcss]: https://tailwindcss.com/
[expressjs]: https://expressjs.com/
[browsersync]: https://browsersync.io/
[nodejs]: https://nodejs.org/en
[nvm]: https://github.com/nvm-sh/nvm
[live]: https://darling-selkie-f2e34f.netlify.app/
[tw-update]: https://tailwindcss.com/docs/upgrade-guide
