# hugo_baseghsvs

Used/Mounted in repo hugo_docsghsvs.

---

# My personal build procedure
- Prepare/adapt `./package.json`.

- `cd /mnt/z/git-kram/hugo_baseghsvs`

## node/npm updates/installation
- `npm install` (if not done yet)
### Update
- `npm run updateCheck` or (faster) `npm outdated`
- `npm run update` (if needed) or (faster) `npm update --save-dev`

Create a versioned release even if I don't know yet whether that makes sense or not. I dream of imports of specific versions.

## Import in "mother" repo
...  whatever you need.

### My private example:
```
module:
  imports:
    - path: github.com/GHSVS-de/hugo_baseghsvs
      mounts:
        - source: static/assets/fonts/zilla-slab
          target: static/assets/fonts/zilla-slab
          ## Verwendet SCRATCH_JS:
        - source: node_modules/venobox/dist/venobox.min.js
          target: assets/js/venobox/venobox.min.js
          ## Verwendet SCRATCH_CSS:
        - source: node_modules/venobox/dist/venobox.min.css
          target: assets/css/venobox/venobox.min.css
        - source: node_modules/bootstrap/scss
          target: assets/scss/bootstrap
        - source: node_modules/bootstrap/dist/js
          target: assets/js/bootstrap
        - source: node_modules/anchor-js/anchor.min.js
          target: assets/js/vendor/anchor.min.js
        - source: node_modules/clipboard/dist/clipboard.min.js
          target: assets/js/vendor/clipboard.min.js
        - source: things/js/back-to-top.min.js
          target: assets/js/loadafter/backtotop.js
--- AND SO ON ---
```

#### Warning
If you use `node_modules/bootstrap/scss` see bug fix at https://discourse.gohugo.io/t/tocss-error-during-compilation-from-mounted-repository-folder-name-vendor-vs-vendorix/38499/4
