# Specification: Auth Guard & Login Feedback

## Overview
Questa track prevede due obiettivi principali:
1. Implementazione di una Guard funzionale `CanActivate` per proteggere le rotte Matches, Lists e Messages.
2. Integrazione di feedback visuali (Toast) nel flusso di autenticazione per migliorare l'UX.

## Functional Requirements
- **Auth Guard (`core/guards/auth.guard.ts`):**
    - Funzione `CanActivateFn` che verifica `accountService.currentUser()`.
    - Se autenticato: permette l'accesso.
    - Se NON autenticato: mostra Toast errore ("Devi essere loggato per accedere a questa sezione") e reindirizza alla Home.
- **Login Feedback (in `Nav` component):**
    - Al login con successo: mostra Toast successo ("Login effettuato con successo").
    - In caso di errore login: mostra Toast errore con il messaggio appropriato.

## Technical Details
- **Dipendenze:** `AccountService`, `ToastService`, `Router`.
- **Rotte da proteggere:** `matches`, `lists`, `messages`.

## Acceptance Criteria
- [ ] Accesso a `/matches`, `/lists`, `/messages` negato agli utenti anonimi.
- [ ] Toast di errore e redirect alla Home quando la navigazione è bloccata dalla guard.
- [ ] Toast verde di successo visibile immediatamente dopo un login corretto.
- [ ] La navigazione verso le rotte protette è permessa dopo il login.
