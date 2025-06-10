# Salsa Candela

Salsa Candela is a Node.js/Express web application for the Salsa Candela dance academy in CDMX. It provides information about salsa and bachata classes, parties, registration, and more.

## Features
- Informational pages for salsa, bachata, private classes, parties, FAQ, and contact
- Registration and redirect routes for classes and events
- EJS templating for dynamic views
- Static asset serving (CSS, JS, images)
- Apple Pay support for payments

## Technologies Used
- Node.js
- Express
- EJS
- dotenv
- body-parser

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd salsaCandela
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `config` directory with the following variables:
   ```env
   PORT=3000
   # Add other environment variables as needed
   ```

### Running the Application
- For development (with auto-reload):
  ```bash
  npm run dev
  ```
- For production:
  ```bash
  npm start
  ```

The server will run on the port specified in your `.env` file (default: 3000).

## Project Structure
```
├── controllers/        # Route controllers
├── routes/             # Express route definitions
├── views/              # EJS templates
├── public/             # Static assets (CSS, JS, images)
├── config/             # Environment configuration
├── server.js           # Main server file
├── package.json        # Project metadata and scripts
├── faq.md              # Frequently Asked Questions
```

## Main Routes
- `/` — Home page
- `/salsa` — Salsa classes info
- `/bachata` — Bachata classes info
- `/particulares` — Private classes info
- `/fiesta` — Party info
- `/faq` — Frequently Asked Questions
- `/contacto` — Contact page
- `/confirmacion` — Confirmation page
- `/boletos/:referralCode?` — Party ticket redirect
- `/checkout*` — Class registration redirects

## Static Assets
All static files (CSS, JS, images) are served from the `public` directory.

## FAQ
See [faq.md](faq.md) for detailed information about the academy, classes, parties, and more.

## Contact
- Email: clasescandela@gmail.com
- Website: [https://www.salsacandela.net/](https://www.salsacandela.net/)
- Instagram: [@salsa_candela](https://www.instagram.com/salsa_candela/)
- Facebook: [Salsaycandela](https://www.facebook.com/Salsaycandela)
- YouTube: [SalsayCandela](https://www.youtube.com/@SalsayCandela)
- Phone: 55-4144-3745

## License
Proprietary. All rights reserved. 