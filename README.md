

## Developing
Once you've created a project and installed dependencies with `pnpm install` start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Deploying
By default, this will also create a CNAME file that points to my domain, owenwang.dev. You can change this behavior in `gh-pages.js`

```bash
pnpn run build
# deploy built files to a github page
pnpm run deploy
```