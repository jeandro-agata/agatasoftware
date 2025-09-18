# WebCraft - Website Bouwer Advertentie Website

Een moderne, minimalistisch gestijlde advertentie website voor een websitebouwer, gebouwd met Next.js en Tailwind CSS.

## 🚀 Features

- **Clean URLs** - Geen .html extensies in de URL
- **Responsive Design** - Perfect op alle apparaten
- **Minimalistisch Wit Thema** - Professionele uitstraling
- **Nederlandse Content** - Volledig in het Nederlands
- **SEO Geoptimaliseerd** - Voor betere zoekresultaten
- **Modulaire Structuur** - Eenvoudig aan te passen

## 📁 Pagina's

- **Homepagina** (`/`) - Hero sectie, diensten en call-to-action
- **Templates** (`/templates`) - Overzicht van beschikbare website templates
- **Contact** (`/contact`) - Contactformulier en bedrijfsinformatie

## 🛠️ Technologieën

- **Next.js 14** - React framework voor productie
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

## 🚀 Installatie & Starten

1. **Dependencies installeren:**
   ```bash
   npm install
   ```

2. **E-mail configuratie (TransIP):**
   ```bash
   # Kopieer het voorbeeld bestand
   cp env.example .env.local
   
   # Bewerk .env.local en vul je SMTP gegevens in:
   # SMTP_USER=info@agatasoftware.nl
   # SMTP_PASS=jouw-email-wachtwoord
   ```

3. **Development server starten:**
   ```bash
   npm run dev
   ```

4. **Website bekijken:**
   Open [http://localhost:3000](http://localhost:3000) in je browser

## 📦 Build voor Productie

```bash
npm run build
npm start
```

## 🎨 Aanpassingen Maken

### Header & Footer
De header en footer zijn gecentraliseerd in:
- `components/Header.tsx`
- `components/Footer.tsx`

### Styling
- Globale styles: `styles/globals.css`
- Tailwind config: `tailwind.config.js`
- Kleuren en thema's kunnen eenvoudig aangepast worden

### Content
- Homepagina: `pages/index.tsx`
- Templates: `pages/templates.tsx`
- Contact: `pages/contact.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Features

- Meta tags geoptimaliseerd
- Semantic HTML structuur
- Clean URLs zonder extensies
- Responsive images
- Fast loading times

## 📧 E-mail Functionaliteit

Het contactformulier verstuurt automatisch:
- **Bevestigingsmail naar klant** - Met reactietijd en bedrijfsinformatie
- **Notificatiemail naar eigenaar** - Met alle formuliergegevens

### SMTP Configuratie (TransIP)
```bash
# In .env.local:
SMTP_USER=info@agatasoftware.nl
SMTP_PASS=jouw-email-wachtwoord
```

### E-mail Templates
- Professionele HTML templates
- Responsive design voor mobiel
- Automatische bevestiging en notificaties

## 🚀 Deployment op TransIP

### Node.js Hosting (Aanbevolen)
1. **Configuratie aanpassen:**
   - `output: 'export'` is uitgeschakeld voor API routes
   - E-mail API endpoint is beschikbaar

2. **Build en deploy:**
   ```bash
   npm install
   npm run build
   npm start
   ```

3. **Environment variables instellen:**
   - Kopieer `env.example` naar `.env.local`
   - Vul je SMTP credentials in

### Statische Hosting
Voor statische hosting zonder API routes:
1. Uncomment `output: 'export'` in `next.config.js`
2. Gebruik externe services voor contactformulier

## 🔒 Beveiliging

- SMTP credentials worden veilig opgeslagen in environment variables
- HTTPS wordt ondersteund voor veilige communicatie
- Geen gevoelige data wordt opgeslagen in de frontend

## 📞 Contact Informatie

Voor vragen over deze website of custom development:
- E-mail: info@webcraft.nl
- Telefoon: +31 6 12345678
- Adres: Keizersgracht 241, Amsterdam

---

Gemaakt met ❤️ door WebCraft
