# hugo_baseghsvs

Used/Mounted in repo hugo_docsghsvs and other Hugo projects.

Don't rely on B\C!

---

# My personal build procedure

**Build procedure uses local repo fork of https://github.com/GHSVS-de/buildKramGhsvs**

- Prepare/adapt `./package.json`.

- `cd /mnt/z/git-kram/hugo_baseghsvs`

## node/npm updates/installation
- `npm install` (if not done yet)
### Update
- `npm run updateCheck` or (faster) `npm outdated`
- `npm run update` (if needed) or (faster) `npm update --save-dev`

## Folder /custom/
Is for fonts, custom JavaScript and other custom stuff.

Can be extended for other custom asset kinds.

Already existing folders should not be deleted. Just delete files in it if you don't need them anymore.

## Build /dist/ folder
- `node build.js`
- This folder contains all mounteable sources then. They come from /custom/ and /node_modules/.

## ????
Create a versioned release even if I don't know yet whether that makes sense or not. I dream of imports of specific versions.

---

## Import in "mother" repo
...  whatever you need.

### My private example:
```
module:
  imports:
    - path: github.com/GHSVS-de/hugo_baseghsvs
      mounts:
        - source: dist/svgs/bi
          target: layouts/partials/bi
        - source: dist/svgs/icons-overview.html
          target: assets/mounted/icons-overview.html

        - source: dist/fonts/zilla-slab
          target: static/assets/fonts/zilla-slab

          ## Verwendet SCRATCH_JS:
        #- source: dist/js/venobox/venobox.min.js
        #  target: assets/js/venobox/venobox.min.js
        - source: dist/js/venobox
          target: assets/js/venobox

          ## Verwendet SCRATCH_CSS:
        - source: dist/css/venobox/venobox.min.css
          target: assets/css/venobox/venobox.css

        #- source: dist/scss/bootstrap
        #  target: assets/scss/bootstrap

        - source: dist/scss
          target: assets/scss

        - source: dist/js/bootstrap
          target: assets/js/bootstrap

        - source: dist/js/anchor-js/anchor.min.js
          target: assets/js/anchor.js

        - source: dist/js/clipboard/clipboard.min.js
          target: assets/js/clipboard.min.js

        - source: dist/js/application.js
          target: assets/js/loadafter/application.js
        - source: dist/js/back-to-top.min.js
          target: assets/js/loadafter/backtotop.js
--- AND SO ON ---
```

#### Warning
If you use `dist/scss/bootstrap` see bug fix at https://discourse.gohugo.io/t/tocss-error-during-compilation-from-mounted-repository-folder-name-vendor-vs-vendorix/38499/4
