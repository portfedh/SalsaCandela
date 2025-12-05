# Analytics Tracking Documentation

This document outlines all analytics tracking implemented in the Salsa Candela website.

## Analytics Platforms

### Google Analytics 4
- **Property ID**: `G-CVYCZ5NTSK`
- **Implementation**: Google Tag Manager (gtag.js)
- **Location**: Included in all page head partials (store_head.ejs, codi_head.ejs, sucursales_head.ejs, siguiente_head.ejs)

### TikTok Pixel
- **Pixel ID**: `D459FP3C77U6O1UKP1RG`
- **Implementation**: TikTok Analytics Object
- **Location**: Included in all page head partials

## Event Tracking Structure

All Google Analytics events follow this structure:
```javascript
gtag('event', 'event_name', {
  'event_category': 'Category Name',
  'event_label': 'Specific Label',
  'value': numeric_value
});
```

## Tracked Events by Category

### 1. Purchase Intent Events
**Event Name**: `purchase_intent`

Tracks when users click "Comprar" (Buy) buttons across the site.

| Event Label | Location | File | Value |
|------------|----------|------|-------|
| Salsa Individual | Salsa page pricing table | views/salsa.ejs:207 | 1 |
| Salsa Pareja | Salsa page pricing table | views/salsa.ejs:261 | 1 |
| Bachata Individual | Bachata page pricing table | views/bachata.ejs:170 | 1 |
| Bachata Pareja | Bachata page pricing table | views/bachata.ejs:227 | 1 |
| Paquete 1 Clase | Private classes page | views/clases-individuales.ejs:120 | 600 |
| Paquete 5 Clases | Private classes page | views/clases-individuales.ejs:142 | 2500 |
| Paquete 10 Clases | Private classes page | views/clases-individuales.ejs:164 | 4000 |
| Pase Individual | Homepage pricing section | views/index.ejs:210 | 1 |
| Pase Pareja | Homepage pricing section | views/index.ejs:258 | 1 |
| Boletos Button Homepage | Homepage party section | views/index.ejs:344 | 1 |

**Event Categories**:
- `Group Course` - Group salsa/bachata classes
- `Private Classes` - Individual instruction packages
- `Pricing` - General pricing page interactions
- `Party` - Party ticket purchases

### 2. Payment Method Selection
**Event Name**: `payment_method_selected`

Tracks which payment method users select in the payment modal.

**Location**: views/partials/payment_modal.ejs:171

**Custom Parameters**:
```javascript
{
  'event_category': 'Party Ticket Purchase',
  'event_label': 'Party - CoDi' or 'Party - Tarjeta',
  'payment_method': 'codi' or 'tarjeta',
  'purchase_type': 'party_ticket',
  'has_referral_code': 'yes' or 'no'
}
```

### 3. Branch Registration Clicks
**Event Name**: `branch_registration_click`

Tracks clicks on "Inscribirme" (Register) buttons for specific locations.

**Event Category**: `Salsa Page`

| Event Label | Location | File |
|------------|----------|------|
| Inscribirme Xola | Salsa page - Xola location | views/salsa.ejs:301 |
| Inscribirme Valle | Salsa page - Valle location | views/salsa.ejs:348 |
| Inscribirme Satelite | Salsa page - Satélite location | views/salsa.ejs:395 |
| Inscribirme Claveria | Salsa page - Clavería location | views/salsa.ejs:439 |
| Inscribirme Coapa | Salsa page - Coapa location | views/salsa.ejs:481 |

### 4. Map Interactions
**Event Name**: `map_interaction`

Tracks when users click on map links for each location.

**Event Category**: `Salsa Page` / `Map Section`

| Event Label | Location | File |
|------------|----------|------|
| Map Click Xola | Salsa page - Xola map | views/salsa.ejs:316 |
| Map Click Valle | Salsa page - Valle map | views/salsa.ejs:363 |
| Map Click Satelite | Salsa page - Satélite map | views/salsa.ejs:410 |
| Map Click Claveria | Salsa page - Clavería map | views/salsa.ejs:454 |
| Map Click Coapa | Salsa page - Coapa map | views/salsa.ejs:496 |
| Ver Todas las Sucursales | Map section button | views/partials/store_map.ejs:28 |

### 5. Navigation Events
**Event Name**: `nav_registration_click`

Tracks main navigation registration button clicks.

**Event Category**: `Navigation`

| Event Label | Location | File |
|------------|----------|------|
| Inscribirme Desktop | Desktop navigation | views/partials/store_navbar.ejs:36 |
| Inscribirme Mobile | Mobile navigation | views/partials/store_navbar.ejs:68 |

**Event Name**: `class_card_click`

Tracks clicks on class type cards on homepage.

**Event Category**: `Homepage`

| Event Label | File |
|------------|------|
| Clases de Salsa Card | views/index.ejs:92 |
| Clases de Bachata Card | views/index.ejs:109 |
| Clases Particulares y Eventos Card | views/index.ejs:126 |

**Event Name**: `navigation_click`

**Event Category**: `Map Section`

| Event Label | File |
|------------|------|
| Ver Todas las Sucursales | views/partials/store_map.ejs:28 |

### 6. Contact & Social Media Clicks
**Event Name**: `contact_click`

Tracks footer contact method clicks.

**Event Category**: `Footer`

| Event Label | Type | File |
|------------|------|------|
| WhatsApp Phone | WhatsApp link | views/partials/store_footer.ejs:16 |
| Email | Email link | views/partials/store_footer.ejs:31 |
| Google Maps Address | Location link | views/partials/store_footer.ejs:36 |

**Event Name**: `social_click`

Tracks social media link clicks.

**Event Category**: `Footer`

| Event Label | Platform | File |
|------------|----------|------|
| Facebook | Facebook link | views/partials/store_footer.ejs:21 |
| Instagram | Instagram link | views/partials/store_footer.ejs:26 |

### 7. Legal & Outbound Links
**Event Name**: `legal_link_click`

Tracks clicks on legal policy links.

**Event Category**: `Footer`

| Event Label | File |
|------------|------|
| Aviso de Privacidad | views/partials/store_footer.ejs:53 |
| Política de Devoluciones | views/partials/store_footer.ejs:54 |

**Event Name**: `outbound_link_click`

Tracks clicks on external links.

**Event Category**: `Footer`

| Event Label | Destination | File |
|------------|-------------|------|
| BiteSize | Attribution link | views/partials/store_footer.ejs:70 |

### 8. Information Requests
**Event Name**: `info_request`

Tracks when users request more information.

**Event Category**: `Pricing`

| Event Label | Location | File |
|------------|----------|------|
| Clases Particulares Info | Homepage private classes | views/index.ejs:291 |

## Viewing Analytics Data

### Access Google Analytics
1. Go to https://analytics.google.com/
2. Sign in with authorized Google account
3. Select property: `G-CVYCZ5NTSK`

### Key Reports

**Reports → Engagement → Events**
- View all custom events and their counts
- Filter by event name to see specific interactions

**Reports → Engagement → Conversions**
- Track conversion events (if configured)
- Recommended: Mark `purchase_intent` as conversion

**Reports → Realtime → Overview**
- Monitor live events as they happen

**Explore (Custom Reports)**
- Create funnels: visit → engagement → purchase
- Path analysis: user navigation patterns
- Event analysis: breakdown by label, category, value

## Recommended Custom Reports

1. **Branch Performance**
   - Dimension: Event Label (filtered for branch names)
   - Metric: Event Count
   - Shows which locations get most interest

2. **Purchase Funnel**
   - Steps: Page View → Class Card Click → Purchase Intent → Payment Method Selected
   - Identifies drop-off points

3. **Payment Method Preference**
   - Dimension: Payment Method
   - Metric: Event Count
   - Shows CoDi vs Credit Card preference

4. **Social Media Effectiveness**
   - Dimension: Event Label (social platforms)
   - Metric: Event Count
   - Tracks which social channels drive most engagement

## Notes

- All values for group courses default to `1` (unit count)
- Private class values represent actual package prices in MXN
- Events are tracked client-side (may be affected by ad blockers)
- TikTok Pixel tracks page views automatically via `ttq.page()`
