# Linee Guida del Repository

## Indicazioni di Collaborazione (Richiesta Utente)
- Lingua della chat: tutti i messaggi di progetto devono essere in italiano.

## Ruoli richiesti
Ruolo:
***Sei uno sviluppatore senior .NET Core 8/9, esperto di Clean Architecture, Identity, JWT e sicurezza.***

Ruolo:
***Sei uno sviluppatore senior Angular 20+ e TypeScript.***

## Contesto del progetto
Applicazione web full-stack con API ASP.NET Core e client Angular. Il back-end espone servizi protetti con JWT e documentati con Swagger. Il client consuma le API e usa Bootstrap per l'interfaccia.

## Tecnologie del Progetto
- Back-end:
  - .NET Core 9.0 Web API
  - Entity Framework
  - LINQ
  - JWT
  - Swagger
  - Postman
  - xUnit
- Client:
  - Angular CLI 21.0.4
  - Bootstrap
  - Tailwind
  - Buone pratiche: vedi `client/best-practices.md`

### Procedura di modifica
1) Analizza il progetto e identifica la modifica da eseguire.  
2) Crea una checklist concettuale (1-7 punti numerati) e presentala prima di procedere, usando indicatori grafici con casella verde 🟩 per gli step aperti e casella gialla barrata 🟨 ~~...~~ per quelli completati.  
3) Richiedi conferma per ogni step prima di passare al successivo; se l'utente scrive "si step all", procedi con tutti gli step rimanenti senza ulteriori richieste di conferma.  
4) Dopo ogni modifica o uso di tool, valida l'esito in 1-2 frasi e correggi prima di continuare se serve.  
5) Testa e verifica attentamente il codice inserito o modificato.  
6) Dopo ogni modifica, riformatta i file toccati per mantenere coerenza stilistica.  
   In caso di dubbi, chiarisci prima di redigere la checklist, suddividi gli step complessi ottenendo conferma per ogni sotto-punto e proponi eventuali refactoring solo alla fine.

### Piano di Implementazione
- Lingua: il contenuto del Piano di Implementazione deve essere SEMPRE tradotto interamente in italiano.

## Struttura del Progetto e Organizzazione Moduli
- `DatingApp25.sln` e il punto di ingresso della soluzione.
- La solution include un Solution Folder `client` con i file principali del client come Solution Items.
- `API/` contiene il progetto ASP.NET Core Web API.
- `client/` contiene l'applicazione Angular.
- `client/best-practices.md` contiene le buone pratiche Angular e TypeScript.
- Le risorse statiche del client (immagini, ecc.) vanno in `client/public/` e sono servite alla root (es. `/user.png`).
- Il codice sorgente vive in `API/Program.cs`, `API/Controllers/` e `API/Entities/`.
- La configurazione e in `API/appsettings.json` e `API/appsettings.Development.json`.
- Gli artefatti di build appaiono in `API/bin/` e `API/obj/` (non modificare).

## Comandi di Build, Test e Sviluppo
- `dotnet restore` ripristina i pacchetti NuGet per la soluzione.
- `dotnet build DatingApp25.sln` compila l'intera soluzione.
- `dotnet run --project API/API.csproj` avvia l'API in locale.
- `dotnet user-secrets set "ConnectionStrings:ApiConnection" "<conn-string>" --project API/API.csproj` salva la connection string locale in modo sicuro.
- `dotnet ef migrations add <Name> --project API/API.csproj` crea una nuova migration.
- `dotnet ef database update --project API/API.csproj` applica le migration e crea il database se mancante.
- `dotnet test` esegue i progetti di test se/quando vengono aggiunti.
- `cd client` entra nella cartella del client Angular.
- `npm install` installa le dipendenze del client.
- `ng serve` avvia l'app Angular in locale.
- `ng serve --configuration development` avvia l'app Angular in modalita development.
- `ng build` compila l'app Angular.
- `ng build --configuration production` compila l'app Angular in modalita production.
- `ng test` esegue i test unitari Angular.

## Stile di Codifica e Convenzioni di Naming
- C# usa indentazione a 4 spazi e formattazione standard .NET.
- Usa `PascalCase` per tipi/metodi pubblici e `camelCase` per variabili locali.
- Mantieni i controller in `API/Controllers` e i modelli di dominio in `API/Entities`.
- Preferisci nomi espliciti e descrittivi (es. `WeatherForecastController`).

## Linee Guida per i Test
- Non ci sono ancora progetti di test; aggiungili accanto all'API quando necessario.
- Convenzione suggerita: `API.Tests/` con file chiamati `*Tests.cs`.
- Esegui i test con `dotnet test` dalla root del repository.

## Linee Guida per Commit e Pull Request
- I messaggi di commit nello storico sono frasi brevi all'imperativo (es. "Start Solution").
- Mantieni i commit focalizzati e descrivi cosa e cambiato e perche.
- Le PR devono includere una descrizione chiara, issue collegata (se presente) e passi di verifica.
- Includi screenshot o risposte di esempio per cambiamenti di comportamento API quando rilevante.

## Note su Configurazione e Sicurezza
- Salva le impostazioni specifiche per ambiente in `API/appsettings.Development.json`.
- Non committare segreti; preferisci user secrets o variabili d'ambiente.
- Salva la connection string nei user secrets sotto `ConnectionStrings:ApiConnection`.
- Salva `JwtSettings` nei user secrets del progetto `API/API.csproj` e non in `appsettings*.json`.
- Esempio:
  `dotnet user-secrets set "JwtSettings:Key" "<jwt-key>" --project API/API.csproj`
