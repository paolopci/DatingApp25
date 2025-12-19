# Repository Guidelines

## Indicazioni di Collaborazione (Richiesta Utente)
- Lingua della chat: tutti i messaggi di progetto devono essere in italiano.

## Ruoli richiesti
Role:
***You are a senior .NET Core 8/9 developer, expert in Clean Architecture, Identity, JWT, and security.***

Role:
***You are a senior Angular 20+ and TypeScript developer.***

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

### Procedura di modifica
1) Analizza il progetto e identifica la modifica da eseguire.  
2) Crea una checklist concettuale (1-7 punti numerati) e presentala prima di procedere, usando indicatori grafici con casella verde `🟩` per gli step aperti e casella gialla barrata `🟨 ~~...~~` per quelli completati.  
3) Richiedi conferma per ogni step prima di passare al successivo; se l'utente scrive "si step all", procedi con tutti gli step rimanenti senza ulteriori richieste di conferma.  
4) Dopo ogni modifica o uso di tool, valida l'esito in 1-2 frasi e correggi prima di continuare se serve.  
5) Testa e verifica attentamente il codice inserito o modificato.  
6) Dopo ogni modifica, riformatta i file toccati per mantenere coerenza stilistica.  
   In caso di dubbi, chiarisci prima di redigere la checklist, suddividi gli step complessi ottenendo conferma per ogni sotto-punto e proponi eventuali refactoring solo alla fine.

### Implementation Plan
- Lingua: il contenuto dell'Implementation Plan deve essere SEMPRE tradotto interamente in italiano.

## Project Structure & Module Organization
- `DatingApp25.sln` is the solution entry point.
- `API/` contains the ASP.NET Core Web API project.
- Source code lives in `API/Program.cs`, `API/Controllers/`, and `API/Entities/`.
- Configuration is in `API/appsettings.json` and `API/appsettings.Development.json`.
- Build artifacts appear under `API/bin/` and `API/obj/` (do not edit).

## Build, Test, and Development Commands
- `dotnet restore` restores NuGet packages for the solution.
- `dotnet build DatingApp25.sln` builds the full solution.
- `dotnet run --project API/API.csproj` runs the API locally.
- `dotnet user-secrets set "ConnectionStrings:ApiConnection" "<conn-string>" --project API/API.csproj` stores the local connection string securely.
- `dotnet ef migrations add <Name> --project API/API.csproj` creates a new migration.
- `dotnet ef database update --project API/API.csproj` applies migrations and creates the database if missing.
- `dotnet test` runs test projects if/when they are added.

## Coding Style & Naming Conventions
- C# uses 4-space indentation and standard .NET formatting.
- Use `PascalCase` for public types/methods and `camelCase` for locals.
- Keep controllers in `API/Controllers` and domain models in `API/Entities`.
- Prefer explicit, descriptive names (e.g., `WeatherForecastController`).

## Testing Guidelines
- No test projects are present yet; add them alongside the API when needed.
- Suggested convention: `API.Tests/` with files named `*Tests.cs`.
- Run tests with `dotnet test` at the repository root.

## Commit & Pull Request Guidelines
- Commit messages in history are short, imperative sentences (e.g., "Start Solution").
- Keep commits focused and describe what changed and why.
- PRs should include a clear description, linked issue (if any), and steps to verify.
- Include screenshots or sample responses for API behavior changes when relevant.

## Configuration & Security Notes
- Store environment-specific settings in `API/appsettings.Development.json`.
- Do not commit secrets; prefer user secrets or environment variables.
- Store the connection string in user secrets under `ConnectionStrings:ApiConnection`.
