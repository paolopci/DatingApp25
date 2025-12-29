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
- [~] Task: Form Login Inline
    - [ ] Sub-task: Aggiungi input username/password e bottone login nella parte destra.
    - [ ] Sub-task: Stile degli input per adattarsi alla navbar scura/chiara.
- [ ] Task: Integrazione Mock Auth
    - [ ] Sub-task: Simula un login (console.log) al submit del form.
    - [ ] Sub-task: Prepara il binding per `accountService.login()` (da implementare nel track Auth, qui usiamo un placeholder o mock).
- [ ] Task: Conductor - User Manual Verification 'Login Form (Guest View)' (Protocol in workflow.md)

## Phase 3: Authenticated View & Responsive
- [ ] Task: Navigazione Utente Loggato
    - [ ] Sub-task: Aggiungi link (Matches, Lists, Messages) visibili solo se `loggedIn = true` (usa variabile temporanea o Mock Service).
    - [ ] Sub-task: Aggiungi Dropdown User Menu (Edit Profile, Logout).
- [ ] Task: Responsive Design
    - [ ] Sub-task: Gestione menu mobile (hamburger) per schermi piccoli.
    - [ ] Sub-task: Verifica adattamento form di login su mobile (o nascondilo in favore di un link "Login").
- [ ] Task: Conductor - User Manual Verification 'Authenticated View & Responsive' (Protocol in workflow.md)
