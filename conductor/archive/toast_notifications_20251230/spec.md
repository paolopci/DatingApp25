# Specification: Toast Notifications Service & Component

## Overview
Implementazione di un sistema di notifiche Toast globale basato su DaisyUI. Il sistema permetterà di visualizzare messaggi temporanei (5 secondi) negli angoli dell'interfaccia, gestendo diversi stati (success, error, info, warning).

## Functional Requirements
- **ToastService (`core/services/toast-service.ts`):**
    - Metodi esposti: `success(message)`, `error(message)`, `info(message)`, `warning(message)`.
    - Gestione di un array di toast attivi tramite `signal` o `Observable`.
    - Rimozione automatica dopo 5 secondi.
- **ToastComponent:**
    - Visualizzazione dei toast utilizzando la struttura `toast toast-end` di DaisyUI.
    - Mapping dinamico dei tipi ai colori di DaisyUI (`alert-success`, `alert-error`, etc.).
- **Integrazione Globale:**
    - Inserimento del componente in `AppComponent` per la disponibilità in tutta l'app.

## Non-Functional Requirements
- **UX:** Le notifiche devono apparire in modo non intrusivo (angolo in basso a destra).
- **Clean Code:** Utilizzo di Angular Signals per la gestione dello stato reattivo se possibile.

## Acceptance Criteria
- [ ] Il servizio `ToastService` è iniettabile e funzionante.
- [ ] Chiamando `toastService.success('test')`, appare un toast verde per 5 secondi.
- [ ] Più notifiche contemporanee si impilano verticalmente.
- [ ] Il componente `app-toast` è presente nel root dell'applicazione.

## Out of Scope
- Gestione di azioni cliccabili all'interno dei toast (es. bottoni "Annulla").
- Persistenza delle notifiche tra ricaricamenti di pagina.
