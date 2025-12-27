# Track Specification: Responsive Navbar & Theme Switcher

## Obiettivo
Creare una barra di navigazione in stile "Course Standard" (DatingApp) ma modernizzata con TailwindCSS/DaisyUI. La navbar deve gestire dinamicamente lo stato di autenticazione (visibile/nascosto) e includere lo switcher del tema.

## Requisiti Funzionali
- **Stato "Non Autenticato":**
    - Visualizzare solo il Logo (sinistra).
    - Visualizzare il Form di Login inline (input username, password e bottone login) allineato a destra.
    - Nascondere i link di navigazione principali.
- **Stato "Autenticato":**
    - Visualizzare Logo e Link di Navigazione (Matches, Lists, Messaggi) a sinistra.
    - Visualizzare il Menu Utente (Dropdown con "Edit Profile", "Logout") a destra.
    - Visualizzare Immagine/Benvenuto utente.
    - Nascondere il form di login.
- **Componenti Comuni:**
    - Switcher Tema (Sole/Luna) sempre visibile (o posizionato opportunamente).
    - Responsività: Su mobile, raggruppare i link in un menu a discesa/hamburger.

## Requisiti Tecnici
- **Angular:** Utilizzo di `*ngIf` (o `@if`) per mostrare/nascondere elementi in base allo stato `accountService.currentUser$`.
- **Forms:** Template-driven form per il login rapido nella navbar.
- **Styling:** DaisyUI Navbar component.
- **Assets:** Utilizzare l'icona `users` in formato SVG (codice fornito dall'utente) per la navigazione. L'uso di SVG permetterà una gestione dinamica dei colori tramite Tailwind CSS.

## Strategia di Test
- **Unit Test:** Verificare che il form di login appaia solo quando l'utente è sloggato.
- **Unit Test:** Verificare che i link di navigazione appaiano solo dopo il login.
