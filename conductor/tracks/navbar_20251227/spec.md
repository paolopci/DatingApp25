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
- **Assets:** Utilizzare l'icona `users` in formato SVG per la navigazione.
  ```html
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
  ```
  L'uso di SVG permetterà una gestione dinamica dei colori tramite Tailwind CSS.

## Strategia di Test
- **Unit Test:** Verificare che il form di login appaia solo quando l'utente è sloggato.
- **Unit Test:** Verificare che i link di navigazione appaiano solo dopo il login.
