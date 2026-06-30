# Little Lemon Restaurant

A React-based restaurant website built with Create React App. The project includes pages for Home, About, Menu, Reservations, and Order Online, with navigation provided by React Router.

## Project Description

Little Lemon is a restaurant web app that showcases a Mediterranean menu and allows users to:

- view the restaurant menu
- reserve a table
- place an online order for a selected dish
- navigate between Home, About, Menu, Reservations, and Order Online pages

## Features

- React Router based client-side routing
- Reservation form with time selection and party details
- Menu page with `Order Now` buttons
- Order Online page that receives the selected dish and displays its details
- Form submission feedback for order requests

## Scripts

Use the following commands from the project root:

```bash
npm install
npm start
npm test
npm run build
```

## Installation

1. Clone the repository.
2. Navigate to the `little-lemon` directory.
3. Run `npm install`.
4. Start the app with `npm start`.

## Project Structure

- `src/App.js` — application routes and layout
- `src/pages/` — page components for Home, About, Menu, Reservation, and Order Online
- `src/components/` — reusable UI components and page sections
- `src/components/menu/MenuMain.js` — menu listing with Order Now buttons
- `src/pages/OrderOnline.js` — order page with selected dish details and order form

## Notes

This project uses React 18 and React Router v6.
