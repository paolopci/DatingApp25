# Track Plan: Responsive Navbar & Theme Switcher

## Phase 1: UI Structure & Static Layout [checkpoint: 187de58]
- [x] Task: Creazione Componente Navbar (23a3876)
    - [x] Sub-task: Genera componente `nav` con Angular CLI.
    - [x] Sub-task: Implementa struttura base HTML con DaisyUI Navbar.
    - [x] Sub-task: Integra l'icona SVG `users` (Heroicons) nel layout delle sezioni principali.
    - [x] Sub-task: Aggiungi Logo e posizionamento container.
- [x] Task: Theme Switcher (23a3876)
    - [x] Sub-task: Implementa logica per il cambio tema (set attribute data-theme).
    - [x] Sub-task: Aggiungi icone Sole/Luna e gestione click.
- [x] Task: Conductor - User Manual Verification 'UI Structure & Static Layout' (Protocol in workflow.md) (187de58)

## Phase 2: Login Form (Guest View)
- [x] Task: Form Login Inline
    - [x] Sub-task: Aggiungi input username/password e bottone login nella parte destra.
    - [x] Sub-task: Stile degli input per adattarsi alla navbar scura/chiara.
- [x] Task: Integrazione Mock Auth
    - [x] Sub-task: Simula un login (console.log) al submit del form.
    - [x] Sub-task: Prepara il binding per `accountService.login()`.
- [x] Task: Conductor - User Manual Verification 'Login Form (Guest View)' (Protocol in workflow.md)

## Phase 3: Authenticated View & Responsive
- [x] Task: Navigazione Utente Loggato
    - [x] Sub-task: Aggiungi link (Matches, Lists, Messages) visibili solo se `loggedIn = true`.
    - [x] Sub-task: Aggiungi Dropdown User Menu (Edit Profile, Logout).
- [x] Task: Responsive Design
    - [x] Sub-task: Gestione menu mobile (hamburger) per schermi piccoli.
    - [x] Sub-task: Verifica adattamento form di login su mobile.
- [x] Task: Conductor - User Manual Verification 'Authenticated View & Responsive' (Protocol in workflow.md)