# Specifica del Track: Seeding Dati con Script SQL

## 1. Panoramica
L'obiettivo è creare uno script SQL (`seed.sql`) per inizializzare il database con dati di test realistici. Lo script permetterà di resettare le tabelle `Users`, `Members` e `Photos` e ripopolarle con 20 profili (10 uomini e 10 donne).

## 2. Requisiti Funzionali
- **Reset del Database:** Lo script deve svuotare le tabelle `Photos`, `Members` e `Users`, gestendo i vincoli di foreign key (eliminazione in ordine corretto).
- **Generazione Dati:** 
    - 10 profili maschili e 10 profili femminili.
    - Nomi realistici (ispirati a randomuser.me).
    - Email nel formato `nome.cognome@Example.com` (univoche).
    - Campi: `Id` (GUID), `DisplayName`, `Email`, `Gender`, `DateOfBirth`, `City`, `Country`, `Description`, `Created`, `LastActive`.
- **Autenticazione:** Ogni utente avrà `PasswordHash` e `PasswordSalt` generati per la password: **Micene@65**.
- **Foto:** Ogni membro avrà un'immagine del profilo principale (`ImageUrl`) e almeno un record nella tabella `Photos`.
- **Posizionamento:** Il file deve essere salvato in `API/Data/scriptsDb/seed.sql`.

## 3. Criteri di Accettazione
- Il file `seed.sql` è presente in `API/Data/scriptsDb/`.
- L'esecuzione manuale su SQL Server popola correttamente le 3 tabelle senza errori di vincolo.
- Almeno un utente creato può effettuare il login nel sistema usando la password "Micene@65".

## 4. Fuori Ambito
- Integrazione automatica nel codice C#.
- Generazione dinamica tramite API durante l'esecuzione dello script.
