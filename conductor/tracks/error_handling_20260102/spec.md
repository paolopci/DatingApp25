# Specification: Error Handling Centralizzato (Error Interceptor)

## Overview
L'obiettivo di questa track è completare l'implementazione dell'interceptor `error.interceptor.ts` per gestire in modo centralizzato gli errori HTTP restituiti dall'API. Questo garantirà un feedback utente coerente e una gestione pulita delle eccezioni in tutta l'applicazione.

## Functional Requirements
- **Intercettazione Errori HTTP:** L'interceptor deve catturare le risposte di errore e agire in base allo status code.
- **Gestione Errori Specifici:**
  - **400 Bad Request:** 
    - Se presente un array di errori di validazione (es. registrazione), lanciare l'eccezione per lasciarla gestire al componente.
    - Altrimenti, mostrare una notifica Toast con il messaggio di errore.
  - **401 Unauthorized:** Mostrare una notifica Toast informativa.
  - **404 Not Found:** Reindirizzare l'utente alla rotta `/not-found`.
  - **500 Internal Server Error:** Reindirizzare l'utente alla rotta `/server-error`, passando i dettagli dell'eccezione (model `ApiException`) tramite lo stato del Router per la visualizzazione.
- **Integrazione UI:**
  - Utilizzo del `ToastService` esistente (basato su DaisyUI) per le notifiche.
  - Creazione dei componenti `NotFoundComponent` e `ServerErrorComponent` per gestire i reindirizzamenti.
- **Testing:** Validazione del comportamento tramite il componente esistente `TestErrors`.

## Non-Functional Requirements
- **Clean Code:** Utilizzare `catchError` di RxJS per gestire il flusso degli errori.
- **User Experience:** Fornire messaggi chiari e non tecnici per gli errori comuni, riservando i dettagli tecnici alla pagina di errore dedicata (solo se disponibili).

## Acceptance Criteria
- [ ] L'interceptor intercetta correttamente gli errori HTTP 400, 401, 404 e 500.
- [ ] L'errore 400 di validazione viene propagato correttamente al chiamante.
- [ ] Le rotte `/not-found` e `/server-error` sono funzionanti e visualizzano i contenuti appropriati.
- [ ] Il `ToastService` viene invocato correttamente per errori 400 (non validazione) e 401.
- [ ] I test manuali tramite il componente `TestErrors` confermano il comportamento atteso.

## Out of Scope
- Gestione di errori di rete (es. server offline) oltre il timeout standard.
- Implementazione di logica di "Retry" automatica per le richieste fallite.