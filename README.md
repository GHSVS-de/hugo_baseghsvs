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
        - source: dist/fonts/zilla-slab
          target: static/assets/fonts/zilla-slab
          ## Verwendet SCRATCH_JS:
        - source: dist/js/venobox/venobox.min.js
          target: assets/js/venobox/venobox.min.js
          ## Verwendet SCRATCH_CSS:
        - source: dist/css/venobox/venobox.min.css
          target: assets/css/venobox/venobox.css
        - source: dist/scss/bootstrap
          target: assets/scss/bootstrap
        - source: dist/js/bootstrap
          target: assets/js/bootstrap
        - source: dist/js/anchor-js/anchor.min.js
          target: assets/js/anchor.js
        - source: dist/js/clipboard/clipboard.min.js
          target: assets/js/clipboard.min.js
        - source: dist/js/back-to-top.min.js
          target: assets/js/loadafter/backtotop.js
--- AND SO ON ---
```

#### Warning
If you use `dist/scss/bootstrap` see bug fix at https://discourse.gohugo.io/t/tocss-error-during-compilation-from-mounted-repository-folder-name-vendor-vs-vendorix/38499/4
