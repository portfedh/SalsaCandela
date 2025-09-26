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
2. **Redirect Routes**: Handle form submissions and redirect to external admin system

Key redirect destinations:

- Class registrations → `https://admin.salsa-candela.com/classstripeform`
- Party tickets → `https://admin.salsa-candela.com/fiesta/boletos`
- Private classes → `https://admin.salsa-candela.com/clases-particulares/inscripcion-stripe`

### Controller Pattern

Controllers use a `renderView()` helper function to reduce boilerplate for simple template rendering. All redirect handlers include specific query parameters and registration keys.

### View Structure

- **Main views**: Located in `/views/` (index, salsa, bachata, party, etc.)
- **Partials**: Located in `/views/partials/` for reusable components
  - Headers, footers, navigation
  - Responsive table components for mobile/desktop
  - Script includes and maps

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

- **Apple Pay Support**: Serves domain association file for Apple Pay merchant verification
- **SEO**: Includes sitemap.xml serving
- **Error Handling**: Basic middleware for 500 errors

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
