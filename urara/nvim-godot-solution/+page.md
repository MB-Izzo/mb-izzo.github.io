---
title: 'Setting up Godot with Neovim on Windows'
created: 2023-01-02
updated: 2023-01-02
tags:
  - 'Tutorial'
---

Setting up neovim with **Godot** is not that hard. Probably very easy on linux,
but there are a few things to know to make it work on windows. Actually,
there's *only* one thing to know but it was hard to find.

## My current LSP Setup with LSP Zero

I have no idea how it would work with another setup than mine so let me tell you
about how my LSP is set up. I use 
[lsp-zero](https://github.com/VonHeikemen/lsp-zero.nvim), and if you don't use 
it yet, *you should*. It makes setting up LSP a breeze and still configurable.

## Configure Godot external editor

1. In godot, go to ```Editor > Editor Settings > Text Editor > External ```
2. In Exac path, set your path to ```nvim.exe``` (probably in Program Files)
3. In exec flags, put ```--server 127.0.0.1:55432 --remote-send "<C-\><C-N>:n {file}<CR>:call cursor({line},{col})<CR>"```

**You can customize the remote command sent to nvim**, to target a line and column.
Like a did here with *call cursor*.
The docs for the remote feature of neovim are available 
[here](https://neovim.io/doc/user/remote.html).

This should be it for godot.

## IMPORTANT: Override LSP settings for gdscript to use netcat

For Linux, connecting to the lsp work with sockets, but **it does not work 
on windows**.

**You need to override the cmd setting to use netcat instead** ([which is also the cmd
for 0.8 nvim according to the source file](https://github.com/neovim/nvim-lspconfig/blob/master/lua/lspconfig/server_configurations/gdscript.lua)).
* Download **netcat** [from their website](https://nmap.org/ncat/)
* Add ```ncat.exe``` to your Path (```C:\Program Files (x86)\Nmap``` by default)
* Add the following to wherever you set up your lsp in your nvim config:
```lua
-- file: lsp.lua
-- lsp is require('lsp-zero')
-- put this before calling lsp.setup()
lsp.configure('gdscript', {
    force_setup = true, -- because the LSP is global. Read more on lsp-zero docs about this.
    single_file_support = false,
    cmd = {'ncat', '127.0.0.1', '6008'}, -- the important trick for Windows!
    root_dir = require('lspconfig.util').root_pattern('project.godot', '.git'),
    filetypes = {'gd', 'gdscript', 'gdscript3' }
})
```

## Launch nvim with --listen

Nvim comes with a remote feature. Before, you had to use something called (nvr)
but it is not needed anymore.

* Navigate to your godot project folder
* Run nvim from your terminal or whatever GUI you prefer with 
```nvim --listen 127.0.0.1:55432 .```

Then, when you click on a script in Godot, it should open it in your nvim buffer.

Enjoy making games with Neovim and Godot!

