# Piano di Implementazione: Seeding Dati tramite Script SQL

## Fase 1: Generazione Credenziali e Dati
- [ ] **Task 1.1: Generazione Hash/Salt per "Micene@65"**
  - Calcolare i valori binari (HMACSHA512) per la password "Micene@65" da usare nello script SQL.
- [ ] **Task 1.2: Definizione 20 Profili**
  - Predisporre i dati per 10 uomini e 10 donne con nomi realistici e email `nome.cognome@Example.com`.
- [ ] Task: Conductor - User Manual Verification 'Preparazione' (Protocol in workflow.md)

## Fase 2: Creazione Script SQL
- [ ] **Task 2.1: Sviluppo `seed.sql`**
  - Implementare il reset delle tabelle `Photos`, `Members` e `Users`.
  - Inserire i 20 record in `Users` (con Hash/Salt corretti).
  - Inserire i record corrispondenti in `Members` e `Photos`.
  - Salvare in `API/Data/scriptsDb/seed.sql`.
- [ ] Task: Conductor - User Manual Verification 'Generazione Script' (Protocol in workflow.md)

## Fase 3: Verifica
- [ ] **Task 3.1: Validazione finale dello script**
- [ ] Task: Conductor - User Manual Verification 'Verifica Finale' (Protocol in workflow.md)
