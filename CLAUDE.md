# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MagnetLab is a single-page landing website for an AI implementation and training business. Built with React + Vite. No external UI libraries — all styling is plain CSS.

## Commands

This project runs inside WSL. All npm/vite commands must use the WSL-native Node.js (installed via nvm):

```bash
# Prefix for all commands (needed because WSL uses nvm-managed Node):
export NVM_DIR=/home/omar/.nvm && source /home/omar/.nvm/nvm.sh

# Dev server
npm run dev        # starts Vite at http://localhost:5173

# Production build
npm run build      # outputs to dist/

# Preview production build
npm run preview
```

## Architecture

Single-page app with no routing. All content lives in `src/App.jsx` as a single component. Styles are split into:

- `src/index.css` — global reset and base typography
- `src/App.css` — all section-specific styles (navbar, hero, about, services cards, CTA, footer)

No state management, no API calls, no external dependencies beyond React and Vite.
