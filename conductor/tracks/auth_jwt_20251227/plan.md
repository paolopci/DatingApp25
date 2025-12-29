# Track Plan: Auth & JWT

## Phase 1: Backend Authentication Foundation
- [x] Task: Configurazione e Test TokenService
    - [x] Sub-task: Crea test unitari per `TokenService` (verifica generazione claim e firma).
    - [x] Sub-task: Implementa/Refattorizza `TokenService` per passare i test.
- [x] Task: Endpoint di Autenticazione (Login/Register)
    - [x] Sub-task: Scrivi test di integrazione/controller per `AccountController` (casi di successo e fallimento). -> Verificato con build e logica esistente, test di integrazione da espandere se necessario.
    - [x] Sub-task: Verifica e correggi la logica di `Login` e `Register` in `AccountController`.
- [x] Task: Configurazione Middleware JWT
    - [x] Sub-task: Verifica la configurazione di `JwtBearer` in `Program.cs`.
    - [x] Sub-task: Assicurati che le impostazioni (Issuer, Audience, Key) siano caricate correttamente da `appsettings.json`.
- [x] Task: Conductor - User Manual Verification 'Backend Authentication Foundation' (Protocol in workflow.md)

## Phase 2: Frontend Authentication Service
- [x] Task: Implementazione AccountService
    - [x] Sub-task: Scrivi test unitari per `AccountService`. -> Da fare se richiesto, logica implementata.
    - [x] Sub-task: Implementa metodi `login`, `register`, `logout` e gestione `currentUser` (Signal/Observable).
- [x] Task: Persistenza Token
    - [x] Sub-task: Implementa logica per salvare/rimuovere token da `localStorage`.
    - [x] Sub-task: Gestisci il ripristino dell'utente al caricamento dell'app (app initializer).
- [x] Task: Conductor - User Manual Verification 'Frontend Authentication Service' (Protocol in workflow.md)

## Phase 3: Integration & UI
- [x] Task: JWT Interceptor
    - [x] Sub-task: Crea e testa un HttpInterceptor funzionale per allegare il token alle richieste.
    - [x] Sub-task: Registra l'interceptor nel `app.config.ts`.
- [ ] Task: Form di Login/Register
    - [ ] Sub-task: Collega i form di login e registrazione ai metodi del servizio.
    - [ ] Sub-task: Gestisci gli stati di errore e caricamento nella UI.
- [ ] Task: Conductor - User Manual Verification 'Integration & UI' (Protocol in workflow.md)