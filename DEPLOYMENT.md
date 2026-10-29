# Deployment

This portfolio is deployed as a static site. The Nginx container
`devmaitcontainer-devmaitcontainer-1` serves `/DATA/devmait` at container path
`/usr/share/nginx/html`. The Nginx and Cloudflare Tunnel containers do not need
to be rebuilt for a website update.

## Build

From the repository root on Windows, run:

```powershell
npm ci
npm run build
```

The static website is generated in `out/`. Confirm the main page and Next.js
assets are present:

```powershell
Test-Path .\out\index.html
Test-Path .\out\_next
```

Both commands should return `True`. The export includes the HTML, generated
`_next` files, and assets copied from `public/`.

## Copy to Server Folder
