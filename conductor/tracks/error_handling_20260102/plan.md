# Plan: Error Handling Centralizzato

## Phase 1: Setup & Infrastructure
- [x] Task: Creare i componenti `NotFoundComponent` e `ServerErrorComponent`. [3226bc7]
    - Dettagli: Generare i componenti, aggiungerli alle rotte dell'app (`app.routes.ts`) e creare un layout di base.
- [x] Task: Verificare e predisporre `ToastService`. [3226bc7]
    - Dettagli: Assicurarsi che il servizio custom sia pronto all'uso e importato correttamente.

## Phase 2: Error Interceptor Implementation
- [x] Task: Implementare la logica base per `400` e `401`. [b19713a]
    - Dettagli: Aggiornare `error-interceptor.ts` per gestire questi codici usando `ToastService`.
- [x] Task: Implementare la gestione `404`. [b19713a]
    - Dettagli: Aggiungere il reindirizzamento al router `/not-found`.
- [x] Task: Implementare la gestione `500` con State Transfer. [b19713a]
    - Dettagli: Reindirizzare a `/server-error` passando `error.error` (dettagli eccezione) nel `NavigationExtras`.
    - Dettagli: Aggiornare `ServerErrorComponent` per leggere e mostrare lo stato del router (se presente).

## Phase 3: Integration & Testing
- [x] Task: Integrare l'interceptor in `app.config.ts`. [a727d05]
    - Dettagli: Assicurarsi che `provideHttpClient(withInterceptors([errorInterceptor]))` sia configurato.
- [x] Task: Verifica manuale con `TestErrors`. [a727d05]
    - Dettagli: Utilizzare i pulsanti del componente esistente per scatenare gli errori e verificare il comportamento UI.

## Phase 4: Finalization
- [x] Task: Refactoring e pulizia. [a727d05]
    - Dettagli: Rimuovere log non necessari e verificare il rispetto dello stile del codice.
- [x] Task: Conductor - User Manual Verification 'Finalization' (Protocol in workflow.md) [a727d05]