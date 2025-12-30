# Track Plan: Toast Notifications Service & Component

## Phase 1: Service Development [checkpoint: 928c27c]
- [x] Task: Creazione ToastService (1a9f473)
    - [x] Sub-task: Definisci interfaccia `Toast` (message, type, id).
    - [x] Sub-task: Implementa gestione stato con `signal`.
    - [x] Sub-task: Implementa metodi `success`, `error`, `info`, `warning`.
    - [x] Sub-task: Implementa logica di auto-rimozione con `setTimeout`.
- [ ] Task: Conductor - User Manual Verification 'Service Development' (Protocol in workflow.md)

## Phase 2: Component Development [checkpoint: a52e97a]
- [x] Task: Generazione ToastComponent (12d6b65)
    - [x] Sub-task: Genera componente `core/components/toast`.
    - [x] Sub-task: Implementa template HTML con struttura DaisyUI.
    - [x] Sub-task: Implementa logica di visualizzazione (mapping tipi -> classi CSS).
- [ ] Task: Conductor - User Manual Verification 'Component Development' (Protocol in workflow.md)

## Phase 3: Integration & Testing
- [x] Task: Integrazione Globale in AppComponent (9829d6a)
    - [x] Sub-task: Aggiungi `ToastComponent` al template di `AppComponent`.
- [x] Task: Test di Verifica (9829d6a)
    - [x] Sub-task: Test manuale lanciando toast da un componente esistente (es. Home).
- [ ] Task: Conductor - User Manual Verification 'Integration & Testing' (Protocol in workflow.md)
