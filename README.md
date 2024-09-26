# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

26sept - Event Tracking Övning:

Förstå och implementera händelser(events) i Google Tag Manager och React.

Dataanalys och Visualisering: Lära sig att skapa en koppling som fungerar och genererar data till Google Analytics. Ni ska titta runt i Analytics och Google Tag Manager för att bli bättre på att hitta och se data, setting osv..

I branchen och koden så gjorde Mandus:

- Skickar en händelse view_product till dataLayer med anpassade dimensioner som produkt-ID, namn, kategori och pris.

- Konfigurera i Google Tag Manager:
  Skapade en Data Layer Variable för varje anpassad dimension:
  product_id
  product_name
  product_category
  product_price

- Skapa en Trigger

- Skapa en Tagg

- Tips:

Använd GTM
Preview Mode för att testa att händelsen skickas korrekt.
Kontrollera i Google Analytics DebugView att händelsen och parametrarna tas emot.
