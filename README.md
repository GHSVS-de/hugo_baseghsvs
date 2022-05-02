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
```
module:
  imports:
    - path: github.com/GHSVS-de/hugo_baseghsvs
      mounts:
        - source: static/assets/fonts/zilla-slab
          target: static/assets/fonts/zilla-slab
--- AND SO ON ---
```
