# Specification: Client Routing & Feature Components

## Overview
Questa track prevede la creazione della struttura di navigazione principale per l'applicazione client. Verranno creati quattro nuovi componenti nella cartella `src/app/features` e configurate le relative rotte nel file `app.routes.ts`.

## Functional Requirements
- **Creazione Componenti:**
    - `MemberListComponent` in `features/members/member-list`
    - `MemberDetailedComponent` in `features/members/member-detailed`
    - `ListsComponent` in `features/lists/lists`
    - `MessagesComponent` in `features/messages/messages`
- **Configurazione Routing:**
    - `/members` -> `MemberListComponent`
    - `/members/:id` -> `MemberDetailedComponent`
    - `/lists` -> `ListsComponent`
    - `/messages` -> `MessagesComponent`
- **Stile Componenti:** Ogni componente deve avere file separati per template HTML, stili CSS e logica TypeScript (Standalone components).

## Non-Functional Requirements
- **Organizzazione:** I componenti devono essere organizzati sotto la directory `features` come richiesto.
- **Convenzioni:** Seguire le best practices di Angular per il routing e la generazione dei componenti.

## Acceptance Criteria
- [ ] I quattro componenti sono stati generati correttamente nelle cartelle specificate.
- [ ] La navigazione agli URL `/members`, `/members/1`, `/lists` e `/messages` visualizza i rispettivi componenti.
- [ ] L'applicazione compila senza errori dopo l'aggiunta delle rotte.

## Out of Scope
- Implementazione della logica di business o UI dettagliata all'interno dei nuovi componenti (saranno placeholder).
- Integrazione di guardie di autenticazione (AuthGuard) - posticipata.
- Aggiornamento dei link nella Navbar esistente - posticipato.
