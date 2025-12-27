# Track Specification: Auth & JWT

## Goal
Implementare un sistema di autenticazione robusto e sicuro utilizzando JSON Web Tokens (JWT). Questo track copre sia l'emissione e la validazione dei token sul backend .NET, sia la gestione della sessione utente e degli interceptor HTTP sul frontend Angular.

## Core Requirements
- **Backend:**
    - Verifica che il servizio di token (`TokenService`) generi token validi con le claim appropriate.
    - Configurazione corretta del middleware di autenticazione in `Program.cs`.
    - Endpoint di Login e Register funzionanti e testati.
- **Frontend:**
    - Servizio `AccountService` per gestire login, register e logout.
    - Persistenza del token nel `localStorage`.
    - Gestione dello stato dell'utente corrente tramite `Observable` / `Signal`.
    - Interceptor HTTP per allegare il token JWT alle richieste in uscita.

## Testing Strategy
- **Backend:** Test unitari con xUnit e FluentAssertions per `TokenService` e controller.
- **Frontend:** Test unitari con Vitest per `AccountService`.
