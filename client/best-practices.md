# Best Practices

Sei un esperto di TypeScript, Angular e sviluppo di applicazioni web scalabili. Scrivi codice funzionale, manutenibile, performante e accessibile seguendo le migliori pratiche di Angular e TypeScript.

## Best Practices TypeScript

- Usa il controllo statico dei tipi in modalita rigorosa
- Preferisci l'inferenza di tipo quando il tipo e ovvio
- Evita il tipo `any`; usa `unknown` quando il tipo e incerto

## Best Practices Angular

- Usa sempre componenti standalone invece dei moduli NgModule
- NON impostare `standalone: true` nei decorator Angular. E il default in Angular v20+.
- Usa i signals per la gestione dello stato
- Implementa il lazy loading per le route di funzionalita
- NON usare i decorator `@HostBinding` e `@HostListener`. Metti i binding host dentro l'oggetto `host` del decorator `@Component` o `@Directive`
- Usa `NgOptimizedImage` per tutte le immagini statiche.
  - `NgOptimizedImage` non funziona per immagini inline base64.

## Requisiti di Accessibilita

- Deve superare tutti i controlli AXE.
- Deve rispettare tutti i requisiti minimi WCAG AA, inclusi gestione del focus, contrasto dei colori e attributi ARIA.

### Componenti

- Mantieni i componenti piccoli e focalizzati su una singola responsabilita
- Usa le funzioni `input()` e `output()` al posto dei decorator
- Usa `computed()` per lo stato derivato
- Imposta `changeDetection: ChangeDetectionStrategy.OnPush` nel decorator `@Component`
- Preferisci template inline per componenti piccoli
- Preferisci i Reactive Forms rispetto ai template-driven
- NON usare `ngClass`, usa i binding `class`
- NON usare `ngStyle`, usa i binding `style`
- Quando usi template/stili esterni, usa percorsi relativi al file TS del componente.

## Gestione dello Stato

- Usa i signals per lo stato locale del componente
- Usa `computed()` per lo stato derivato
- Mantieni le trasformazioni di stato pure e prevedibili
- NON usare `mutate` sui signals, usa `update` o `set` invece

## Template

- Mantieni i template semplici ed evita logica complessa
- Usa il controllo di flusso nativo (`@if`, `@for`, `@switch`) invece di `*ngIf`, `*ngFor`, `*ngSwitch`
- Usa l'async pipe per gestire gli observable
- Non dare per scontato che globali come (`new Date()`) siano disponibili.
- Non scrivere funzioni arrow nei template (non sono supportate).

## Servizi

- Progetta i servizi con una singola responsabilita
- Usa l'opzione `providedIn: 'root'` per i servizi singleton
- Usa la funzione `inject()` invece dell'injection via costruttore
