# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Salsa Candela is a Node.js/Express web application for a dance academy in CDMX. It's a content-focused site providing information about salsa and bachata classes, parties, and registration redirects to external payment systems.

## CRITICAL CODING RULES

- **NEVER use `!important` in CSS** - Always use more specific selectors or additional classes instead
- Follow existing code patterns and maintain clean, maintainable styles

## Development Commands

### Running the Application

- **Development with auto-reload**: `npm run dev` (uses nodemon)
- **Production**: `npm start`
- **Test**: No tests configured - shows error message
- **Browser Testing**: Playwright MCP available for end-to-end testing

### Environment Configuration

- Environment variables are loaded from `./config/.env`
- Required variables: `PORT` (defaults to 3000 if not set)

## Architecture

### Core Structure

This is a traditional Express.js MVC application with the following pattern:

- **server.js**: Main application entry point, Express setup
- **routes/**: Express route definitions (currently only `home.js`)
- **controllers/**: Route handlers (currently only `home.js`)
- **views/**: EJS templates with partials structure
- **public/**: Static assets (CSS, JS, images)

### Route Architecture

The application follows two main patterns:

1. **View Routes**: Render EJS templates for informational pages
   - Main pages: index, salsa, bachata, party (fiesta), FAQ, contact, individual classes (particulares)
   - Informational pages: siguiente, sucursales, guia-codi, aviso-privacidad, politica-devoluciones
   - Confirmation pages: confirmacion, email-confirmation, password reset (cambiar-contrasena)

2. **Redirect Routes**: Handle form submissions and redirect to external admin system
   - General class registration: `/checkout`, `/inscripcion-clases`
   - Salsa classes by location: `/checkout-salsa-{xola|claveria|valle|coapa|satelite}`
   - Bachata classes by location: `/checkout-bachata-{xola|claveria|valle|coapa|satelite}`
   - Party tickets: `/boletos/:referralCode?`
   - Private classes: `/info-particulares`

Key redirect destinations:

- Class registrations → `https://admin.salsa-candela.com/classstripeform`
- Party tickets → `https://admin.salsa-candela.com/fiesta/boletos`
- Private classes → `https://admin.salsa-candela.com/clases-particulares/inscripcion-stripe`

### Controller Pattern

Controllers use a `renderView()` helper function to reduce boilerplate for simple template rendering. All redirect handlers include specific query parameters and registration keys.

### View Structure

- **Main views**: Located in `/views/`
  - Home: index.ejs
  - Class pages: salsa.ejs, bachata.ejs, individual_classes.ejs, siguiente.ejs
  - Party: party.ejs, boletos.ejs
  - Info pages: faq.ejs, sucursales.ejs, guia-codi.ejs
  - Legal: aviso-privacidad.ejs, politica-devoluciones.ejs
  - Confirmations: confirmation.ejs, email-confirmation.ejs, cambiar-contrasena.ejs

- **Partials**: Located in `/views/partials/` for reusable components
  - **Headers**: store_head.ejs, codi_head.ejs, sucursales_head.ejs, page_header.ejs
  - **Navigation**: store_header.ejs, store_header_with_custom_mobile.ejs
  - **Footer**: store_footer.ejs
  - **Tables**: store_salsa_table_full.ejs, store_salsa_table_mobile.ejs, store_bachata_table_full.ejs, store_bachata_table_mobile.ejs
  - **Scripts**: store_js_scripts.ejs, custom_mobile_nav_script.ejs, custom_mobile_nav_styles.ejs
  - **Other**: store_map.ejs, payment_modal.ejs

### Static Assets Organization

- **CSS**: Multiple stylesheets for different pages (`style_*.css`)
- **Images**: Organized by type (logo, class, party, banners)
- **JavaScript**: Mix of vendor libraries and custom scripts

## Key Files

### Configuration

- `server.js`: Main server configuration and Express setup
- `config/.env`: Environment variables (not tracked in git)

### Routes & Controllers

- `routes/home.js`: All application routes and redirects
- `controllers/home.js`: Route handlers with consistent pattern

### Important Features

- **Apple Pay Support**: Serves domain association file at `/.well-known/apple-developer-merchantid-domain-association` for Apple Pay merchant verification
- **Payment Modal**: Reusable payment modal partial for redirecting to admin system with referral code support
- **Location-based Class Registration**: Separate routes for each dance studio location (Xola, Claveria, Valle, Coapa, Satélite)
- **SEO**: Includes sitemap.xml serving at `/sitemap.xml`
- **Error Handling**: Basic middleware for 500 errors in routes

### External Dependencies

The application heavily relies on an external admin system (`admin.salsa-candela.com`) for payment processing and registration handling.

### Testing

- **Unit/Integration Tests**: No test suite configured - the test script just shows an error message
- **Browser Testing**: Playwright MCP available for end-to-end testing and browser automation

### Coding Guidelines

#### CSS Best Practices

- **Never use `!important` in CSS** - Instead, use more specific selectors or additional classes to override styles
  - Example: Use `.banner-btn.compact-btn` instead of `.banner-btn` with `!important`
  - This maintains clean, maintainable CSS and follows specificity rules
- Follow existing CSS patterns and class naming conventions

#### EJS Templates

- Use partials for reusable components to maintain DRY principles
- Page-specific head elements are managed through dedicated partials (store_head.ejs, codi_head.ejs, sucursales_head.ejs)
- Responsive tables use separate partials for mobile and desktop views
- All pages include consistent header/footer structure through partials

#### Redirect Patterns

- All registration redirects include necessary query parameters and registration keys
- Party ticket redirects support optional referral codes via URL parameters
- Payment modal partial handles redirect logic with referral code support
