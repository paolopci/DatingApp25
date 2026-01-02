# Specifica del Track: Implementazione Member Repository

## 1. Panoramica
L'obiettivo è implementare il pattern Repository per l'entità `Member`, centralizzando l'accesso ai dati nella nuova cartella `API/Data/Repositories/`.

## 2. Requisiti Funzionali
- **Refactoring Entità:** Aggiunta della collezione `Photos` in `Member.cs` per supportare l'Eager Loading.
- **Refactoring Interfaccia:** Correzione della firma di `GetMemberByIdAsync` in `IMemberRepository` per usare `string id`.
- **Implementazione Repository:**
    - Creazione della cartella `API/Data/Repositories/`.
    - Creazione della classe `MemberRepository.cs` in `API.Data.Repositories` che implementa `IMemberRepository`.
    - Utilizzo di `.Include(m => m.Photos)` per recuperare le immagini associate.
- **Dependency Injection:** Registrazione del repository in `Program.cs`.
- **Controller Update:** Aggiornamento di `MembersController` per utilizzare `IMemberRepository` al posto del DbContext.

## 3. Criteri di Accettazione
- Il file `MemberRepository.cs` si trova in `API/Data/Repositories/`.
- Le API `/api/members` e `/api/members/{id}` funzionano correttamente restituendo i dati dei membri e le relative foto.
- Il codice segue il pattern Dependency Injection del progetto.
