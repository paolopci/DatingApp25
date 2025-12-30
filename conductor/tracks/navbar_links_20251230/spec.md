# Specification: Navbar Link Integration

## Overview
Questa track prevede il collegamento dei menu della Navbar esistente alle rotte configurate nell'applicazione. Verranno aggiornati i link per "Home" (logo), "Matches", "Lists" e "Messages" utilizzando la navigazione integrata di Angular.

## Functional Requirements
- **Integrazione `routerLink`:**
    - Logo/Home -> `/`
    - Matches -> `/members`
    - Lists -> `/lists`
    - Messages -> `/messages`
- **Stato Attivo:** Implementazione della direttiva `routerLinkActive` per evidenziare il menu corrispondente alla pagina visualizzata.
- **Navigazione SPA:** Assicurarsi che la navigazione non provochi il ricaricamento dell'intera pagina.

## Non-Functional Requirements
- **User Experience:** Il feedback visivo del menu attivo deve essere coerente con il design attuale (DaisyUI).
- **Maintainability:** Utilizzare le direttive standard di Angular Router.

## Acceptance Criteria
- [ ] Il click sul logo porta alla Home.
- [ ] Il click su "Matches" visualizza `MemberListComponent`.
- [ ] Il click su "Lists" visualizza `ListsComponent`.
- [ ] Il click su "Messages" visualizza `MessagesComponent`.
- [ ] Il menu attivo ha uno stile visuale differente (classe `active`).

## Out of Scope
- Modifiche alla logica di autenticazione (chi può vedere cosa).
- Modifiche al layout della Navbar o del tema.
