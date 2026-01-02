# Plan: Error Handling Centralizzato

## Phase 1: Setup & Infrastructure
- [x] Task: Creare i componenti `NotFoundComponent` e `ServerErrorComponent`. [3226bc7]
    - Dettagli: Generare i componenti, aggiungerli alle rotte dell'app (`app.routes.ts`) e creare un layout di base.
- [x] Task: Verificare e predisporre `ToastService`. [3226bc7]
    - Dettagli: Assicurarsi che il servizio custom sia pronto all'uso e importato correttamente.

## Phase 2: Error Interceptor Implementation
- [ ] Task: Implementare la logica base per `400` e `401`.
    - Dettagli: Aggiornare `error-interceptor.ts` per gestire questi codici usando `ToastService`.
- [ ] Task: Implementare la gestione `404`.
    - Dettagli: Aggiungere il reindirizzamento al router `/not-found`.
- [ ] Task: Implementare la gestione `500` con State Transfer.
    - Dettagli: Reindirizzare a `/server-error` passando `error.error` (dettagli eccezione) nel `NavigationExtras`.
    - Dettagli: Aggiornare `ServerErrorComponent` per leggere e mostrare lo stato del router (se presente).

## Phase 3: Integration & Testing
- [ ] Task: Integrare l'interceptor in `app.config.ts`.
    - Dettagli: Assicurarsi che `provideHttpClient(withInterceptors([errorInterceptor]))` sia configurato.
- [ ] Task: Verifica manuale con `TestErrors`.
    - Dettagli: Utilizzare i pulsanti del componente esistente per scatenare gli errori e verificare il comportamento UI.

## Phase 4: Finalization
- [ ] Task: Refactoring e pulizia.
    - Dettagli: Rimuovere log non necessari e verificare il rispetto dello stile del codice.
- [ ] Task: Conductor - User Manual Verification 'Finalization' (Protocol in workflow.md)