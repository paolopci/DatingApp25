# Track Plan: Toast Notifications Service & Component

## Phase 1: Service Development
- [ ] Task: Creazione ToastService
    - [ ] Sub-task: Definisci interfaccia `Toast` (message, type, id).
    - [ ] Sub-task: Implementa gestione stato con `signal`.
    - [ ] Sub-task: Implementa metodi `success`, `error`, `info`, `warning`.
    - [ ] Sub-task: Implementa logica di auto-rimozione con `setTimeout`.
- [ ] Task: Conductor - User Manual Verification 'Service Development' (Protocol in workflow.md)

## Phase 2: Component Development
- [ ] Task: Generazione ToastComponent
    - [ ] Sub-task: Genera componente `core/components/toast`.
    - [ ] Sub-task: Implementa template HTML con struttura DaisyUI.
    - [ ] Sub-task: Implementa logica di visualizzazione (mapping tipi -> classi CSS).
- [ ] Task: Conductor - User Manual Verification 'Component Development' (Protocol in workflow.md)

## Phase 3: Integration & Testing
- [ ] Task: Integrazione Globale in AppComponent
    - [ ] Sub-task: Aggiungi `ToastComponent` al template di `AppComponent`.
- [ ] Task: Test di Verifica
    - [ ] Sub-task: Test manuale lanciando toast da un componente esistente (es. Home).
- [ ] Task: Conductor - User Manual Verification 'Integration & Testing' (Protocol in workflow.md)
