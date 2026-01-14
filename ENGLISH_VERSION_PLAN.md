# English Version Implementation Plan - Simple Approach

## Overview
Create an English version of the Salsa Candela website using **duplicate EJS files** for simplicity and maintainability. This approach avoids complex translation logic in templates and keeps Spanish and English versions separate.

## Architecture Decision

### Chosen Approach: Duplicate View Files
```
views/
  index.ejs          (Spanish - existing)
  index-en.ejs       (English - new)
  salsa.ejs          (Spanish - existing)
  salsa-en.ejs       (English - new)
  ... (repeat for all 16 views)
```

**Why this approach:**
- ✅ Simple and maintainable
- ✅ No translation logic in templates
- ✅ Easy to edit either language independently
- ✅ Clear separation of concerns
- ✅ No fallback checks needed
- ⚠️ Duplicate HTML structure (acceptable trade-off)

**Controllers route to appropriate file:**
```javascript
const viewFile = lang === 'en' ? 'index-en.ejs' : 'index.ejs';
res.render(viewFile, { party, activeLocation, ... });
```

---

## Implementation Stages

### Stage 1: Add Language Switcher Component ✅ SKIP
**Status:** Already completed in previous work
- Language switcher with flag icons exists in navbar
- CSS styles for desktop and mobile already implemented
- Skip this stage entirely

### Stage 2: Create English View Files
**Goal:** Duplicate all 16 Spanish view files and translate to English

**Files to create (16 total):**
1. `index-en.ejs` - Homepage
2. `salsa-en.ejs` - Salsa classes
3. `bachata-en.ejs` - Bachata classes
4. `clases-individuales-en.ejs` - Private classes
5. `siguiente-en.ejs` - Next level classes (largest file - 2,656 lines!)
6. `fiesta-en.ejs` - Party info
7. `boletos-en.ejs` - Ticket purchase
8. `faq-en.ejs` - FAQ
9. `sucursales-en.ejs` - Branch locations
10. `guia-codi-en.ejs` - CoDi payment guide
11. `confirmacion-en.ejs` - General confirmation
12. `confirmacion-email-en.ejs` - Email confirmation
13. `cambiar-contrasena-en.ejs` - Password reset
14. `aviso-privacidad-en.ejs` - Privacy policy
15. `politica-devoluciones-en.ejs` - Refund policy

**Process for each file:**
1. Copy Spanish `.ejs` file to `-en.ejs` version
2. Translate all hardcoded Spanish text to English
3. Update page titles and meta descriptions
4. Test rendering

**Priority order:**
- High: index, salsa, bachata, fiesta, boletos, sucursales
- Medium: siguiente, clases-individuales, faq
- Low: confirmation pages, policies, guides

### Stage 3: Add /en/* Routes
**Goal:** Create routes that serve English versions

**Changes to `routes/home.js`:**
```javascript
// Spanish routes (existing)
router.get("/", homeCtrl.getStoreIndex);
router.get("/salsa", homeCtrl.getStoreSalsa);
// ... etc

// English routes (new)
router.get("/en", homeCtrl.getStoreIndexEN);
router.get("/en/", homeCtrl.getStoreIndexEN);
router.get("/en/salsa", homeCtrl.getStoreSalsaEN);
router.get("/en/bachata", homeCtrl.getStoreBachataEN);
// ... create for all 16 pages
```

**Total new routes:** 16 GET routes + 2 POST routes (for forms)

### Stage 4: Update Controllers
**Goal:** Add controller methods that render English view files

**Changes to `controllers/home.js`:**
```javascript
// Add English date formatter
function getNextSaturdayDateEN() {
  // Returns "February 7, 2026" format
}

// Add English controller methods
module.exports = {
  // Spanish methods (existing)
  getStoreIndex: (req, res) => {
    res.render("index.ejs", { ... });
  },

  // English methods (new)
  getStoreIndexEN: (req, res) => {
    res.render("index-en.ejs", {
      ...sameDa ta,
      nextSaturdayDate: getNextSaturdayDateEN() // English format
    });
  },

  getStoreSalsaEN: (req, res) => {
    res.render("salsa-en.ejs", { ... });
  },
  // ... add for all 16 pages
};
```

**Total new controller methods:** 16 methods

### Stage 5: Update Language Switcher Links
**Goal:** Make language switcher work with new routes

**Update `views/partials/store_navbar.ejs`:**
```ejs
<!-- Spanish site -->
<a href="/" class="lang-flag active">
  <img src="/img/flags/es.svg" alt="ES" />
</a>
<a href="/en<%= typeof currentPath !== 'undefined' ? currentPath : '/' %>">
  <img src="/img/flags/en.svg" alt="EN" />
</a>

<!-- English site pages -->
<a href="<%= currentPath %>">
  <img src="/img/flags/es.svg" alt="ES" />
</a>
<a href="/en<%= currentPath %>" class="lang-flag active">
  <img src="/img/flags/en.svg" alt="EN" />
</a>
```

**Approach:**
- Controllers pass `currentPath` and `lang` to views
- Language switcher uses these to build correct URLs
- Active flag shows based on current language

### Stage 6: Update Sitemap (Optional)
**Goal:** Add English URLs to sitemap.xml

**Changes to `sitemap.xml`:**
```xml
<!-- Spanish URLs (existing) -->
<url>
  <loc>https://salsa-candela.com/</loc>
</url>
<url>
  <loc>https://salsa-candela.com/salsa</loc>
</url>

<!-- English URLs (new) -->
<url>
  <loc>https://salsa-candela.com/en/</loc>
</url>
<url>
  <loc>https://salsa-candela.com/en/salsa</loc>
</url>
```

### Stage 7: SEO Optimization
**Goal:** Add hreflang tags for proper SEO

**Update `views/partials/store_head.ejs`:**
```ejs
<!-- Add hreflang tags -->
<link rel="alternate" hreflang="es" href="https://salsa-candela.com<%= currentPath %>" />
<link rel="alternate" hreflang="en" href="https://salsa-candela.com/en<%= currentPath %>" />
<link rel="alternate" hreflang="x-default" href="https://salsa-candela.com<%= currentPath %>" />
```

### Stage 8: Testing & Verification
**Goal:** Comprehensive testing of both versions

**Test checklist:**
- [ ] All 16 Spanish pages still work
- [ ] All 16 English pages load correctly
- [ ] Language switcher works on all pages
- [ ] Navigation links work in both languages
- [ ] Forms submit correctly in both languages
- [ ] Party config dates display correctly (Spanish: "30 de Enero", English: "January 30")
- [ ] All styles load correctly
- [ ] Images load correctly
- [ ] No broken links
- [ ] Analytics tracking works with language parameter
- [ ] Redirect routes preserve language context

---

## Files Changed Summary

**New Files:**
- 16 English view files (`*-en.ejs`)

**Modified Files:**
- `routes/home.js` - Add 16 new routes
- `controllers/home.js` - Add 16 new controller methods + English date formatter
- `views/partials/store_navbar.ejs` - Update language switcher logic
- `views/partials/store_head.ejs` - Add hreflang tags (optional)
- `sitemap.xml` - Add English URLs (optional)

**No Changes Needed:**
- No i18n infrastructure files needed
- No translation JSON files needed
- Partials stay as-is (already work with fallbacks from previous work)
- Config files stay as-is
- Static assets unchanged

---

## Maintenance Notes

**Adding new pages in the future:**
1. Create both `page.ejs` (Spanish) and `page-en.ejs` (English)
2. Add both routes in `routes/home.js`
3. Add both controller methods in `controllers/home.js`
4. Update sitemap with both URLs

**Updating content:**
- Edit Spanish version in `page.ejs`
- Edit English version in `page-en.ejs`
- Changes are isolated and easy to track

**Benefits of this approach:**
- No complex template logic
- Easy for non-technical users to edit translations
- Clear what content is in each language
- Version control shows exactly what changed in each language
- No risk of breaking one language when editing the other

---

## Estimated Effort

**Stage 2 (Create English views):** Largest effort
- ~7,000 lines of content to translate
- Manual translation and testing per file
- Estimate: 2-3 hours per major page

**Stage 3 (Routes):** 30 minutes
**Stage 4 (Controllers):** 1 hour
**Stage 5 (Language switcher):** 30 minutes
**Stage 6-8 (SEO & Testing):** 1 hour

**Total:** Approximately 8-12 hours for complete implementation

---

## Next Steps

1. Review this plan
2. Approve or request changes
3. Begin Stage 2 (create English view files)
4. Work through stages sequentially
5. Test after each stage
6. Commit progress at each stage milestone
