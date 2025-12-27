# Track Plan: Auth & JWT

## Phase 1: Backend Authentication Foundation
- [ ] Task: Configurazione e Test TokenService
    - [ ] Sub-task: Crea test unitari per `TokenService` (verifica generazione claim e firma).
    - [ ] Sub-task: Implementa/Refattorizza `TokenService` per passare i test.
- [ ] Task: Endpoint di Autenticazione (Login/Register)
    - [ ] Sub-task: Scrivi test di integrazione/controller per `AccountController` (casi di successo e fallimento).
    - [ ] Sub-task: Verifica e correggi la logica di `Login` e `Register` in `AccountController`.
- [ ] Task: Configurazione Middleware JWT
    - [ ] Sub-task: Verifica la configurazione di `JwtBearer` in `Program.cs`.
    - [ ] Sub-task: Assicurati che le impostazioni (Issuer, Audience, Key) siano caricate correttamente da `appsettings.json`.
- [ ] Task: Conductor - User Manual Verification 'Backend Authentication Foundation' (Protocol in workflow.md)

## Phase 2: Frontend Authentication Service
- [ ] Task: Implementazione AccountService
    - [ ] Sub-task: Scrivi test unitari per `AccountService` (login, logout, recupero user corrente).
    - [ ] Sub-task: Implementa metodi `login`, `register`, `logout` e gestione `currentUser` (Signal/Observable).
- [ ] Task: Persistenza Token
    - [ ] Sub-task: Implementa logica per salvare/rimuovere token da `localStorage`.
    - [ ] Sub-task: Gestisci il ripristino dell'utente al caricamento dell'app (app initializer).
- [ ] Task: Conductor - User Manual Verification 'Frontend Authentication Service' (Protocol in workflow.md)

## Phase 3: Integration & UI
- [ ] Task: JWT Interceptor
    - [ ] Sub-task: Crea e testa un HttpInterceptor funzionale per allegare il token alle richieste.
    - [ ] Sub-task: Registra l'interceptor nel `app.config.ts`.
- [ ] Task: Form di Login/Register
    - [ ] Sub-task: Collega i form di login e registrazione ai metodi del servizio.
    - [ ] Sub-task: Gestisci gli stati di errore e caricamento nella UI.
- [ ] Task: Conductor - User Manual Verification 'Integration & UI' (Protocol in workflow.md)
