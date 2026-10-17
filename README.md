# Apartment Matea Guest Guide

A guest guide for my apartment in Zadar, with arrival instructions, parking
information, Wi-Fi details and apartment essentials.

This is the public version of the project. Wi-Fi details, door codes, the
address, parking details and most of the photos are replaced with placeholders.

## Screenshots

<p align="center">
  <img src="docs/screenshots/home-light.png" width="200" alt="Home page in light mode">
  <img src="docs/screenshots/home-dark.png" width="200" alt="Home page in dark mode">
  <img src="docs/screenshots/arrival-light.png" width="200" alt="Arrival page in light mode">
  <img src="docs/screenshots/arrival-dark.png" width="200" alt="Arrival page in dark mode">
</p>

<p align="center">
  <img src="docs/screenshots/check-out-light.png" width="200" alt="Check-out page in light mode">
  <img src="docs/screenshots/wifi-dark.png" width="200" alt="Wi-Fi page in dark mode">
  <img src="docs/screenshots/emergency-light.png" width="200" alt="Help and emergency page in light mode">
  <img src="docs/screenshots/house-rules-dark.png" width="200" alt="House rules page in dark mode">
</p>

## Features

- Step-by-step arrival guide with photos and door codes
- Parking, Wi-Fi, TV, coffee maker and dishwasher instructions
- Check-out checklist with progress
- House rules, essentials finder and help & emergency contacts
- Explore Zadar: beaches, food and sights
- Photo lightbox and swipeable step carousels
- Dark mode that follows the system setting and remembers the guest's choice

## Planned

- Language switcher (the EN button in the header is a placeholder for now)

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes
- sonner
- lucide-react

## Project structure

```text
src/
├── app/
│   ├── arrival/
│   ├── check-out/
│   ├── coffee/
│   ├── dishwasher/
│   ├── emergency/
│   ├── essentials/
│   ├── explore/
│   ├── house-rules/
│   ├── parking/
│   ├── tv/
│   ├── wifi/
│   ├── apple-icon.png
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
├── assets/
└── components/
public/
└── manuals/
docs/
└── screenshots/
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
