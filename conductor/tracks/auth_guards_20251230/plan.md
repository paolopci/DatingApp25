# Track Plan: Auth Guard & Login Feedback

## Phase 1: Auth Guard Development (TDD) [checkpoint: c683b61]
- [x] Task: Creazione Auth Guard (2fd4c77)
    - [x] Sub-task: Scrivi test d'unità (Red Phase) per `auth.guard.ts` (casi: autenticato, non autenticato).
    - [x] Sub-task: Implementa la guard funzionale in `core/guards/auth.guard.ts`.
    - [x] Sub-task: Verifica il passaggio dei test (Green Phase).
- [ ] Task: Conductor - User Manual Verification 'Auth Guard Development' (Protocol in workflow.md)

## Phase 2: Router Integration [checkpoint: 20c6eda]
- [x] Task: Protezione delle Rotte (b4a4e1a)
    - [x] Sub-task: Applica `authGuard` alle rotte `matches`, `lists` e `messages` in `app.routes.ts`.
    - [x] Sub-task: Verifica integrità delle rotte esistenti.
- [ ] Task: Conductor - User Manual Verification 'Router Integration' (Protocol in workflow.md)

## Phase 3: Login UX Improvements
- [x] Task: Integrazione Toast nel Login (b3b1c2f)
    - [x] Sub-task: Inserisci chiamata a `toastService.success` nel metodo `login` di `Nav`.
    - [x] Sub-task: Aggiungi gestione errori con `toastService.error` nel login.
- [x] Task: Test di Verifica Finale (b3b1c2f)
    - [x] Sub-task: Test manuale: tentativo accesso rotta protetta da anonimo (atteso: redirect + toast errore).
    - [x] Sub-task: Test manuale: login (atteso: toast successo + accesso permesso).
- [ ] Task: Conductor - User Manual Verification 'Login UX Improvements' (Protocol in workflow.md)
