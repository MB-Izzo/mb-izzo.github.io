---
title: 'Fixing astro.build/Vite hot reload crash ENOENT file not found'
created: 2023-04-09
updated: 2023-04-09
tags:
  - 'Tutorial'
---

If you ever get an error about a '4913' file not existing, making the dev
server crash when developing with Astro or Vite in general, I have good news
for you: I found out why and here is the fix.

## Vim creates a temporary 4913 file.

It has its reason. If you want to know why: [github link](https://github.com/neovim/neovim/issues/3460).

## The fix

Ignore the file in Vite hot reload.

```js
vite: {
  server: {
    watch: {
      ignored: "**/4913";
    }
  }
}
```

